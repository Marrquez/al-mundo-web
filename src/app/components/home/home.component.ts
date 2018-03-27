import { Component } from '@angular/core';

/**
 * Services
 * */
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [require('./home.component.less')]
})
export class HomeComponent {
  constructor(public hotel: HotelService) { };
}
