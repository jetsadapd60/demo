import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('destroy home')
  }

}
