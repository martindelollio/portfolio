import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SolicitudService } from '../../service/solicitud-service';
import solicitud from '../../models/solicitud';

@Component({
  imports: [RouterLink],
  selector: 'app-lista-solicitudes',
  styleUrl: './lista-solicitudes.css',
  templateUrl: './lista-solicitudes.html',
})
export class ListaSolicitudes {
   private sService = inject(SolicitudService);

  solicitudes = signal<solicitud[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.loadSolicitudes();
  }

  loadSolicitudes() {
    this.loading.set(true);
    this.sService.getSolicitud().subscribe({
      next: (data) => {
        this.solicitudes.set(data);
        this.loading.set(false);
      },
      error: (e) => {
        console.error('Error al cargar solicitudes:', e);
        this.loading.set(false);
      },
    });
  }

}
