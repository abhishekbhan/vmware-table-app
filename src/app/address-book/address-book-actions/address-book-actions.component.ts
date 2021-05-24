import { AddressBookService } from './../../services/address-book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-actions',
  templateUrl: './address-book-actions.component.html',
  styleUrls: ['./address-book-actions.component.scss']
})
export class AddressBookActionsComponent implements OnInit {

  constructor(
    private tableService: AddressBookService
  ) { }

  ngOnInit() {
  }

  addRow() {
    console.log('Adding row');
    this.tableService.addNewRow();
  }

  deleteSelectedRows() {
    console.log('Deleting rows');
    this.tableService.deleteSelectedRows();

  }

  updateSelectedRows() {
    console.log('Updating rows');
    this.tableService.updateSelectedRows();
  }

}
