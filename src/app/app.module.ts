import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { TimeZoneServiceService } from './services/time-zone-service.service';
import { AddNewZoneComponent } from './components/add-new-zone/add-new-zone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZoneListComponent } from './components/zone-list/zone-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EditZoneComponent } from './components/edit-zone/edit-zone.component';
import { ZoneManageComponent } from './components/zone-manage/zone-manage.component';





@NgModule({
  declarations: [
    AppComponent,
    AddNewZoneComponent,
    ZoneListComponent,
    EditZoneComponent,
    ZoneManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [TimeZoneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
