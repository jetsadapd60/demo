import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    console.log("portfolio list start")
  }

  ngOnDestroy(): void {
    console.log('destroy list portfolio')
  }

}
