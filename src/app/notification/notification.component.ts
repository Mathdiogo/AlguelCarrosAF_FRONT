import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  
  message: string = '';
  type: 'success' | 'error' = 'success';
  isVisible: boolean = false;

  show(message: string, type: 'success' | 'error' = 'success') {
    console.log('disparou????')
    this.message = message;
    this.type = type;
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 5000); // Esconde a notificação após 5 segundos
  }
}
