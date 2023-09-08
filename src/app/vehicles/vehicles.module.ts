
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { ListComponent } from './list/list.component';
import { ListRoutingModule } from './list/list-routing.module';
import { CreateComponent } from './create/create.component';
import { CreateRoutingModule } from './create/create-routing.module';
import { OwnerComponent } from './create/owner/owner.component';
import { DriverComponent } from './create/driver/driver.component';
import { VehicleComponent } from './create/vehicle/vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardUserComponent } from './card-user/card-user.component';

@NgModule({
  declarations: [
    VehiclesComponent,
    ListComponent,
    CreateComponent,
    OwnerComponent,
    DriverComponent,
    VehicleComponent,
    CardUserComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    CreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VehiclesModule {}
