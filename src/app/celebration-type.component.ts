import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { clebrationType } from './interfaces/clebrationType.interface';

import myGlobals = require('./globals'); 

var $ = require("jquery");

const CLEBRATIONTYPES: clebrationType[] = [
    { id: 1, name: 'אחר' },
    { id: 2, name: 'ברית/בריתה' },
    { id: 3, name: 'חינה' },
    { id: 4, name: 'בר/בת מצווה' },
    { id: 5, name: 'חתונה' }
];

@Component({
    selector: 'my-app',
    templateUrl: './templates/celebrationType.html',
    styles: [
        require('./css/celebrationType.less').toString()],
    encapsulation: ViewEncapsulation.None,
})


export class CelebrationTypeComponent implements OnInit,OnDestroy{

    bodyClasses: string = "confetyBg";
    clebrationTypes = CLEBRATIONTYPES;
    selectedclebrationType: clebrationType;
    formValid : boolean;

    ngOnInit(): void {
        $('body').addClass(this.bodyClasses);
         this.selectedclebrationType = myGlobals.selectedclebrationType;
    }

    ngOnDestroy() {
        $('body').removeClass(this.bodyClasses);
    }

    onSelect(clebrationType: clebrationType): void {

        myGlobals.selectedclebrationType =  this.selectedclebrationType = clebrationType;

        debugger;
        this.formValid = true;
    }
    changeStatus() {
     
  } 
}

