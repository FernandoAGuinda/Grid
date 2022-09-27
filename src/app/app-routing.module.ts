import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'opcao1',
    loadChildren: () => import('./opcao1/opcao1.module').then( m => m.Opcao1PageModule)
  },
  {
    path: 'opcao2',
    loadChildren: () => import('./opcao2/opcao2.module').then( m => m.Opcao2PageModule)
  },
  {
    path: 'opcao3',
    loadChildren: () => import('./opcao3/opcao3.module').then( m => m.Opcao3PageModule)
  },
  {
    path: 'opcao4',
    loadChildren: () => import('./opcao4/opcao4.module').then( m => m.Opcao4PageModule)
  },
  {
    path: 'opcao5',
    loadChildren: () => import('./opcao5/opcao5.module').then( m => m.Opcao5PageModule)
  },
  {
    path: 'opcao6',
    loadChildren: () => import('./opcao6/opcao6.module').then( m => m.Opcao6PageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
