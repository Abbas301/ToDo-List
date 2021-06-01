import { Component, OnInit } from '@angular/core';
import { Tasks } from '../mock-heros';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  Details = Tasks;
  selectedtask?:any

  constructor() { }

  ngOnInit() {
  }

  onSelect(task: any): void {
    this.selectedtask = task;
  }

}
