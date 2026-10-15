import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Solicitud } from './pages/solicitud/solicitud';
import { ProjectsDatails } from './pages/projects-datails/projects-datails';

export const routes: Routes = [
    {path: "home", component: Home},
    {path: "projects", component: Projects},
    {path: "projects/:id", component:ProjectsDatails},
    {path: "solicitudes", component: Solicitud},
];
