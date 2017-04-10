import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  },
  {
    path: 'how-to-help',
    component: HowToHelpComponent
  },
  {
    path: 'volunteers/:id',
    component: VolunteerDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
