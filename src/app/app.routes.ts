import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: '**', redirectTo: '' }
];
