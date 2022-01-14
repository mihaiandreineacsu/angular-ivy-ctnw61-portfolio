import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  @Output() visibilityChange = new EventEmitter<'VISIBLE' | 'HIDDEN'>();

  private _observer: IntersectionObserver;

  constructor(private _elementRef: ElementRef) {}

  ngOnDestroy(): void {
    this._observer.disconnect();
  }

  ngAfterViewInit(): void {
    const options = { root: null, rootMargin: '0px', threshold: 1.0 };
    this._observer = new IntersectionObserver(this._callback, options);
    this._observer.observe(this._elementRef.nativeElement);
  }

  private _callback = (entries, observer) => {
    entries.forEach((entry) =>
      this.visibilityChange.emit(entry.isIntersecting ? 'VISIBLE' : 'HIDDEN')
    );
  };
}
