import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@biosimulations/config/angular';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'biosimulations-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isMobileSimulators = false;
  public mobileLink?: string;

  public constructor(public config: ConfigService, private observer: BreakpointObserver) {
    /* Constructor is empty */
  }

  public ngOnInit(): void {
    this.checkClientScreenSimulatorsHome();
  }

  private checkClientScreenSimulatorsHome(): void {
    this.observer.observe(Breakpoints.Handset || Breakpoints.TabletLandscape).subscribe((result) => {
      if (result.matches) {
        this.isMobileSimulators = !this.isMobileSimulators;
      }
    });
  }

  public navigateToMobileLink(mobileLink: string): void {
    window.open(mobileLink, '_blank');
  }
}
