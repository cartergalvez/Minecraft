import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/interface/story';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
   Myscenes: Story[] = [];
   scene: Story;
  
  constructor(private dServ: DataService) {
    dServ.getData().subscribe(x => {
      
      for (let s of x.feed.entry) {
        let nFO = {
          id: s.gsx$id.$t as number,
          tScene: s.gsx$scene.$t as string,
          choice1: s.gsx$choice1.$t as string,
          choice2: s.gsx$choice2.$t as string,
          result1: s.gsx$result1.$t as number,
          result2: s.gsx$result2.$t as number,
          ending: s.gsx$ending.$t as boolean
        }
        this.Myscenes.push(nFO);
        this.scene = this.Myscenes[0];
      }
      
      console.log(this.Myscenes)
    });}

  ngOnInit() {
    console.log(this.Myscenes);
  }



  getNextScene(id: number): Story {
    return this.Myscenes[id];
  }
  
  nextScene(id: number){
    console.log(id);
    this.scene = this.Myscenes[id];
  }

}
