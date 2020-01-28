import { Component, OnInit  } from '@angular/core';
import { AppService } from '../services/app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  categories:any;
  selectedCategory: any= 'general';
  constructor(private appService: AppService) {}
  ngOnInit(){
    this.categories = {
      'general':'general',
      'others': 'others'
    }
    this.appService.getData().subscribe(res=>{
        this.data = res;
      },
      err => {
          console.log(err);
      }
    )
  }
  asIsOrder(a, b) {
    return 1;
  }
}
