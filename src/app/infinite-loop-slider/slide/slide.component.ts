import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/**
 * Represents a slide
 */
export class SlideComponent {
  @HostBinding('class.swiper-slide') isSwiperSlide = true;
}
