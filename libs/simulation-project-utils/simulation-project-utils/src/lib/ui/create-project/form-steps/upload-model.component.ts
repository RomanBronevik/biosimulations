import { Component } from '@angular/core';
import { CreateMaxFileSizeValidator, URL_VALIDATOR } from '@biosimulations/shared/ui';
import { OntologyTerm } from '../../../../index';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  ValidationErrors,
  AbstractControlOptions,
} from '@angular/forms';
import { BIOSIMULATIONS_FORMATS } from '@biosimulations/ontology/extra-sources';
import { EdamTerm } from '@biosimulations/datamodel/common';
import { IFormStepComponent, FormStepData } from '../create-project/forms';
import { ConfigService } from '@biosimulations/config/angular';

@Component({
  selector: 'create-project-upload-model',
  templateUrl: './upload-model.component.html',
  styleUrls: ['./form-steps.scss'],
})
export class UploadModelComponent implements IFormStepComponent {
  public formGroup: UntypedFormGroup;
  public modelFormats?: OntologyTerm[];
  public nextClicked = false;

  public constructor(private formBuilder: UntypedFormBuilder, private config: ConfigService) {
    this.formGroup = this.formBuilder.group(
      {
        modelFile: [null, [CreateMaxFileSizeValidator(this.config)]],
        modelUrl: [null, [URL_VALIDATOR]],
        modelFormat: [null, [Validators.required]],
      },
      {
        validators: this.formValidator.bind(this),
      } as AbstractControlOptions,
    );
  }

  public populateFormFromFormStepData(formStepData: FormStepData): void {
    this.formGroup.controls.modelFormat.setValue(formStepData.modelFormat);
    this.formGroup.controls.modelUrl.setValue(formStepData.modelUrl);
  }

  public getFormStepData(): FormStepData | null {
    this.formGroup.updateValueAndValidity();
    if (!this.formGroup.valid) {
      return null;
    }
    const modelFile = this.formGroup.value.modelFile?.files[0];
    const modelUrl = this.formGroup.value.modelUrl;
    const modelFormat = this.formGroup.value.modelFormat;
    return {
      modelUrl: modelUrl,
      modelFile: modelFile,
      modelFormat: modelFormat,
    };
  }

  public supportedFileTypes(): string {
    const specifierSet = BIOSIMULATIONS_FORMATS.reduce(function (result: Set<string>, format: EdamTerm) {
      if (!format?.biosimulationsMetadata?.modelFormatMetadata?.introspectionAvailable) {
        return result;
      }
      format.fileExtensions.forEach((extension: string): void => {
        result.add('.' + extension);
      });
      format.mediaTypes.forEach((mediaType: string): void => {
        result.add(mediaType);
      });
      return result;
    }, new Set<string>());
    return Array.from(specifierSet).join(',');
  }

  private formValidator(formGroup: UntypedFormGroup): ValidationErrors | null {
    const errors: ValidationErrors = {};
    if (!formGroup.value.modelFile && !formGroup.value.modelUrl) {
      errors['noModel'] = true;
    }
    if (formGroup.value.modelFile && formGroup.value.modelUrl) {
      errors['multipleModels'] = true;
    }
    return Object.keys(errors).length ? errors : null;
  }
}
