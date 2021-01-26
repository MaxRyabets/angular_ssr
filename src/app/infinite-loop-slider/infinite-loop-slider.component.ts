import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from '@angular/core';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import Swiper from 'swiper';
import { Breakpoint } from './breakpoint';

@Component({
  selector: 'app-infinite-loop-slider',
  templateUrl: './infinite-loop-slider.component.html',
  styleUrls: ['./infinite-loop-slider.component.scss'],
})
export class InfiniteLoopSliderComponent implements AfterViewInit {
  private readonly defaultBreakPoints = new Map([
    [576, 1],
    [768, 2],
    [992, 3],
    [1199, 4],
    [1200, 5],
  ]);

  @Input() breakpoints: Map<number, number>;
  @Input() delay: number;

  constructor(private elementRef: ElementRef) {
    SwiperCore.use([Navigation, Autoplay]);
  }

  ngAfterViewInit(): void {
    const breakpoints = this.getBreakpoints();
    this.initSlider(breakpoints);
  }

  private initSlider(breakpoints: Breakpoint): Swiper {
    return new Swiper(this.elementRef.nativeElement, {
      loop: true,
      autoplay: {
        delay: this.delay,
        disableOnInteraction: false,
      },
      breakpoints: breakpoints as {},
    });
  }

  private getBreakpoints(): Breakpoint {
    return this.breakpoints.size
      ? this.transformToBreakpoint(this.breakpoints)
      : this.transformToBreakpoint(this.defaultBreakPoints);
  }

  private transformToBreakpoint(breakpoints: Map<number, number>): Breakpoint {
    const localBreakpoints: Breakpoint = {};

    breakpoints.forEach((slidesPerView, screenSize) => {
      localBreakpoints[screenSize] = {
        slidesPerView,
      };
    });

    return localBreakpoints;
  }
}
