import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { CardPeopleComponent } from './card-people/card-people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListPeopleComponent, CardPeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [ListPeopleComponent, CardPeopleComponent]
})
export class PeopleModule { }
