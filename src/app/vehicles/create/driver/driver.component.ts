import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {
  DriverForm: FormGroup;
  errorForm = false;
  boxOK = false;
  cities: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: PostService
  ) {
    this.DriverForm = this.formBuilder.group({
      // Define los campos del formulario y sus validaciones si es necesario
      name: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      ccnumber: ['', Validators.required],
      city: [null, Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.DriverForm.valid) {
      const userData = this.DriverForm.value;
      this.userService.createDriver(userData).subscribe(
        (response: any) => {
          // Maneja la respuesta exitosa aquí
          console.log('Usuario creado con éxito', response);
          this.DriverForm.reset(); // Limpia el formulario después de la creación exitosa
          this.boxOK = true;
          const intervalo = setInterval(() => {
            this.boxOK = false;
            clearInterval(intervalo);
          }, 3000);
        },
        (error: any) => {
          // Maneja errores aquí
          console.error('Error al crear usuario', error);
        }
      );
    } else {
      this.errorForm = true;
    }
  }

  ngOnInit(): void {
    this.userService.getCities().subscribe(
      (response: any) => {
        this.cities = response.data;
      },
      (error: any) => {
        console.error('Error al crear usuario', error);
      }
    );
  }
}
