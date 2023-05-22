import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  constructor(private router: Router) {}
  form: FormGroup = new FormGroup({});
  
 
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cellphone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      favoriteHamburguer: new FormControl('', [Validators.required])
    })
  }
  onSubmit(form){
    if(form.value.productCode){
      console.log(form.value.productCode)
    }
  }

  navegar(){
    this.router.navigate(['/hamburgueres']);
  }
};
