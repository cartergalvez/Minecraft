import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../interface/story';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private scenes: Story[]=[];
  private url = 'https://spreadsheets.google.com/feeds/list/1WZb4IzUWfnvh6Xu0QUeC8dceUYp31pRCBF4NaXiXSHc/1/public/full?alt=json';
  constructor(private http: HttpClient) { }

  getData() {
return this.http.get<any>(this.url)
  }
  getFirstScene(): Story{
    return this.scenes[0];
  }

  getNextScene(id:number):Story{
    return this.scenes[id];
  }
}
