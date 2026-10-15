import { signal } from "@angular/core"

export default interface Proyecto {
    id?: string
    nombre : string
    descripcionCorta : string
    descripcion : string
    tecnologias : string[]
    imagen ?: string
}
