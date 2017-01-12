import {Component,ElementRef} from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-tooltip-tplcontent',
  templateUrl: './templates/tooltip-tplcontent.html',
  host: {
    '(document:click)': 'onClick($event)',
  },
  providers: [NgbdTooltipTplcontent] 
})
export class NgbdTooltipTplcontent {
  name = 'World';

  constructor(private _eref: ElementRef,config: NgbTooltipConfig) { 
    debugger;
     config.placement = 'right';
     config.triggers = 'click';
  }
  
   onClick(event) 
   {
     debugger;
      if (!this._eref.nativeElement.contains(event.target)) // or some similar check
          this.doSomething();
  }
  doSomething()
  {

  }
}
