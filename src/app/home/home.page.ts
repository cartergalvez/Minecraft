import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Story } from '../interface/story';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private Dserv: DataService) {
  
  
  }

}
