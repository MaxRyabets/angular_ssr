import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { ItemComponent } from '../item.component';
import { Subject } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationState } from './animation-state';

@Component({
  selector: 'app-item-body',
  templateUrl: './item-body.component.html',
  styleUrls: ['./item-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state(
        'start',
        style({
          opacity: '0',
          height: '0px',
        })
      ),
      state(
        'end',
        style({
          height: '*',
        })
      ),
      transition('start => end', [
        style({ transform: 'translate3d(0,100%,0) scale3d(0.5,0.5,0.5)' }),
        animate('1s ease-in-out'),
      ]),
      transition('end => start', animate('1s ease-in-out')),
    ]),
  ],
})
export class ItemBodyComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject();

  animation: AnimationState.Start | AnimationState.End = AnimationState.Start;

  constructor(
    private readonly itemComponent: ItemComponent,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.itemComponent
      .getState()
      .pipe(
        takeUntil(this.destroy$),
        tap((itemState: number) => {
          this.animation = itemState
            ? AnimationState.End
            : AnimationState.Start;
          this.changeDetectorRef.detectChanges();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
