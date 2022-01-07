import { ExtraOptions, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StartComponent } from './start/start.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes = [
  { path: '', component: StartComponent },
  { path: 'imprint', component: ImprintComponent },
];

const config = {
  /* instead of use extraOptions for Router */
  onSameUrlNavigation:
    'reload' /**fix to rescroll to same anchor url after scrolling */,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, <ExtraOptions>config)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
