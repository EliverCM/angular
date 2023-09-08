import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  VehicleForm: FormGroup;
  owners: any;
  drivers: any;
  brands: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: PostService
  ) {
    this.VehicleForm = this.formBuilder.group({
      // Define los campos del formulario y sus validaciones si es necesario
      plate: ['', Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      driver: [null, Validators.required],
      owner: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.userService.getOwner().subscribe(
      (response: any) => {
        this.owners = response.data;
      },
      (error: any) => {
        console.error('Error al crear usuario', error);
      }
    );
    this.userService.getDriver().subscribe(
      (response: any) => {
        this.drivers = response.data;
      },
      (error: any) => {
        console.error('Error al crear usuario', error);
      }
    );
    this.userService.getBrand().subscribe(
      (response: any) => {
        this.brands = response.data;
      },
      (error: any) => {
        console.error('Error al crear usuario', error);
      }
    );
  }

  onSubmit() {
    console.log(this.VehicleForm.value);
    if (this.VehicleForm.valid) {
      const userData = this.VehicleForm.value;
      this.userService.createVehicle(userData).subscribe(
        (response: any) => {
          // Maneja la respuesta exitosa aquí
          console.log('Usuario creado con éxito', response);
          this.VehicleForm.reset(); // Limpia el formulario después de la creación exitosa
        },
        (error: any) => {
          // Maneja errores aquí
          console.error('Error al crear usuario', error);
        }
      );
    }
  }
}
