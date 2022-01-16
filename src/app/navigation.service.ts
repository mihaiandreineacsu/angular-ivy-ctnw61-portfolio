import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
  constructor(public router: Router) {}

  forceNavigate(name: string) {
    this.router
      .navigate(['/'], { fragment: name })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  scroll() {
    if (this.router.url !== '/imprint') {
      if (window.scrollY >= window.innerHeight) {
        document.getElementById('menu').style.top = '0';
      } else {
        document.getElementById('menu').style.top =
          window.innerHeight - window.scrollY + 'px';
      }
    }
  }

  _visibilityChangeHandler(event: any) {
    //console.log(event);
  }
}
