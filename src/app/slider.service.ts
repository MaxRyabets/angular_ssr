import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image } from './image';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  getSlides(): Observable<Image[]> {
    return of<Image[]>([
      {
        name: 'image1',
        image: 'https://picsum.photos/id/237/200/300',
        link: 'https://picsum.photos/id/237/200/300',
      },
      {
        name: 'image2',
        image: 'https://picsum.photos/id/45/2450/1387',
        link: 'https://picsum.photos/id/45/2450/1387',
      },
      {
        name: 'image3',
        image: 'https://picsum.photos/id/227/1024/768',
        link: 'https://picsum.photos/id/227/1024/768',
      },
      {
        name: 'image4',
        image: 'https://picsum.photos/id/345/420/1740',
        link: 'https://picsum.photos/id/345/420/1740',
      },
      {
        name: 'image5',
        image: 'https://picsum.photos/id/237/2764/200',
        link: 'https://picsum.photos/id/237/2764/200',
      },
      {
        name: 'image6',
        image: 'https://picsum.photos/id/249/874/1960',
        link: 'https://picsum.photos/id/249/874/1960',
      },
    ]);
  }
}
