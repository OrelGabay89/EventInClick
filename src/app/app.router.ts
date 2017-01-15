import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { WelcomePageComponent }    from './welcomePage.component';
import { CelebrationTypeComponent }  from './celebration-type.component';
import { SelectRegionComponent }    from './select-region.component';
import { MoreDetailsComponent }    from './more-details.component';
import { SummeryComponent }    from './summery.component';
import { ResultsComponent }    from './results.component';

const router: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'celebration-type', component: CelebrationTypeComponent },
  { path: 'select-region', component: SelectRegionComponent },
  { path: 'more-details', component: MoreDetailsComponent },
  { path: 'summery', component: SummeryComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'test', component: AppComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

