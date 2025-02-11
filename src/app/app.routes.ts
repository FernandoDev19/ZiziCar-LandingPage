import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ThanksComponent } from './thanks/thanks.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: '**', redirectTo: '' }
];
