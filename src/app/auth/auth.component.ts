import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  AccountForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: PostService,
    private router: Router
  ) {
    this.AccountForm = this.formBuilder.group({
      // Define los campos del formulario y sus validaciones si es necesario
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.AccountForm.value);
    if (this.AccountForm.valid) {
      const userData = this.AccountForm.value;
      userData.password = CryptoJS.MD5(userData.password).toString();
      
      this.userService.postAccount(userData).subscribe(
        (response: any) => {
          // Maneja la respuesta exitosa aquí
          console.log('Usuario consultado con exitooooo', response);
          if(response.estado == 0){
            localStorage.setItem('LoggedUser', userData.username);
            localStorage.setItem('tokenUser', response.token);
            this.router.navigate(['/Vehicle/create']);
          }

          this.AccountForm.reset(); // Limpia el formulario después de la creación exitosa
        },
        (error: any) => {
          // Maneja errores aquí
          console.error('Error al crear usuario', error);
        }
      );
    }
  }

  ngOnInit(): void {}
}
