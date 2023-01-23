import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsListPageComponent } from './charts-list-page/charts-list-page.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { DayChartComponent } from './charts/day-chart/day-chart.component';
import { WeekChartComponent } from './charts/week-chart/week-chart.component';
import { YearChartComponent } from './charts/year-chart/year-chart.component';
import { MonthChartComponent } from './charts/months-chart/month-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ChartPageComponent,
    ChartsListPageComponent,
    DayChartComponent,
    WeekChartComponent,
    YearChartComponent,
    MonthChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
