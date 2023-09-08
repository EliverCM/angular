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
  constructor(
    private formBuilder: FormBuilder,
    private userService: PostService
  ) {
    this.DriverForm = this.formBuilder.group({
      // Define los campos del formulario y sus validaciones si es necesario
      name: ['', Validators.required],
      middleName: ['', Validators.required],
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
        },
        (error: any) => {
          // Maneja errores aquí
          console.error('Error al crear usuario', error);
        }
      );
    } else {
      alert('error');
      this.errorForm = true;
    }
  }

  ngOnInit(): void {}
}
