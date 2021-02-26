import { Component, Input, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  @Input()
  data: Data[];

  constructor() {
    this.data = [];
  }

  ngOnInit(): void {
  }
}
