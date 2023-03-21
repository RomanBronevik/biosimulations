import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { map, catchError, concatAll, shareReplay } from 'rxjs/operators';
import { AppRoutes } from '@biosimulations/config/common';
import { SimulationService } from '../../../services/simulation/simulation.service';
import { ProjectService } from '@biosimulations/angular-api-client';
import { ConfigService } from '@biosimulations/config/angular';
import { Simulation, UnknownSimulation, isUnknownSimulation } from '../../../datamodel';
import { ProjectInput } from '@biosimulations/datamodel/common';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  AbstractControl,
  Validators,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
import { environment } from '@biosimulations/shared/environments';
import { Router } from '@angular/router';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { BiosimulationsError } from '@biosimulations/shared/error-handler';
import { HtmlSnackBarComponent } from '@biosimulations/shared/ui';
import { Endpoints } from '@biosimulations/config/common';

@Component({
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss'],
})
export class PublishComponent implements OnInit, OnDestroy {
  private uuid!: string;
  public archiveUrl!: string;

  private simulation!: Simulation;
  public valid$!: Observable<true | string>;

  public formGroup: UntypedFormGroup;
  public submitPushed = false;

  private subscriptions: Subscription[] = [];

  private appRoutes = new AppRoutes();

  private endpoints = new Endpoints();

  public constructor(
    private route: ActivatedRoute,
    private simulationService: SimulationService,
    private projectService: ProjectService,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private config: ConfigService,
  ) {
    this.formGroup = formBuilder.group({
      id: [null, [Validators.required, Validators.pattern(/^[a-z0-9_-]{3,}$/i)], [this.idAvailableValidator()]],
      isValid: [false, [Validators.required]],
      grantedLicense: [false, [Validators.required]],
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  public idAvailableValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.isIdAvailable(control.value).pipe(
        map((available: boolean): ValidationErrors | null => {
          if (available) {
            return null;
          } else {
            return { available: true };
          }
        }),
      );
    };
  }

  public isIdAvailable(id: string): Observable<boolean> {
    return this.projectService.getProject(id).pipe(
      map((_): false => false),
      catchError((_error: HttpErrorResponse): Observable<boolean> => {
        return of(true);
      }),
    );
  }

  public ngOnInit(): void {
    this.uuid = this.route.snapshot.params['uuid'];
    this.archiveUrl = this.endpoints.getSimulationRunDownloadEndpoint(false, this.uuid);

    const simulation$ = this.simulationService.getSimulation(this.uuid).pipe(
      map((simulation: Simulation | UnknownSimulation): Simulation => {
        if (isUnknownSimulation(simulation)) {
          throw new BiosimulationsError(
            'Simulation run not found',
            "We're sorry! The run you requested could not be found.",
            HttpStatusCode.NotFound,
          );
        }
        return simulation as Simulation;
      }),
      shareReplay(1),
    );

    this.valid$ = simulation$.pipe(
      map(() => {
        const projectInput: ProjectInput = {
          id: 'test',
          simulationRun: this.uuid,
        };
        return this.projectService.isProjectValid(projectInput, false, false, true);
      }),
      concatAll(),
      shareReplay(1),
    );
  }

  public publishSimulation(): void {
    this.submitPushed = true;
    this.formGroup.updateValueAndValidity();

    if (this.formGroup.invalid) {
      return;
    }

    const id = this.formGroup.controls.id.value;

    const pubSub = this.projectService
      .publishProject({
        id: id,
        simulationRun: this.uuid,
      })
      .pipe(
        map(() => {
          const url = this.appRoutes.getProjectsView(id);
          const tabWindowId = window.open(url, 'biosimulations');

          this.snackBar.open('Your project was successfully published!.', 'Ok', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        }),
        catchError((error: HttpErrorResponse): Observable<undefined> => {
          if (!environment.production) {
            console.error(error);
          }

          this.snackBar.open('Sorry! We were unable to publish your project. Please refresh to try again.', 'Ok', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });

          return of<undefined>(undefined);
        }),
      )
      .subscribe((): void => {});
    this.subscriptions.push(pubSub);

    // print status
    this.snackBar.openFromComponent(HtmlSnackBarComponent, {
      data: {
        message: 'Please wait while your project is published',
        spinner: true,
        action: 'Ok',
      },
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
