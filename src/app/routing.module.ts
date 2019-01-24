import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { D3ScaleComponent } from './components/d3-scale/d3-scale.component';
import { D3DonutChartComponent } from './components/d3-donut-chart/d3-donut-chart.component';
import { D3LineChartComponent } from './components/d3-line-chart/d3-line-chart.component';
import { D3CumulativeLineChartComponent } from './components/d3-cumulative-line-chart/d3-cumulative-line-chart.component';
import { D3StackedAreaChartComponent } from './components/d3-stacked-area-chart/d3-stacked-area-chart.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/d3-scale', pathMatch: 'full'},
    { path: 'd3-scale', component: D3ScaleComponent },
    { path: 'd3-donut', component: D3DonutChartComponent },
    { path: 'd3-line-chart', component: D3LineChartComponent},
    { path: 'd3-cumulative-line-chart', component: D3CumulativeLineChartComponent},
    { path: 'd3-stacked-area-chart', component: D3StackedAreaChartComponent}
];
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
