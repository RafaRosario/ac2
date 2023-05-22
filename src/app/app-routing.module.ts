import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HamburgueresComponent } from './hamburgueres/hamburgueres.component';

const routes: Routes = [{path:'cadastro', component: CadastroComponent},
{path:'hamburgueres', component:HamburgueresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
