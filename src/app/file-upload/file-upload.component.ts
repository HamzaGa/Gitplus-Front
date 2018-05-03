import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileUploadService } from './file-upload.service';
import { Injectable } from '@angular/core';
import { FileToUpload } from './file-to-upload';


@Injectable()
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  file : File;
  c:String;
  fileToUpload = new FileToUpload ;
  constructor(private fileUploadService:FileUploadService) { }

  ngOnInit() {
  }
  onFileChange(event){
    this.file = event.target.files[0];
  }

  onSubmit(){
    let reader = new FileReader();
    let file1 = this.file;
    reader.onload = (e) => {
      this.fileToUpload.fileName=file1.name;
      this.fileToUpload.file=reader.result;      
     this.fileUploadService.uploadFile(this.fileToUpload).subscribe(err => {
      console.log(Error);
  });
    }
    reader.readAsDataURL(file1);
    
  }

}
