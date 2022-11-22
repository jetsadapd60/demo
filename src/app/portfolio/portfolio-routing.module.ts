import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioListComponent } from "./portfolio-list/portfolio-list.component";
import { PortfolioComponent } from "./portfolio.component";

const routes: Routes = [
    { path: '', component: PortfolioListComponent }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {}