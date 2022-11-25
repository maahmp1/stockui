import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {     path: '', pathMatch: 'full', redirectTo: 'produtos'
},
  {    path: 'produtos', loadChildren: () =>import('./produtos/produtos.module').then(m => m.ProdutosModule)
},
  {path:'categorias', loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
