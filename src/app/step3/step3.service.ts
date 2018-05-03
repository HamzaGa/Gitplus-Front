import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileToUpload } from '../file-upload/file-to-upload';

@Injectable()
export class Step3Service {

  url = "http://localhost:8080/PFA/test/entities.executable/upload";
  constructor(private http: HttpClient) { }

  deployExecutable(file : FileToUpload,table : String, projectType: String){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
            })
    };
    return this.http.post(this.url+"?user=Hamza&projectType="+projectType+"&table="+table,file,httpOptions);
  }
}
