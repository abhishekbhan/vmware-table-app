import { AddressBookService } from '../../services/address-book.service';
import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Address } from 'src/app/services/address.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './address-book-table.component.html',
  styleUrls: ['./address-book-table.component.scss']
})
export class AddressBookTableComponent implements OnInit, OnDestroy {

  allSelected: boolean = false;
  addresses: Address[] = [];
  desc: boolean = false;
  sortBy: string;
  newAddresses: Address[] = [];

  deleteSelectedAddressesSubscription: Subscription;
  updateSelectedAddressesSubscription: Subscription;
  addNewAddressesSubscription: Subscription;

  @ViewChild('addressBook') addressBookElement;

  constructor(
    private tableService: AddressBookService
  ) { }

  @HostListener("click", ['$event.target']) 
  onClick(ele: HTMLElement){
    if(ele.dataset.sort) {
      this.desc = !this.desc;
      if(ele.dataset.sort !== this.sortBy) this.desc = true;
      this.sortBy = ele.dataset.sort;
      this.sortData();
    }
  }

  ngOnInit() {
    this.tableService.fetchDetails().subscribe((res)=> {
      this.addresses = res;
    })

    this.deleteSelectedAddressesSubscription = this.tableService.deleteRowsObservable.subscribe((del:boolean) => {
      if (del) {
        this.onDeleteSelectedMessages();
      }
    });

    this.updateSelectedAddressesSubscription = this.tableService.updateRowsObservable.subscribe((update:boolean) => {
      if (update) {
        this.onUpdateSelectedMessages();
      }
    });

    this.addNewAddressesSubscription = this.tableService.addNewRowsObservable.subscribe((add:boolean) => {
      if (add) {
        this.addEmptyAddress();
      }
    });
  }

  ngOnDestroy() {
    this.deleteSelectedAddressesSubscription.unsubscribe();
    this.updateSelectedAddressesSubscription.unsubscribe();
    this.addNewAddressesSubscription.unsubscribe();
  }

  sortData() {
    console.log(this.sortBy, this.desc);
    if(this.addresses && this.addresses.length > 0) {
      this.addresses.sort((add1, add2)=> {
        let val1 = add1[this.sortBy];
        let val2 = add2[this.sortBy];
        console.log(val1, val2);
        if(this.desc === true) {
          return val1.localeCompare(val2);
        } else {
          return val2.localeCompare(val1);
        }
      })
    }
  }

  selectDeselectAll(event) {
    console.log('Select deselect all', this.allSelected);
    this.addresses.forEach((address)=> {
      address.selected = !this.allSelected;
    });
  
  }

  onDeleteSelectedMessages() {
    //Make backend API call
    this.newAddresses = this.newAddresses.filter((address)=> {
      return address.selected === false;
    })

    this.addresses = this.addresses.filter((address)=> {
      return address.selected === false;
    })

    this.clearAllSelected();
  }

  onUpdateSelectedMessages() {
    //Make backend API call
    let unselectedNewAddresses = [];
    if(this.newAddresses && this.newAddresses.length > 0) {
      console.log('Update list with new addresses');
      this.newAddresses.forEach((address)=> {
        if(address.selected) {
          //Mimicing id generation
          address.id = Math.random().toString(32).split('.')[1];
          this.addresses.push(address);
        } else {
          unselectedNewAddresses.push(address);
        }
      });

      this.newAddresses = unselectedNewAddresses;
    }

    let selectedAddresses = this.addresses.filter((address)=> {
      return address.selected === true;
    });

    alert(JSON.stringify(selectedAddresses));
    this.clearAllSelected();
  }

  clearAllSelected() {
    this.allSelected = false;
    this.addresses.forEach((address)=> {
      address.selected = false;
    })
  }

  addEmptyAddress() {
    console.log('Adding new address');
    let newAddress = new Address();
    newAddress.selected = true;
    console.log(newAddress, this.newAddresses);
    this.newAddresses.push(newAddress);
  }



}
