import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileToUpload } from '../file-upload/file-to-upload';
import { Step3Service } from './step3.service';

@Injectable()
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  table : String;
  projetComposeFront : String;
  projetComposeBack : String;
  typeDuProjet : String;
  projetSimple : String;
  extension : String;
  loading : String;
  file : File;
  executable = new FileToUpload ;
  class:String;
  disabled:String;
  resultat : String;

  constructor(private router:Router,private route : ActivatedRoute, private step3Service : Step3Service) { 
    this.table=null;
    this.disabled="true";
    this.class="unsubclass";
    this.route.queryParams.subscribe(params => {
      this.typeDuProjet = params['projectType'];
      this.projetComposeBack = params['back'];
      this.projetComposeFront = params['front'];
      this.projetSimple = params["simple"];
      this.table = params["table"];
    }); 
    if((this.typeDuProjet=="Simple")&&(this.projetSimple=="php") )
    this.extension=".ZIP";
    else if((this.typeDuProjet=="Simple")&&(this.projetSimple=="j2ee") )
    this.extension=".WAR";
    

  }

  ngOnInit() {
  }

  onFileChange(event){
    this.loading="true";
    this.file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      this.executable.fileName=this.file.name;
      this.executable.file=reader.result;      
     this.step3Service.deployExecutable(this.executable,this.table,this.projetSimple).toPromise( ).then(
      res => {this.loading="false"; this.resultat = res.message;console.log(res.message); this.class="btn btn-success"; this.disabled="false";},
       error =>  { this.loading="false"; this.resultat= "erreur"; }
      
     )
     
    }
    reader.readAsDataURL(this.file);
  }



}