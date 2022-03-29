import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HeadComponent } from './head/head.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

import { NavigationService } from './navigation.service';
import { InViewDirective } from './in-view.directive';
import { InViewPortService } from './in-view-port.service';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModuleConfig } from '@ngx-translate/core/public_api';

// import { PrismModule } from 'ng-prismjs';

import { filter } from 'rxjs';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const config: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  defaultLanguage: 'en',
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(config),
  ],
  declarations: [
    AppComponent,
    StartComponent,
    HeadComponent,
    AboutComponent,
    PortfolioComponent,
    FooterComponent,
    ImprintComponent,
    MenuComponent,
    ContactComponent,
    InViewDirective,
  ],
  bootstrap: [AppComponent],
  providers: [NavigationService, InViewPortService],
})
export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 0]);
    router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e: Scroll) => {
        //a good solve but it still does not scroll to anchor element after second click on the same anchor
        //one fix should be to set routing config option onSameUrlNavigation: 'reload',
        if (e.anchor) {
          // anchor navigation
          /* setTimeout is the core line to solve the solution */
          setTimeout(() => {
            viewportScroller.scrollToAnchor(e.anchor);
          });
        } else if (e.position) {
          // backward navigation
          viewportScroller.scrollToPosition(e.position);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
