import { Component, inject, signal } from '@angular/core';
import { SolicitudService } from '../../service/solicitud-service';
import { ActivatedRoute, Router } from '@angular/router';
import solicitud from '../../models/solicitud';
import { email, form, required, min, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-solicitud',
  styleUrl: './solicitud.css',
  templateUrl: './solicitud.html',
})
export class Solicitud {
  private sService = inject(SolicitudService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  id = this.route.snapshot.paramMap.get("id")


  solicitudModel = signal<solicitud>({
    nombre: "",
    email: "",
    tipoProyecto: "",
    descripcion: "",
    presupuesto: 0,
    fechaAproximada: "",
  })
  solicitudForm = form(this.solicitudModel, (campo)=>{
    required(campo.nombre),
    required(campo.email)
    email(campo.email),
    required(campo.tipoProyecto),
    required(campo.descripcion),
    required(campo.presupuesto),
    min(campo.presupuesto, 50000)
    required(campo.fechaAproximada)
  })
  ngOnInit(){
    if(this.id){
      this.sService.getById(this.id).subscribe({
        next: (data) => {this.solicitudModel.set(data)},
        error: (e) => (console.log(e))
      })
    }
  }
  onSubmit(){
    if(this.solicitudForm().invalid()){
      return
    }
    const solicitud =this.solicitudModel()
    if(this.id){ //existe id
      this.sService.editSolicitud(this.id, solicitud).subscribe({
        next: (data) => {console.log("Solicitud editada correctamente: ", data),
          this.router.navigate(['/list-solicitud'])
        },
        error: (e) => {console.log("Error al editar la persona: ",e)}
      })
    }
    else{ //no existe id
      this.sService.postSolicitud(solicitud).subscribe({
        next: (data) => {console.log("Solicitud creada correctamente: ", data),
          this.router.navigate(['/list-solicitud'])
        },
        error: (e) => {console.log(e)}

      })
    }
  }
}
