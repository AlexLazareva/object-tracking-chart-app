import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ChartsListPageComponent} from "./charts-list-page/charts-list-page.component";
import {ChartPageComponent} from "./chart-page/chart-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/charts",
    pathMatch: "full",
  },
  {
    path: "charts",
    component: ChartsListPageComponent,
  },
  {
    path: "chart/:id",
    component: ChartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
