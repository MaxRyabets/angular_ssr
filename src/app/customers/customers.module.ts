import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [CustomersRoutingModule],
  declarations: [CustomersComponent],
})
export class CustomersModule {}
