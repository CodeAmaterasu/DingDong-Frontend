import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./User";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  constructor(private http: HttpClient) { }

  public registerUser(userData: User): Observable<any> {
    return this.http.post('https://192.168.101.19:5001/user', userData, this.httpOptions);
    //
  }
}
