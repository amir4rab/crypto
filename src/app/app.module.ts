import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AboutComponent } from './pages/about/about.component';
import { ChartRowComponent } from './components/chart-row/chart-row.component';
import { ChartScreenComponent } from './components/chart-screen/chart-screen.component';
import { PriceShortenerDirective } from './directives/price-shortener.directive';
import { PriceShortenerPipe } from './pipes/price-shortener.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    ChartsComponent,
    SettingsComponent,
    AboutComponent,
    ChartRowComponent,
    ChartScreenComponent,
    PriceShortenerDirective,
    PriceShortenerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
