import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { Address } from './address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  deleteRows: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  deleteRowsObservable: Observable<boolean> = this.deleteRows.asObservable();

  updateRows: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  updateRowsObservable: Observable<boolean> = this.updateRows.asObservable();

  addNewRows: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  addNewRowsObservable: Observable<boolean> = this.addNewRows.asObservable();

  constructor() { }

  fetchDetails() : Observable<Address[]> {
    return of([
      {
        id: Math.random().toString(32).split('.')[1],
        name: 'Aaron',
        location: 'CA',
        office: 'Santa clara',
        cellPhone: '612-22-2232',
        officePhone: '612-22-2234',
        selected: false
      },
      {
        id: Math.random().toString(32).split('.')[1],
        name: 'AJ',
        location: 'CA',
        office: 'Santa clara',
        cellPhone: '412-22-2232',
        officePhone: '612-22-2234',
        selected: false
      },
      {
        id: Math.random().toString(32).split('.')[1],
        name: 'Barry',
        location: 'CA',
        office: 'Santa clara',
        cellPhone: '212-22-2232',
        officePhone: '612-22-2234',
        selected: false
      },
      {
        id: Math.random().toString(32).split('.')[1],
        name: 'Archibald',
        location: 'CA',
        office: 'Santa clara',
        cellPhone: '212-22-2232',
        officePhone: '612-22-2234',
        selected: false
      },
      {
        id: Math.random().toString(32).split('.')[1],
        name: 'Silvia',
        location: 'DE',
        office: 'Orance county',
        cellPhone: '812-22-2232',
        officePhone: '612-22-2234',
        selected: false
      }
    ]).pipe(delay(1000));
  }

  deleteSelectedRows() {
    this.deleteRows.next(true);
  }

  updateSelectedRows() {
    this.updateRows.next(true);
  }

  addNewRow() {
    this.addNewRows.next(true);
  }
}
