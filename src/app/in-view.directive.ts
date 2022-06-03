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

/**
 * The view state of the element been observed.
 */
declare interface VisibilityState {
  elem: ElementRef;
  view: 'VISIBLE' | 'HIDDEN';
}

@Directive({
  selector: '[appInView]',
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  /**
   * Emited each time @method _callback has been called
   */
  @Output() visibilityChange = new EventEmitter<VisibilityState>();

  /**
   * @see Documentation https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   */
  private _observer: IntersectionObserver;

  constructor(private _elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const options = { root: null, rootMargin: '0px', threshold: [1.0] };
    this._observer = new IntersectionObserver(this._callback, options);
    this._observer.observe(this._elementRef.nativeElement);
  }

  /**
   * Callback Function every time the observed element changes visibility state.
   * Visibility state depends on the threshold values of the observer
   *
   * @see Documentation https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   */
  private _callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) =>
      this.visibilityChange.emit(this._getVisibilityState(entry))
    );
  };

  /**
   * Gives back the Visibility State of the element been observed.
   */
  _getVisibilityState(entry: IntersectionObserverEntry): VisibilityState {
    console.log(entry);
    let result = entry.isIntersecting ? 'VISIBLE' : 'HIDDEN';
    return { elem: this._elementRef, view: result } as VisibilityState;
  }

  ngOnDestroy(): void {
    this._observer.disconnect();
  }
}
