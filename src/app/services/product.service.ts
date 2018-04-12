import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  //this method is used to get the data for services
  public getData()
  {
    return this.httpClient.get("./assets/data.json");
  }
}
