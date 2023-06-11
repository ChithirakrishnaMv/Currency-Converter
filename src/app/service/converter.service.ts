import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CurrencyService {
  Baseurl:string = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';
  constructor (private http:HttpClient){}
  getCountries(){
  return this.http.get(this.Baseurl)
  }
  convert(from:any,to:any){
      return this.http.get(`http://data.fixer.io/api/latest?access_key=8589e210c7837aca1457d193c1650b7d&symbols=${from},${to}&format=1`) 
  }
  
  }
    