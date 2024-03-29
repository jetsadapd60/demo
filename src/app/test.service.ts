import { Injectable, OnDestroy } from "@angular/core";

@Injectable()
export class TestService implements OnDestroy {
    interval: any;
    count = 0;
  
    constructor() {
      console.log('constructor: logging starting...');
      this.interval = setInterval(() => {
        console.log(this.count++);
      }, 1000);
    }
  
    ngOnDestroy() {
      console.log('ngOnDestroy: cleaning up...');
      clearInterval(this.interval);
    }
}