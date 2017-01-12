import { Component } from '@angular/core';
import { AppSettings } from './AppSettings';
import { Hall } from '../model/hall';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Jsonp, RequestMethod } from '@angular/http';
import {serialize} from "serializer.ts/Serializer";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import myGlobals = require('../globals');

@Component({

})

@Injectable()
export class HallService {

    constructor(private http: Http) { }

    getHalls(): Observable<Hall[]> {

        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
        debugger;
        let body = serialize(myGlobals);
        debugger;

        return this.http.post(`${AppSettings.API_ENDPOINT}`, body, options)
            .map(response => response.json())
            .map((halls: Object[]) => {
                return halls.map(hall => this.parseData(hall));
            });
    }

    private parseData(data): Hall {
        //debugger;
        return new Hall(data.id, data.HallId, data.title, data.pictureUrl, data.images, data.body, data.regionName, true);
    }

    // private serializeObj(obj) {
    //     var result = [];
    //     for (var property in obj)
    //         result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    //     return result.join("&");
    // }


    sendEmail() {

        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });

        let body = serialize(myGlobals);
        debugger;
        this.http.post(`${AppSettings.SEND_EMAIL_ENDPOINT}`, body, options)
            .subscribe(data => {
                alert('ok');
            }, error => {
                console.log(JSON.stringify(error.json()));
            });

    }

}