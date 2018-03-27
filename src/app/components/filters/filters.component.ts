import { Component } from '@angular/core';

/**
 * Services
 * */
import { HotelService } from '../../services/hotel.service';

/**
 * Models
 * */
import { HotelModel } from '../../models/HotelModel'

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styles: [require('./filters.component.less')]
})
export class FiltersComponent {
  sectionSearch:boolean = true;
  sectionStars:boolean = true;
  sectionAll:boolean = true;
  allElements:boolean = false;
  fiveElements:boolean = false;
  fourElements:boolean = false;
  threeElements:boolean = false;
  twoElements:boolean = false;
  oneElements:boolean = false;
  hotelName:string = '';

  constructor(public hotel: HotelService) { };

  /**
   * in order to expand and collapse pannels
   * @params:
   *  section:string name of the section to collapse/expand
   * */
  collapseExpandElement(section:string){
    if(section === 'search'){
      this.sectionSearch = !this.sectionSearch;
    }

    if (section === 'stars'){
      this.sectionStars = !this.sectionStars;
    }

    if (section === 'all'){
      this.sectionAll = !this.sectionAll;
    }
  }

  /**
   * in order to prepare the data to search
   * @params:
   *  filterType:number number of the stars
   *  actionType:string type of action value of the model
   * */
  applyFilters(filterType: number, actionType: boolean){
    if(filterType != -1){
      this.allElements = false;
    }else{
      if(actionType){
        this.allElements = this.oneElements = this.twoElements = this.threeElements = this.fourElements = this.fiveElements = true;
      }else {
        this.allElements = this.oneElements = this.twoElements = this.threeElements = this.fourElements = this.fiveElements = false;
      }

    }

    if(this.oneElements && this.twoElements && this.threeElements && this.fourElements && this.fiveElements){
      this.allElements = true;
    }

    this.applyCurrentFilters();
  }

  /**
   * validate the model data and apply the filters
   * */
  applyCurrentFilters(){
    var self = this;
    var one,two,three,four,five, all;

    one = this.oneElements?"1":"0";
    two = this.twoElements?"2":"0";
    three = this.threeElements?"3":"0";
    four = this.fourElements?"4":"0";
    five = this.fiveElements?"5":"0";
    all = this.allElements?"1":"0";

    this.hotel.getHotelsByStars(this.hotelName.toLowerCase(), one, two, three, four, five, all).then(function(data:any){
      self.hotel.data = data.hotels;
    });
  }

  /**
   * search by name
  * */
  searchHotels(){
    this.applyCurrentFilters();
  }
}
