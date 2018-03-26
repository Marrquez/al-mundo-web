import { Component, Input } from '@angular/core';

/**
 * Models
 * */
import { HotelModel } from '../../models/HotelModel'

@Component({
  selector: 'hotel',
  templateUrl: './hotel.component.html',
  styles: [require('./hotel.component.less')]
})
export class HotelComponent {
  @Input() hotelData: HotelModel;
  stars = Array;

  constructor(){ };

  showItem (id: string) {
    console.log("show the item: " + id);
  };
}
