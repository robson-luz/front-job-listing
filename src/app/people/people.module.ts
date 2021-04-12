import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { CardPeopleComponent } from './card-people/card-people.component';
import { PeopleRoutingModule } from './people-routing.module';



@NgModule({
  declarations: [ListPeopleComponent, CardPeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [ListPeopleComponent, CardPeopleComponent]
})
export class PeopleModule { }
