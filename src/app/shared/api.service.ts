import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({ providedIn: 'root' })
export class   BannersService {
   
    //public resourceUrl ='https://dummyjson.com/products';
    public resourceUrl ='http://13.200.15.177/api/open/storeItems?storeCode=talemein';
    constructor(protected http: HttpClient) {}
 
    delete(id?: any): Observable<any> {
      return this.http.delete<any>((this.resourceUrl+id), {  observe: 'response' });
    }
    query(req?: any): Observable<any> {
      return this.http.get<any>(this.resourceUrl, {  observe: 'response' });
    }
  }