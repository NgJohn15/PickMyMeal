import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PickMyMeal';
  zoom: number = 15;
  lat: number = 29.651634;
  lng: number = -82.324829;
  lastInfoWindow: any;

  markers: any[] = [
    {
      lat: 28.625485,
      lng: 79.821091,
      label: { color: 'white', text: 'P1' },
      draggable: true
    },
    {
      lat: 28.625293,
      lng: 79.817926,
      label: { color: 'white', text: 'P2' },
      draggable: false
    },
    {
      lat: 28.625182,
      lng: 79.814640,
      label: { color: 'white', text: 'P3' },
      draggable: true
    }
  ]

  markerClicked(marker: any, index: number, infoWindowRef: any) {
    if (this.lastInfoWindow) {
      this.lastInfoWindow.close();
    }
    this.lastInfoWindow = infoWindowRef;
    console.log(marker, index);
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(marker: any, index: number) {
    console.log(marker, index);
  }
}
