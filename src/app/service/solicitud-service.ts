import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import solicitud from '../models/solicitud';

@Injectable({
    providedIn: 'root'
})
export class SolicitudService {
    private api = "http://localhost:3000/solicitudes"
    constructor(public http: HttpClient ){}

    postSolicitud(soli:solicitud){
        return this.http.post<solicitud>(this.api,soli);
    }
    getSolicitud(){
        return this.http.get<solicitud[]>(this.api)
    }
    getById(id: string){
        return this.http.get<solicitud>(`${this.api}/${id}`)
    }
    deleteSolicitud(id: string){
        return this.http.delete<solicitud>(`${this.api}/${id}`)
    }
    editSolicitud(id: string, soli :solicitud){
        return this.http.put<solicitud>(`${this.api}/${id}`, soli)
    }

}
