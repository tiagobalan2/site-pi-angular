import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { MuralComponent } from './pages/mural/mural.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { TurmasComponent } from './pages/turmas/turmas.component';
import { LoginComponent } from './pages/login/login.component';
import { ExplicacaoComponent } from './pages/explicacao/explicacao.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {
        path: "inicial",
        component: PaginaInicialComponent
    },
    {
        path: "contato",
        component: ContatoComponent
    },
    {
        path: "feedback",
        component: FeedbackComponent
    },
    {
        path: "mural",
        component: MuralComponent
    },
    {
        path: "quem-somos",
        component: QuemSomosComponent
    }, {
        path: "explicacao",
        component: ExplicacaoComponent
    },
    {
        path: "admin",
        component: LoginComponent, canActivate: [AdminGuard]
    },
    {
        path:"**",
        redirectTo:"inicial", pathMatch: "full"
    }

];
