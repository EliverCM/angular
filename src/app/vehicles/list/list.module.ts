import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({ 
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListModule {}
