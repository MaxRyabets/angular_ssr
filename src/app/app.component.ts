import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Image } from './image';
import { SliderService } from './slider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /**
   * A set of slides for each slide component separately
   */
  slides$: Observable<Image[]> = this.sliderService.getSlides();

  // [size screen, count slides]
  breakpoints = new Map([
    [576, 1],
    [768, 2],
    [992, 3],
    [1199, 4],
    [1200, 5],
  ]);

  delay = 5000;

  constructor(private readonly sliderService: SliderService) {}
}
