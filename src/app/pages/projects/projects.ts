import { Component, signal } from '@angular/core';
import { ProyectoService } from '../../service/proyecto-service';
import { RouterLink } from '@angular/router';
import Proyecto from '../../models/proyectos';

@Component({
  imports: [RouterLink],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  proyectos = signal<Proyecto[]>([]);

  
  constructor(public pService : ProyectoService){

  }
  ngOnInit(){
    this.loadProjects();
  }
  loadProjects(){
    this.pService.getProjects().subscribe({
      next: (data) => {this.proyectos.set(data)},
      error: (e) => console.log(e)

    })
  }
}
