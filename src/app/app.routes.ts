import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Solicitud } from './pages/solicitud/solicitud';
import { ProjectsDatails } from './pages/projects-datails/projects-datails';
import { SolicitudDetails } from './pages/solicitud-details/solicitud-details';
import { ListaSolicitudes } from './pages/lista-solicitudes/lista-solicitudes';

export const routes: Routes = [
    {path: "", redirectTo:"home", pathMatch:"full"},
    {path: "home", component: Home},
    {path: "projects", component: Projects},
    {path: "projects/:id", component:ProjectsDatails},
    {path: "list-solicitud", component:ListaSolicitudes},
    {path: "solicitud", component: Solicitud},
    {path: "solicitud/:id/edit", component: Solicitud},
    {path: "solicitudes/:id", component: SolicitudDetails},
];
