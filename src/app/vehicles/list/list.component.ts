import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObserverService } from 'src/app/services/observer.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  vehicles: any;
  infoModal = 1;
  constructor(
    private userService: PostService,
    private observer: ObserverService,
    private router: Router
  ) {}

  getInfo(id: number, type: number) {
    this.infoModal = type;
    this.observer.setID({ id: id, type: type });
  }
  LogIn() {
    const LoggedUser = localStorage.getItem('LoggedUser');

    if (LoggedUser) {
      // Hacer algo con la variable de sesión
      console.log('Valor de la variable de sesión:', LoggedUser);
      this.router.navigate(['/Vehicle/create']);
    } else {
      this.router.navigate(['/auth']);
      console.log('La variable de sesión no está definida');
    }
  }

  ngOnInit(): void {
    this.userService.getVehicle().subscribe(
      (response: any) => {
        this.vehicles = response.data;
        console.log('Usuario creado con éxito', response.data);
      },
      (error: any) => {
        console.error('Error al crear usuario', error);
      }
    );
  }
}
