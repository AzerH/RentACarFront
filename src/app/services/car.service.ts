import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='https://localhost:44311/api/'

  constructor(private httpClient:HttpClient)  { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getall"
    
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
    }

    getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"cars/getbybrandid?brandId="+brandId;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"cars/getbycolorid?brandId="+colorId;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }



}
