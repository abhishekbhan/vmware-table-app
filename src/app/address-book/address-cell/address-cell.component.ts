import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/services/address.model';

@Component({
  selector: '[app-table-cell]',
  templateUrl: './address-cell.component.html',
  styleUrls: ['./address-cell.component.scss']
})
export class AddressCellComponent implements OnInit {

  @Input()
  editing: boolean = false;

  @Input()
  allowEdit: boolean = false;

  @Input()
  value: string;

  @Input()
  obj: Address;

  isEditing: boolean = false;
  isSingleClick: Boolean = true;     

  constructor() { }

  ngOnInit() {
    this.isEditing = this.editing;
  }

  method1CallForClick(){
    console.log('Click1');
    this.isSingleClick = true;
    setTimeout(()=>{
        if(this.isSingleClick){
            console.log('Single click!');
        }
    },250)
  }

  method2CallForDblClick(){
    console.log('Click2');
    this.isSingleClick = false;
    if(this.allowEdit) {
      this.isEditing = true;
    }
    
  }

  onInputBlur() {
    this.isEditing = false;
  }


}
