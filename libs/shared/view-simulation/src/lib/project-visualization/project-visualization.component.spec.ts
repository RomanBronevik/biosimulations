import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { SharedVizUiModule } from '@biosimulations/shared/viz-ui';
import { ProjectVisualizationComponent } from './project-visualization.component';
import { PlotlyVisualizationComponent } from '@biosimulations/shared/viz-ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('ProjectVisualizationComponent', () => {
  let component: ProjectVisualizationComponent;
  let fixture: ComponentFixture<ProjectVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectVisualizationComponent, PlotlyVisualizationComponent],
      imports: [
        BiosimulationsIconsModule,
        SharedUiModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectVisualizationComponent);
    component = fixture.componentInstance;
    component.visualization = {
      _type: 'VegaVisualization',
      id: '',
      name: '',
      renderer: 'Vega',
      vegaSpec: of(false),
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
