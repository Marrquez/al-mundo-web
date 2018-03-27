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
  //private baseUrl:string = 'http://localhost:4500';
  private baseUrl:string = 'http://ec2-34-211-160-79.us-west-2.compute.amazonaws.com:4500';
  public data:Array<HotelModel> = [];
  public currentHotel:HotelModel;

  constructor(private http: Http) { };

  /**
   * get hotels by stars service
   * @params:
   *  name: string
   *  stars: number
   * */
  getHotelsByStars(name: string, one:string, two:string, three:string, four:string, five:string, all:string) {
    let url = this.baseUrl + '/get-hotels-by-stars';
    let params: URLSearchParams = new URLSearchParams();

    params.set('name', name);
    params.set('one', one);
    params.set('two', two);
    params.set('three', three);
    params.set('four', four);
    params.set('five', five);
    params.set('all', all);

    return this.http.get(url, { params: params })
      .toPromise()
      .then(this.extractData)
      .then(response => response);
  }

  /**
   * get hotels by name
   * */
  getHotels(name: string, one:string, two:string, three:string, four:string, five:string, all:string){
    let url = this.baseUrl + '/get-hotels';
    let params: URLSearchParams = new URLSearchParams();

    params.set('name', name);
    params.set('one', one);
    params.set('two', two);
    params.set('three', three);
    params.set('four', four);
    params.set('five', five);
    params.set('all', all);

    return this.http.get(url, { params: params })
      .toPromise()
      .then(this.extractData)
      .then(response => response);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  };
}
