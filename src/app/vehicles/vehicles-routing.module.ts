import { VehiclesComponent } from './vehicles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'Vehicle',
    component: VehiclesComponent,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./list/list.module').then((m) => m.ListModule),
        data: { preload: true, mainPath: '/Vehicle/list' },
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./create/create.module').then((m) => m.CreateModule),
        data: { preload: true, mainPath: '/Vehicle/create' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclesRoutingModule {}
