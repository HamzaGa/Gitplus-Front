import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileToUpload } from '../file-upload/file-to-upload';

@Injectable()
export class Step2Service {

  url = "http://localhost:8080/PFA/test/entities.bd/upload";
  constructor(private http: HttpClient) { }

  deployDatabase(file : FileToUpload){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
            })
    };
    return this.http.post(this.url+"?user=Hamza",file,httpOptions);
  }

}
