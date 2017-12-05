import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IDist } from '../../interfaces/Dist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
zonesdata: IDist[];
  constructor(public navCtrl: NavController) {

    this.zonesdata= [
        {
            "zoneid": 7,
            "zonename": "Bhongir",
            "distcode":"rck"
        },
        {
            "zoneid": 5,
            "zonename": "L.B.Nagar",
            "distcode":"rck"
        }
      ];
  }

}
