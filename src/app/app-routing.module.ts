import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { component: HomeComponent, path: 'home' },
  { component: ChartsComponent, path: 'charts' },
  { component: SettingsComponent, path: 'settings' },
  { component: AboutComponent, path: 'about' },
  { redirectTo: 'home', path: '**' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
