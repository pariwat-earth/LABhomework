import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input()
  data: Data[];
  constructor() {
    this.data = [];
  }
  title: string ;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  additem(id: string, name: string, Des: string){
    this.data.push(
      {
        ID: id,
        Name: name,
        Description: Des
      }
    );
  }

  // tslint:disable-next-line:typedef
  selectID(data: Data){
    const  x = this.data.indexOf((data));
    this.data.splice(x , 1);
  }
}
