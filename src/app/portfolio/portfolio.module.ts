import { CommonModule } from "@angular/common";
import { NgModule, OnDestroy } from "@angular/core";
import { TestService } from "../test.service";
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { PortfolioComponent } from "./portfolio.component";
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

@NgModule({
    declarations: [PortfolioComponent, PortfolioListComponent],
    imports: [CommonModule, PortfolioRoutingModule],
    providers: [TestService],
})
export class PortfolioModuel implements OnDestroy {

    constructor() {
        console.log("portfolio module start")
    }

    ngOnDestroy(): void {
        console.log("portfolio module Destroy")
    }

}