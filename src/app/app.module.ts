import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TermComponent } from './item/term.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpansionListModule } from './expansion-list/expansion-list.module';

@NgModule({
  declarations: [AppComponent, TermComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ExpansionListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
