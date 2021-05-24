import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookTableComponent } from './address-book/address-book-table/address-book-table.component';
import { AddressBookActionsComponent } from './address-book/address-book-actions/address-book-actions.component';
import { AddressNewRowComponent } from './address-book/address-new-row/address-new-row.component';
import { FormsModule } from '@angular/forms';
import { AddressRowComponent } from './address-book/address-row/address-row.component';
import { AddressCellComponent } from './address-book/address-cell/address-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookTableComponent,
    AddressBookActionsComponent,
    AddressCellComponent,
    AddressRowComponent,
    AddressNewRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
