import { Component, OnInit } from '@angular/core';
import { CamDataService } from '../cam-data.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';

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
  
  list;
  displayModal: boolean;
  details = <any>[];
  sourceProducts;
  targetProducts;
  count = 0;
  total = 0;
  
  constructor(
    public camdataService: CamDataService,
    private storage: AngularFireStorage,
    private db: AngularFireDatabase
  ) {
    this.db.list('imgData').snapshotChanges().subscribe(data => {
      this.list = [];
      data.forEach(snapShot => {
        let item = {
          key: snapShot.key,
          value: snapShot.payload.toJSON()
        }
        this.list.push(item);
      });
    });}

  ngOnInit() {
    this.camdataService.getItems().subscribe(
      (res) => {
        this.sourceProducts = res;
        for(let item of this.sourceProducts){
          this.total++;
        }
    }, (err) => {
      console.log("An erroroccured during loading data:"+ err);
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
