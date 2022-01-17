import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  aceitaNovaEscola = false;
  createNovaEscola = 'Nenhuma Escola criada!';
  schoolName = "";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.aceitaNovaEscola = true;
    }, 3000);
  }

  createSchoolStatus(){
    this.createNovaEscola = 'Escola Criada com Sucesso'
  }

  updateSchoolName(event: any){
    this.schoolName = (<HTMLInputElement>event.target).value; 
  }
}
