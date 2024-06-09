import { Component, ViewChild  } from '@angular/core';
import { createCar } from '../../services/CarsServices';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  
  @ViewChild('carForm') carForm!: NgForm;

  carro = {
    marca: '',
    modelo: '',
    ano: 0,
    motor: '',
    precoPorDia: 0,
    precoPorMes: 0,
    alugado: false,
    categoria: '',
    file: ''
  };

  async sendCreateCar() {
    try {
      console.log(this.carForm.value);
      await createCar(this.carForm.value);
      alert('Carro criado com sucesso!');
    } catch (error: any) {
      console.log(error)
      console.error(error);
      alert(error.response.data.error);
    }
  }
}
