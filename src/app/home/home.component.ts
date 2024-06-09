import { Component } from '@angular/core';
import { getAllCardsList } from '../../services/CarsServices';
import { deleteCarId } from '../../services/CarsServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HOmeComponent {
  
  title = 'Teste';
  items: any[] = [];

  async ngOnInit(): Promise<void> {
    const response = await getAllCardsList();
    this.items = response.items;  
  }

  alugarCarro(id: string, precoPorDia: number, precoPorMes: number): void {
    console.log('ID do carrosss:', id, precoPorDia, precoPorMes);
    window.location.href = `alugar/${id}/${precoPorDia}`;
  }

 async deleteCar(id: string): Promise<void> {
   await deleteCarId(id)
   console.log('carro deletado')
  }

}
