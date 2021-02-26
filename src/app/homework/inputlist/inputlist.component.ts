import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-inputlist',
  templateUrl: './inputlist.component.html',
  styleUrls: ['./inputlist.component.css']
})
export class InputlistComponent implements OnInit {
@Input()
  data: Data;
  tite: string;

@Output()
OnSelected: EventEmitter<Data> = new EventEmitter();
OnSelected2: EventEmitter<Data> = new EventEmitter();


  constructor() {
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  Deleteitem(){
    this.OnSelected.emit(this.data);
  }

  // tslint:disable-next-line:typedef
  item(){
    this.tite = this.data.Description;
    this.OnSelected2.emit(this.data);

  }
}
