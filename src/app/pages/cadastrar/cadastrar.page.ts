import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HardwareService } from 'src/app/services/hardware.service';

@Component({
  selector: 'app-folder',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})

export class CadastrarPage implements OnInit {
  formCadastrar: FormGroup;
  isSubmitted: boolean = false;

  constructor(private router: Router,
    private hardwareService: HardwareService,
    
    private formBuilder: FormBuilder,
  private alertController : AlertController) { }
  
  itemSelecionado(value:string):boolean{
    return (this.formCadastrar.value.tipo==value)
  }

  submitForm(){
    this.cadastrar()
  }

  get errorControl(){
    return this.formCadastrar.controls
  }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      tipo : ["", [Validators.required]], 
      especificacao: ["", [Validators.required]], 
      marca:["", [Validators.required]], 
      modelo:["", [Validators.required]],
      preco:["", [Validators.required]],
      desconto:["", [Validators.required]],
      quantidade:["", [Validators.required]],
    });
  }

  private cadastrar(){
    const value:boolean = this.hardwareService.cadastrar(
      this.formCadastrar.value.tipo,
      this.formCadastrar.value.marca,
      this.formCadastrar.value.modelo,
      this.formCadastrar.value.preco,
      this.formCadastrar.value.desconto,
      this.formCadastrar.value.quantidade);
    if(value==true){
      this.router.navigate(['/home'])
    } else {
      this.presentAlert('Erro', 'Erro ao cadastrar','')
    }
  }

  async presentAlert(header:string, subHeader:string,massage:string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: massage,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
