import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChartsModule} from 'ng2-charts';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {createCustomElement} from '@angular/elements';
import {LineChartComponent} from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RadarComponent } from './radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  // bootstrap: [AppComponent],
  entryComponents: [PieChartComponent, LineChartComponent, BarChartComponent, RadarComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    customElements.define('charts-pie', createCustomElement(PieChartComponent, {injector: this.injector}));
    customElements.define('charts-bar', createCustomElement(BarChartComponent, {injector: this.injector}));
    customElements.define('charts-radar', createCustomElement(RadarComponent, {injector: this.injector}));
    customElements.define('charts-line', createCustomElement(LineChartComponent, {injector: this.injector}));
  }

}
