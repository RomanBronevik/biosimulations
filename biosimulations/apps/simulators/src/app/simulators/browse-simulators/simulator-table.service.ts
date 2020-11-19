import { Injectable } from '@angular/core';
import { SimulatorService } from '../simulator.service';
import { forkJoin, from, Observable, of } from 'rxjs';
import { map, mergeAll, toArray, mergeMap, pluck } from 'rxjs/operators';
import { TableSimulator } from './tableSimulator.interface';
import { OntologyService } from '../ontology.service';
import { Simulator, Algorithm } from '@biosimulations/simulators/api-models';
import { UtilsService } from '@biosimulations/shared/services';

@Injectable()
export class SimulatorTableService {
  constructor(
    private service: SimulatorService,
    private ontologyService: OntologyService
  ) {}

  getData(): Observable<TableSimulator[]> {
    const data = this.service.getLatest().pipe(
      //Data from the service is an array of API objects - Convert to array of table objects
      map((simulators: Simulator[]) => {
        // Go through the array and convert each api object to a an observable of a table object
        //Array of table object observables
        const tableSimulatorObservables = simulators.map(
          (simulator: Simulator) => {
            // Simulator is a api object
            //Use the data to get the definitions for all additional calls
            const frameworks = this.getFrameworks(simulator);
            const algorithms = this.getAlgorithms(simulator);
            const modelFormats = this.getFormats(simulator, 'modelFormats');
            const simulationFormats = this.getFormats(simulator, 'simulationFormats');
            const archiveFormats = this.getFormats(simulator, 'archiveFormats');
            const license = this.getLicense(simulator);

            // These are all observables of string[] that need to be collapsed
            const innerObservables: any = {
              frameworks: frameworks,
              algorithms: algorithms,
              modelFormats: modelFormats,
              simulationFormats: simulationFormats,
              archiveFormats: archiveFormats,              
            };
            if (license instanceof Observable) {
              innerObservables['license'] = license;
            }

            const frameworkIds = new Set<string>();
            const algorithmIds = new Set<string>();
            const modelFormatIds = new Set<string>();
            const simulationFormatIds = new Set<string>();
            const archiveFormatIds = new Set<string>();
            for (const alg of simulator.algorithms) {
              for (const framework of alg.modelingFrameworks) {
                frameworkIds.add(framework.id);
              }
              if (alg.kisaoId) {
                algorithmIds.add(alg.kisaoId.id);
              }
              for (const format of alg.modelFormats) {
                modelFormatIds.add(format.id);
              }
              for (const format of alg.simulationFormats) {
                simulationFormatIds.add(format.id);
              }
              for (const format of alg.archiveFormats) {
                archiveFormatIds.add(format.id);
              }
            }

            const curationStatus = UtilsService.getSimulatorCurationStatus(simulator);

            //Observable of the table object
            const tableSimulatorObservable = of(innerObservables).pipe(
              mergeMap((sourceValue) => {
                const innerInnerObservables: any = {
                  algorithms: sourceValue.algorithms,
                  frameworks: sourceValue.frameworks,                  
                  modelFormats: sourceValue.modelFormats,
                  simulationFormats: sourceValue.simulationFormats,
                  archiveFormats: sourceValue.archiveFormats,                  
                };
                if (license instanceof Observable) {
                  innerInnerObservables['license'] = license;
                }
                return forkJoin(innerInnerObservables).pipe(
                  map((value: any) => {
                    // Table simulator
                    const returnVal: any = {
                      id: simulator.id,
                      name: simulator.name,
                      latestVersion: simulator.version,
                      url: simulator.url,
                      created: new Date(simulator.created),
                      licenseId: simulator.license ? simulator.license.id : null,
                      frameworks: value.frameworks,
                      frameworkIds: [...frameworkIds],
                      algorithms: value.algorithms,
                      algorithmIds: [...algorithmIds],
                      modelFormats: value.modelFormats,
                      modelFormatIds: [...modelFormatIds],
                      simulationFormats: value.simulationFormats,
                      simulationFormatIds: [...simulationFormatIds],
                      archiveFormats: value.archiveFormats,
                      archiveFormatIds: [...archiveFormatIds],
                      image: simulator.image || undefined,
                      curationStatus: curationStatus,
                    };
                    if (license instanceof Observable) {
                      returnVal['license'] = value.license;
                    } else {
                      returnVal['license'] = license;
                    }
                    return returnVal;
                  })
                )
              })
            );
            return tableSimulatorObservable;
          }
        );

        const observableTableSimulators = from(tableSimulatorObservables).pipe(
          mergeAll(),
          toArray()
        );
        return observableTableSimulators;
      }),
      mergeAll()
    );
    return data;
  }

  getLicense(simulator: any): Observable<string> | null {
    if (simulator.license) {
      return this.ontologyService.getSpdxTerm(simulator.license.id).pipe(
        pluck('name'),
        map((name) => this.shortenLicense(name))
      );
    } else {
      return null;
    }
  }

  getFormats(simulator: any, formatType: string): Observable<string[]> {
    const formats: Set<string> = new Set();
    for (const algorithm of simulator.algorithms) {
      for (const format of algorithm[formatType]) {
        formats.add(format.id as string);
      }
    }
    const formatsArr: Observable<string>[] = [];
    for (const id of formats) {
      formatsArr.push(this.ontologyService.getEdamTerm(id).pipe(pluck('name')));
    }
    const obs = from(formatsArr).pipe(mergeAll(), toArray());

    return obs;
  }

  getFrameworks(simulator: any): Observable<string[]> {
    const frameworks: Set<string> = new Set();
    for (const algorithm of simulator.algorithms) {
      for (const framework of algorithm.modelingFrameworks) {
        frameworks.add(framework.id);
      }
    }

    const frameworksArr: Observable<string>[] = [];
    for (const id of frameworks) {
      frameworksArr.push(
        this.ontologyService.getSboTerm(id).pipe(
          pluck('name'),
          map((name) => this.trimFramework(name))
        )
      );
    }

    const obs = from(frameworksArr).pipe(mergeAll(), toArray());
    return obs;
  }

  getAlgorithms(simulator: any): Observable<string[]> {
    const algorithms: Set<string> = new Set();
    for (const algorithm of simulator.algorithms) {
      if (algorithm.kisaoId) {
        algorithms.add(algorithm.kisaoId.id);
      }
    }

    const alg: Observable<string>[] = [];
    for (const id of algorithms) {
      alg.push(this.ontologyService.getKisaoTerm(id).pipe(pluck('name')));
    }
    const obs = from(alg).pipe(mergeAll(), toArray());
    return obs;
  }

  trimFramework(name: string): string {
    if (name && name.toLowerCase().endsWith(' framework')) {
      name = name.substring(0, name.length - 10).trim();
    }
    return name;
  }

  shortenLicense(name: string | undefined): string {
    if (name) {
      return name
        .replace(/\bLicense\b/, '')
        .replace('  ', ' ')
        .trim();
    } else {
      return '';
    }
  }
}
