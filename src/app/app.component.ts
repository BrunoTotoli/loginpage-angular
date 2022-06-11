import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRest';

  usuario = {login: '', senha: ''};

  public login() {
    console.log("Teste Login : " + this.usuario.login + " Senha:" + this.usuario.senha)
  }
}
