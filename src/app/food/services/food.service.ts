import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FoodService {
  apiURL: string = "http://localhost:3000/foods";

  constructor(private http: HttpClient) { }

  getFoods() {
    return this.http.get(this.apiURL);
  }

}
