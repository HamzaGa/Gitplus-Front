import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileToUpload } from './file-to-upload';


@Injectable()
export class FileUploadService {
url = "http://localhost:8080/PFA/test/entities.executable/upload";
  constructor(private http: HttpClient) { }

  uploadFile(file : FileToUpload){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
            })
    };
  let projectType = "php";
    return this.http.post(this.url+"?projectType="+projectType,file,httpOptions);
  }

}
