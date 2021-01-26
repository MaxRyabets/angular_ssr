import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisablePanel]',
})
export class DisablePanelDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.toggle('disable');
    this.elementRef.nativeElement.setAttribute('disabled', 'true');
  }
}
