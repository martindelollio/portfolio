import { HttpClient } from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import Proyecto from '../models/proyectos';


@Injectable({
    providedIn: 'root'
})
export class ProyectoService {
 private api = "http://localhost:3000/proyectos"

 proyectos : Proyecto[]

 constructor(public http: HttpClient){
    this.proyectos =[]
 }

 getProjects(){
    return this.http.get<Proyecto[]>(this.api);
 }
 getById(id: string){
    return this.http.get<Proyecto>(`${this.api}/${id}`)
 }
 
}
