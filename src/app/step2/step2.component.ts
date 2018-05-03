import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { FileToUpload } from '../file-upload/file-to-upload';
import { Step2Service } from './step2.service';

@Injectable()
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  ouiOuNon : String;
  loading : String;
  projetComposeFront : String;
  projetComposeBack : String;
  typeDuProjet : String;
  projetSimple : String;
  resultat : String;
  table : String;
  class: String;
  disabled: String;
  file : File;
  baseDeDonnes = new FileToUpload ;
  

  constructor(private router:Router,private route : ActivatedRoute,private step2Service : Step2Service) { 
    this.loading = "false";    
    this.ouiOuNon="Non";
    this.class="btn btn-success"; 
    this.disabled="false";
    this.route.queryParams.subscribe(params => {
      this.typeDuProjet = params['projectType'];
      this.projetComposeBack = params['back'];
      this.projetComposeFront = params['front'];
      this.projetSimple = params["simple"];
    });  
  }

  ngOnInit() {
  }
  
  onChange(event){
    if(this.ouiOuNon=="Oui")
     {
       this.disabled="true";
       this.class="unsubclass";
     }
  }

  onFileChange(event){
    this.loading="true";
    this.file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      this.baseDeDonnes.fileName=this.file.name;
      this.baseDeDonnes.file=reader.result;      
     this.step2Service.deployDatabase(this.baseDeDonnes).toPromise( ).then(
      res => {this.loading="false"; this.resultat = res.message; this.table=res.table; this.class="btn btn-success"; this.disabled="false"},
       error =>  { this.loading="false"; this.resultat= "erreur"; }
      
     )
     
    }
    reader.readAsDataURL(this.file);
  }

onSubmit(){
this.router.navigate(["step3"],{queryParams: { projectType: this.typeDuProjet , back : this.projetComposeBack , front : this.projetComposeFront , simple : this.projetSimple, table: this.table }});
}

}
