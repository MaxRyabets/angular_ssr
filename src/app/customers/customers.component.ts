import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent implements OnInit {
  title = 'Angular 10 Universal Example';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Angular, Universal, Example' },
      { name: 'description', content: 'Angular Universal Example' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
