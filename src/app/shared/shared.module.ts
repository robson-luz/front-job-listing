import { SearchFormComponent } from './search-form/search-form.component';
import { FilterPipe } from './filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilterPipe, SearchFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FilterPipe, SearchFormComponent]
})
export class SharedModule { }
