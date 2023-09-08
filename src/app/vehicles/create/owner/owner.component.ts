import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
})
export class OwnerComponent implements OnInit {
  OwnerForm: FormGroup;
  errorForm = false;
  boxOK = false;
  cities: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: PostService
  ) {
    this.OwnerForm = this.formBuilder.group({
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
    if (this.OwnerForm.valid) {
      const userData = this.OwnerForm.value;
      this.userService.createOwner(userData).subscribe(
        (response: any) => {
          console.log('Usuario creado con éxito', response);
          this.OwnerForm.reset(); // Limpia el formulario después de la creación exitosa
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
