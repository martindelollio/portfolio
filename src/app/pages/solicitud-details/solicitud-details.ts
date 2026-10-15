import { Component, inject, signal } from '@angular/core';
import solicitud from '../../models/solicitud';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SolicitudService } from '../../service/solicitud-service';

@Component({
  imports: [RouterLink],
  selector: 'app-solicitud-details',
  styleUrl: './solicitud-details.css',
  templateUrl: './solicitud-details.html',
})
export class SolicitudDetails {
  private route = inject(ActivatedRoute)
  private s = inject(SolicitudService)
  solicitud = signal<solicitud|null>(null);

  
 
  ngOnInit(){
    
    const id = this.route.snapshot.paramMap.get("id");

    if(id){
      this.loadProject(id);
    }
  }
  loadProject(id: string){
    this.s.getById(id).subscribe({
      next: (data) => {this.solicitud.set(data)},
      error: (e) => {console.log(e)}
    })
  }
}
