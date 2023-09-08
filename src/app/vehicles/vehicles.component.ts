import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  template: `<div>
    Hola probando
    <router-outlet></router-outlet>
  </div>
   `,
})
export class VehiclesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
