import { Component, signal } from '@angular/core';
import { ProyectoService } from '../../service/proyecto-service';
import Proyecto from '../../models/proyectos';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-projects-datails',
  styleUrl: './projects-datails.css',
  templateUrl: './projects-datails.html',
})
export class ProjectsDatails {
  proyecto = signal<Proyecto|null>(null);

  constructor(public p:ProyectoService, private route: ActivatedRoute){
  }
 
  ngOnInit(){
    
    const id = this.route.snapshot.paramMap.get("id");

    if(id){
      this.loadProject(id);
    }
  }
  loadProject(id: string){
    this.p.getById(id).subscribe({
      next: (data) => {this.proyecto.set(data)},
      error: (e) => {console.log(e)}
    })
  }
  
}
