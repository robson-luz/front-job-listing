import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListPeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [ListPeopleComponent]
})
export class PeopleModule { }
