import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/services/address.model';

@Component({
  selector: '[app-table-row]',
  templateUrl: './address-row.component.html',
  styleUrls: ['./address-row.component.scss']
})
export class AddressRowComponent implements OnInit {

  @Input()
  address: Address;

  isEditing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
