import { Component, OnInit, OnDestroy, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';


import { Hall } from './model/hall';
import { HallService } from './services/HallService';
import { Observable } from 'rxjs/Observable';
import { FormArray } from '@angular/forms';
import { Headers, RequestOptions, Http } from '@angular/http';
import { AppSettings } from './services/AppSettings';
import { CSSCarouselComponent } from './carousel.component';
import { halls, contactMePriority } from './globals';

import myGlobals = require('./globals');

var $ = require("jquery");
var _ = require('underscore');


@Component({
    selector: 'my-app',
    templateUrl: './templates/results.html',
    styles: [require('./css/results.less').toString()],

})
export class ResultsComponent implements OnInit, OnDestroy {

    constructor(
        private hallService: HallService,
        private http: Http
    ) { }

    //childTitle:string = 'This text is passed to child';
    halls: Hall[];
    regions: Array<string>[];

    loadHalls() {
        //debugger;
        // Get halls
        this.hallService.getHalls()
            .subscribe(
            data => {
                // //Bind to view
                myGlobals.halls = this.halls = data,
                    this.regions = _.toArray(_.uniq(_.pluck(_.flatten(this.halls), "regionName")));
                debugger;
            },

            err => console.error(err)
            )
        //debugger;
    }

    filterTableResult() {
        $('.btn-filter').on('click', function () {
            debugger;
            var $target = $(this).data('target');
            if ($target != 'all') {
                $('.table tr').css('display', 'none');
                $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
            } else {
                $('.table tr').css('display', 'none').fadeIn('slow');
            }
        });
    }

    ngOnInit(): void {
        this.loadHalls();



    }

    ngOnDestroy() {

    }

    onHallCheck(hallId) {
        debugger;
        for (var hall of this.halls) {

            if (hall.id == hallId) {
                hall.checked = (!hall.checked)
            }

        }
        myGlobals.halls = this.halls;


    }

    onchange(t: any) {
        debugger;
    }

    public send() {
        debugger;
        myGlobals.contactMePriority = $('#cmp').val();

        if ($('#DJ').prop("checked"))
            myGlobals.extraServices.push("DJ");

        if ($('#Bus').prop("checked"))
            myGlobals.extraServices.push("Bus");

        if ($('#Magnets').prop("checked"))
            myGlobals.extraServices.push("Magnets");

        if ($('#ChildrenEntertainment').prop("checked"))
            myGlobals.extraServices.push("ChildrenEntertainment");

        if ($('#Photographer').prop("checked"))
            myGlobals.extraServices.push("Photographer");

        if ($('#Video').prop("checked"))
            myGlobals.extraServices.push("Video");


        this.hallService.sendEmail();

    }
}
