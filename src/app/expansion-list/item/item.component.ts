import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemState } from './item-state';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * Represents a item from list.
 * This component is wrapper for item-header/item-body and
 * needed for save state open/close if click on item
 * for show/hide animation in body component.
 * If item has attribute disabled then ignore update status.
 */
export class ItemComponent {
  private state: BehaviorSubject<
    ItemState.Close | ItemState.Open
  > = new BehaviorSubject<ItemState.Close | ItemState.Open>(ItemState.Close);

  @HostListener('click', ['$event.target'])
  onClick(target): void {
    if (target.getAttribute('disabled')) {
      return;
    }

    const updateState =
      this.state.getValue() === ItemState.Close
        ? ItemState.Open
        : ItemState.Close;

    this.state.next(updateState);
  }

  getState(): Observable<ItemState.Close | ItemState.Open> {
    return this.state.asObservable();
  }
}
