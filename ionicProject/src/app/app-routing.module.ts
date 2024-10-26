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
    path: 'loginchef',
    loadChildren: () => import('./loginchef/loginchef.module').then( m => m.LoginchefPageModule)
  },
  {
    path: 'chefhome',
    loadChildren: () => import('./chefhome/chefhome.module').then( m => m.ChefhomePageModule)
  },
  
  {
    path: 'addrecipe',
    loadChildren: () => import('./addrecipe/addrecipe.module').then( m => m.AddrecipePageModule)
  },
  {
    path: 'recipelist',
    loadChildren: () => import('./recipelist/recipelist.module').then( m => m.RecipelistPageModule)
  },
  {
    path: 'mesrecette',
    loadChildren: () => import('./mesrecette/mesrecette.module').then( m => m.MesrecettePageModule)
  },
 
  {
    path: 'loginuser',
    loadChildren: () => import('./loginuser/loginuser.module').then( m => m.LoginuserPageModule)
  },
  {
    path: 'userhome',
    loadChildren: () => import('./userhome/userhome.module').then( m => m.UserhomePageModule)
  },
  {
    path: 'sponsorlogin',
    loadChildren: () => import('./sponsorlogin/sponsorlogin.module').then( m => m.SponsorloginPageModule)
  },
  
  {
    path: 'addmarqueproduit',
    loadChildren: () => import('./addmarqueproduit/addmarqueproduit.module').then( m => m.AddmarqueproduitPageModule)
  },
  {
    path: 'marqueproduitlist',
    loadChildren: () => import('./marqueproduitlist/marqueproduitlist.module').then( m => m.MarqueproduitlistPageModule)
  },
  {
    path: 'loginsponsor',
    loadChildren: () => import('./loginsponsor/loginsponsor.module').then( m => m.LoginsponsorPageModule)
  },
  {
    path: 'sponsorhome',
    loadChildren: () => import('./sponsorhome/sponsorhome.module').then( m => m.SponsorhomePageModule)
  },
  {
    path: 'addcompetition',
    loadChildren: () => import('./addcompetition/addcompetition.module').then( m => m.AddcompetitionPageModule)
  },
  {
    path: 'competitionlist',
    loadChildren: () => import('./competitionlist/competitionlist.module').then( m => m.CompetitionlistPageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
