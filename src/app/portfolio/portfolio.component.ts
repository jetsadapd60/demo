import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {


  ngOnInit(): void {
    console.log("portfolio start ++++++")
  }

  ngOnDestroy(): void {
    console.log('destroy portfolio ++++++')
  }

}
