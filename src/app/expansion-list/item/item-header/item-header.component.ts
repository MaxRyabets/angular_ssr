import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemHeaderComponent {}
