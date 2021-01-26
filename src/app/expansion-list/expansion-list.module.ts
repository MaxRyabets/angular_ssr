import { NgModule } from '@angular/core';
import { ExpansionListComponent } from './expansion-list.component';
import { ItemComponent } from './item/item.component';
import { DisablePanelDirective } from './disable-panel.directive';
import { ItemHeaderComponent } from './item/item-header/item-header.component';
import { ItemBodyComponent } from './item/item-body/item-body.component';

@NgModule({
  declarations: [
    ItemComponent,
    DisablePanelDirective,
    ExpansionListComponent,
    ItemHeaderComponent,
    ItemBodyComponent,
  ],
  imports: [],
  exports: [
    ItemComponent,
    DisablePanelDirective,
    ExpansionListComponent,
    ItemHeaderComponent,
    ItemBodyComponent,
  ],
})
export class ExpansionListModule {}
