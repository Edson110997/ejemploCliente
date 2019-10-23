import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';
  description: string;
  listaEstudiantes: string[];

  constructor()
  {
    this.description = "taller de aplicaciones de internet";
    this.listaEstudiantes = ['carlos', 'edson', 'jhaziel', 'boris', 'saul'];
    console.log(this.description);
    console.log(this.listaEstudiantes);
  }
}
