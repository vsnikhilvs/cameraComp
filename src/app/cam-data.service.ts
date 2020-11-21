import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamDataService {

  camera: AngularFirestoreCollection<Item>;
  cameras: Observable<Item[]>;

  constructor(
    private http: HttpClient,
    public afs: AngularFirestore
  ) {
    this.cameras = this.afs.collection('cameras').valueChanges();
  }
 
  getItems() {
    return this.cameras;
  }

  getData() {
    return this.http.get<any>("http://localhost:3000/data");
  }

}

