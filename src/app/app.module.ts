import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TermComponent } from './item/term.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpansionListModule } from './expansion-list/expansion-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundSlideComponent } from './background-slide/background-slide.component';
import { InfiniteLoopSliderModule } from './infinite-loop-slider/infinite-loop-slider.module';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [AppComponent, TermComponent, BackgroundSlideComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ExpansionListModule,
    InfiniteLoopSliderModule,
    CustomersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
