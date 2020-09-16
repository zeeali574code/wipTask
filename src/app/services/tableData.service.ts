import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class tableData {

  constructor(private http:HttpClient) { }

  getData()
  {
    return this.http.get<any>('https://api.jikan.moe/v3/search/anime?q=naruto')
  }
}
