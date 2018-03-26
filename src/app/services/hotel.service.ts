/**
 * Created by cristianolaya on 24/03/18.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

/**
 * Models
 * */
import { HotelModel } from '../models/HotelModel'

@Injectable()
export class HotelService {
  private baseUrl:string = 'http://localhost:8080';
  public data:Array<HotelModel> = [];
  public temporalHotels:Array<HotelModel> = [];

  constructor(private http: Http) { };

  getDomainUser(domain:string) {
    let url = this.baseUrl + '/domainUser';
    let params: URLSearchParams = new URLSearchParams();

    params.set('domain', domain);

    return this.http.get(url, { params: params })
      .toPromise()
      .then(this.extractData)
      .then(response => response);
  };

  showAllElements(){
    this.temporalHotels = this.data;
  }

  filterHotels(one:boolean, two:boolean, three:boolean, four:boolean, five:boolean) {
    this.temporalHotels = [];
    this.temporalHotels = this.temporalHotels.concat(this.getHotelsByStars(one?1:-1));
    this.temporalHotels = this.temporalHotels.concat(this.getHotelsByStars(two?2:-1));
    this.temporalHotels = this.temporalHotels.concat(this.getHotelsByStars(three?3:-1));
    this.temporalHotels = this.temporalHotels.concat(this.getHotelsByStars(four?4:-1));
    this.temporalHotels = this.temporalHotels.concat(this.getHotelsByStars(five?5:-1));
  }

  getHotelsByStars(stars:number){
    return this.data.filter(function(ele, index){
      return ele.stars === stars;
    });
  }

  searchByName(name:string){
    this.temporalHotels = this.temporalHotels.filter(function(ele, index){
      return ele.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
  }

  getHotels(){
    let url = this.baseUrl + '/get-hotels';

    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .then(response => response);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  };
}
