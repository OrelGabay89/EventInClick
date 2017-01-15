import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule }  from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule,JsonpModule  }        from '@angular/http';

import { AppComponent }         from './app.component';
import { WelcomePageComponent }    from './welcomePage.component';
import { CelebrationTypeComponent }  from './celebration-type.component';
import { SelectRegionComponent }    from './select-region.component';
import { MoreDetailsComponent }    from './more-details.component';
import { SummeryComponent }    from './summery.component'

import { ResultsComponent }    from './results.component';
import { HallService } from './services/HallService';
import { routes } from './app.router';

import {CSSCarouselComponent} from './carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdTooltipTplcontent } from './tooltip-tplcontent.component';
import { KeysPipe } from './pipe';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
  imports: [
    NgbModule.forRoot(),
    [BrowserModule,ReactiveFormsModule],
    FormsModule,
    HttpModule,
    JsonpModule,
    routes,
    Ng2Bs3ModalModule
    
  ],
  declarations: [
    AppComponent,
    WelcomePageComponent,
    CelebrationTypeComponent,
    SelectRegionComponent,
    MoreDetailsComponent,
    SummeryComponent,
    ResultsComponent,
    NgbdTooltipTplcontent,
    CSSCarouselComponent,
    KeysPipe
  ],
   providers: [  
      HallService
  ],
  bootstrap: [ AppComponent]
})
export class AppModule {
}
