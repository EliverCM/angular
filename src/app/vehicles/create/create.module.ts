import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, CreateRoutingModule],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CreateModule {}
