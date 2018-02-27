import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedfont]'
})

export class RedfontDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
  }

}
