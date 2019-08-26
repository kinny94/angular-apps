import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighLighted = false;

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighLighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return 'true';
  }

  constructor() { }

}
