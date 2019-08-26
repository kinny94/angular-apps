import { Directive, HostBinding, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighLighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighLighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return 'true';
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    this.isHighLighted = true;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.isHighLighted = false;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  constructor() { }

}
