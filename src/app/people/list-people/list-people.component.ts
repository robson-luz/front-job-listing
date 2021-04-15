import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';
import { People } from '../model/people.model';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  peopleData: People;
  searchText: string;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  private loadPeople() {
    this.peopleService.listPeople().subscribe( data => {
      this.peopleData = data;
    });
  }

}
