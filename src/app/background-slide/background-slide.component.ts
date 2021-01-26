import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-background-slide',
  templateUrl: './background-slide.component.html',
  styleUrls: ['./background-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundSlideComponent {
  @HostBinding('style.background') background = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}
