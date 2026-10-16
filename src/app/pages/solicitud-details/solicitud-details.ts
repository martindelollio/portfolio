import { Component, inject, signal } from '@angular/core';
import solicitud from '../../models/solicitud';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  private router = inject(Router)
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
  deleteSolicitud(): void {
  const actual = this.solicitud();

  if (!actual?.id) return;

  const confirmar = confirm(
    '¿Estás seguro de eliminar esta solicitud?'
  );

  if (!confirmar) return;

  this.s.deleteSolicitud(actual.id).subscribe({
    next: () => {
      alert('Solicitud eliminada correctamente');
      this.router.navigate(['/list-solicitud']);
    },
    error: (error) => {
      console.error('Error al eliminar la solicitud', error);
      alert('No se pudo eliminar la solicitud');
    }
  });
}
}
