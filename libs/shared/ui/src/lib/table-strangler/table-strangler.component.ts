import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TableComponent } from '../table/table.component';
import { Column } from '../table/table.interface';

import { ControlColumn, ControlsState } from './controls.model';

@Component({
  selector: 'biosimulations-table-strangler',
  templateUrl: './table-strangler.component.html',
  styleUrls: ['./table-strangler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableStranglerComponent {
  @Input()
  public table!: TableComponent;
  @Input()
  public openControlPanelId = 1;
  @Input()
  public attributesHeading = 'Columns';

  @Input()
  public searchPlaceHolder!: string;

  @Input()
  public searchToolTip!: string;

  @Input()
  public closeable = false;

  @Input()
  public columns: Column[] = [];

  @Output()
  public controlsStateUpdated = new EventEmitter<ControlsState>();

  public columnFilterData: { [key: string]: any } = {};

  public ngOnInit(): void {
    this.columns.forEach((column) => {
      column._visible = column.show;
    });
    this.columnFilterData = this.table.columnFilterData;
  }
  private controlsOpen = true;

  public toggleControls(): void {
    this.controlsOpen = !this.controlsOpen;
    this.updateControlsState();
  }
  public toggleColumn(event: MatCheckboxChange, column: ControlColumn): void {
    const checked = event.checked;
    column._visible = checked;

    this.updateControlsState();
  }

  public openControlPanel(id: number): void {
    if (id != this.openControlPanelId) {
      this.openControlPanelId = id;
      this.updateControlsState();
    }
  }

  public updateControlsState(): void {
    this.controlsStateUpdated.emit({
      openControlPanelId: this.openControlPanelId,
      controlsOpen: this.controlsOpen,
      columns: this.columns,
    });
  }
}
