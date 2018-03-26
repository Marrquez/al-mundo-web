import { Component } from '@angular/core';

/**
 * Services
 * */
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styles: [require('./filters.component.less')]
})
export class FiltersComponent {
  sectionSearch = true;
  sectionStars = true;
  sectionAll = true;
  allElements = true;
  fiveElements = false;
  fourElements = false;
  threeElements = false;
  twoElements = false;
  oneElements = false;
  hotelName:string = '';

  constructor(public hotel: HotelService) {
    var self = this;
    this.hotel.getHotels().then(function(data){
      self.hotel.data = data.hotels;
      self.applyCurrentFilters();
    });
  };

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

  applyFilters(filterType: number, actionType: boolean){
    if(filterType != -1){
      this.allElements = false;
    }

    if(this.oneElements && this.twoElements && this.threeElements && this.fourElements && this.fiveElements){
      this.allElements = true;
    }

    this.applyCurrentFilters();
  }

  applyCurrentFilters(){
    if(this.allElements || (!this.allElements && !this.oneElements && !this.twoElements && !this.threeElements && !this.fourElements && !this.fiveElements)){
      this.hotel.showAllElements();
    }else{
      this.hotel.filterHotels(this.oneElements, this.twoElements, this.threeElements, this.fourElements, this.fiveElements);
    }

    this.searchHotels();
  }

  searchHotels(){
    this.hotel.searchByName(this.hotelName);
  }
}
