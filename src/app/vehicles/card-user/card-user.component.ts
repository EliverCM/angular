import { Component, Input, OnInit } from '@angular/core';
import { ObserverService } from 'src/app/services/observer.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {
  @Input() jsonData: any;
  infoModal = {
    number_cc: '123456789',
    first_name: 'Juan',
    middle_name: 'Carlos',
    last_name: 'Pérez',
    address: '123 Calle Principal',
    phone_number: '555-123-4567',
    city: 'Ciudad Ejemplo',
  };
  constructor(
    private userService: PostService,
    private observer: ObserverService
  ) {}

  ngOnInit(): void {
    this.observer.getID().subscribe((data) => {
      if(data.type == 1){
        this.userService.getDriverByID(data.id).subscribe(
          (response: any) => {
            this.infoModal = response.data;
          },
          (error: any) => {
            console.error('Error al crear usuario', error);
          }
        );
      }else if(data.type == 2){
          this.userService.getOwnerByID(data.id).subscribe(
            (response: any) => {
              this.infoModal = response.data;
            },
            (error: any) => {
              console.error('Error al crear usuario', error);
            }
          );
      }
    });
    this.infoModal = this.jsonData;
    console.log('llegando al modal:', this.infoModal);

  }
}
