import { Component, Input } from '@angular/core';

/**
 * Models
 * */
import { HotelModel } from '../../models/HotelModel'

/**
 * Services
 * */
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'hotel',
  templateUrl: './hotel.component.html',
  styles: [require('./hotel.component.less')]
})
export class HotelComponent {
  @Input() hotelData: HotelModel;
  stars = Array;

  constructor(public hotel:HotelService){ };

  showItem (hotelData: HotelModel) {
    this.hotel.currentHotel = hotelData;
  };
}
