import { Address } from 'src/app/services/address.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-new-row]',
  templateUrl: './address-new-row.component.html',
  styleUrls: ['./address-new-row.component.scss']
})
export class AddressNewRowComponent implements OnInit {

  @Input()
  address: Address;

  isEditing: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
