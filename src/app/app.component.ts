import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lat: number = 6.714407;
  lng: number = 79.98906;
  locationChoosen = false;

  onChooseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChoosen = true;
  }
}
