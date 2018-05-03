import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  
  projetComposeFront : String;
  projetComposeBack : String;
  typeDuProjet : String;
  projetSimple : String;
  
  
  constructor(private router : Router) { 
    
    this.typeDuProjet = "Simple";
    this.projetComposeBack ="php";
    this.projetComposeFront="angular";
    this.projetSimple="php";
 
  }



  ngOnInit() {
  }

  onSubmit(){

    this.router.navigate(['step2'],{queryParams: { projectType: this.typeDuProjet , back : this.projetComposeBack , front : this.projetComposeFront , simple : this.projetSimple }});  
  
  }

}
