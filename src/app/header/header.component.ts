import { Component, OnInit } from '@angular/core';
import { CamDataService } from '../cam-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  styles: [`
        :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
        }

        @media screen and (max-width: 64em) {
            :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
                top: 0px;
            }
        }
  `]
})
export class HeaderComponent implements OnInit {
  
  displayModal: boolean;
  details = <any>[];
  sourceProducts;
  targetProducts;
  count = 0;
  total = 0;
  
  constructor(
    public camdataService: CamDataService
  ) {}

  ngOnInit() {
    // this.camdataService.getItems().subscribe(items => {
    //   console.log(items);
    //   this.sourceProducts = items;
    // });
    this.camdataService.getItems().subscribe(
      (res) => {
        this.sourceProducts = res;
        for(let item of this.sourceProducts){
          this.total++;
        }
    }, (err) => {
      console.log(err);
    });
    this.targetProducts = [];
  }

  showModalDialog() {
    this.displayModal = true;
  }

  counter() {
    this.count = 0;
    for(let item of this.targetProducts){
      this.count++;
    }
  }


}
