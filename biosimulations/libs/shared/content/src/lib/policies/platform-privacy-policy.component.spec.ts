import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiModule } from '@biosimulations/shared/ui';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { ConfigService } from '@biosimulations/shared/services';
import { PlatformPrivacyPolicyComponent } from './platform-privacy-policy.component';

describe('PlatformPrivacyPolicyComponent', () => {
  let component: PlatformPrivacyPolicyComponent;
  let fixture: ComponentFixture<PlatformPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlatformPrivacyPolicyComponent,
      ],
      imports: [
        SharedUiModule,
        BiosimulationsIconsModule,
      ],
      providers: [
        ConfigService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
