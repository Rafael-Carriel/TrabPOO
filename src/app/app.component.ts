import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cadastrar', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Excluir', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Eric Patrick', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Patrick Eric', url: '/folder/Archived', icon: 'archive' },
    { title: 'Patric Sexo ', url: '/folder/Trash', icon: 'trash' },
    { title: 'Selvagem', url: '/folder/Spam', icon: 'warning' },
  ];
  constructor() {}
}
