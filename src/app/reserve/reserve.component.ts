import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { updateRentedCar } from '../../services/CarsServices';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css'
})
export class ReserveComponent {
  precoPorDia: number = 0;
  dias: number = 0;
  email: string = '';


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Pega o parâmetro 'number' da URL
    this.route.params.subscribe(params => {
      if (params['number']) {
        this.precoPorDia = +params['number'];
      }
    });
  }

  calcPreco(dias: number): void {
    console.log();
    if(dias) {
      this.precoPorDia = this.dias * this.precoPorDia;
    } else {
      this.precoPorDia = 0
    }
  }

  alugarCarro(email: string): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
     updateRentedCar(id, email);
    });
  }
  
}
