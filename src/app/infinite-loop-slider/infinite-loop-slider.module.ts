import { NgModule } from '@angular/core';
import { InfiniteLoopSliderComponent } from './infinite-loop-slider.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [InfiniteLoopSliderComponent, SlideComponent],
  exports: [InfiniteLoopSliderComponent, SlideComponent],
})
export class InfiniteLoopSliderModule {}
