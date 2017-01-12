import { Component, OnInit, OnDestroy, ViewEncapsulation, AfterContentInit  } from '@angular/core';
import myGlobals = require('./globals');
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

var $ = require("jquery")

export class areaCode {
    id: number;
    name: string;
    items: items[];
}

class items {
    id: number;
    name: string;
    checked: boolean;
}

const AREACODE: areaCode[] = [
    {
        id: 1, name: 'חיפה',
        items: [{ id: 0, name: "קריות", checked: false }]
    },
    {
        id: 2, name: 'ירושלים',
        items: [{ id: 0, name: "מודיעין", checked: false }]
    },
    {
        id: 3, name: 'השרון',
        items: [
            { id: 0, name: "הוד השרון", checked: false },
            { id: 1, name: "רמת השרון", checked: false }
        ]
    },
    {
        id: 4, name: 'תל אביב',
        items: [
            { id: 0, name: "מרכז תל אביב", checked: false },
            { id: 1, name: "צפון תל אביב", checked: false },
            { id: 2, name: "דרום תל אביב", checked: false }
        ]
    },
    {
        id: 5, name: 'אילת',
        items: [
            { id: 0, name: "אילת", checked: false }
        ]
    },
    {
        id: 6, name: 'נגב',
        items: [
            { id: 0, name: "באר שבע", checked: false }
        ]
    },
    {
        id: 7, name: 'גליל',
        items: [
            { id: 0, name: "גליל עליון", checked: false }
        ]
    },
    {
        id: 8, name: 'אחר',
        items: [
            { id: 0, name: "אחר", checked: false }
        ]
    },

];



@Component({
    selector: 'my-app',
    templateUrl: './templates/selectRegion.html',
    styles: [
        require('./css/selectRegion.less').toString()],
    encapsulation: ViewEncapsulation.None,
})

export class SelectRegionComponent implements OnInit, OnDestroy {

    bodyClasses: string = "confetyBg";
    areaCodes = AREACODE;
    selectedAreaCode: areaCode;
    selectedSubAreaCodeItems: areaCode[] = [];
    selectedAreaCodeItems: items[];
    formValid: boolean;
    valid : boolean = false;

    constructor(config: NgbTooltipConfig) {
      
        config.placement = 'right';
        config.triggers = 'click';
    }

    ngOnInit(): void {
        $('body').addClass(this.bodyClasses);
        this.selectedAreaCode = myGlobals.selectedAreaCode;
      
    }

    ngOnDestroy() {
        $('body').removeClass(this.bodyClasses);
    }

    onSelect(areaCode: areaCode): void {

        myGlobals.selectedAreaCode = this.selectedAreaCode = areaCode;
        myGlobals.selectedAreaCodeItems = this.selectedAreaCodeItems = this.selectedAreaCode.items;

        this.formValid = true;


    }
    onSubAreaCheck(areaCodeItem: items): void {

        debugger;
        
        if (areaCodeItem.checked)
            areaCodeItem.checked = false;
        else
            areaCodeItem.checked = true;

    }
      ngAfterContentInit() {
          debugger;
  }
  
}



