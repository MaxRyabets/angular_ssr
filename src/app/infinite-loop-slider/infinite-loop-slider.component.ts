import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import Swiper from 'swiper';
import { Breakpoint } from './breakpoint';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-infinite-loop-slider',
  templateUrl: './infinite-loop-slider.component.html',
  styleUrls: ['./infinite-loop-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  constructor(
    private readonly elementRef: ElementRef,
    @Inject(PLATFORM_ID) private readonly platformId: any
  ) {
    SwiperCore.use([Navigation, Autoplay]);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const breakpoints = this.getBreakpoints();

    const swiper = new Swiper(this.elementRef.nativeElement, {
      loop: true,
      autoplay: {
        delay: this.delay,
        disableOnInteraction: false,
      },
      breakpoints: breakpoints as {},
    });
  }

  private getBreakpoints(): Breakpoint {
    const breakpoints = this.breakpoints.size
      ? this.breakpoints
      : this.defaultBreakPoints;

    return this.transformToBreakpoint(breakpoints);
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
