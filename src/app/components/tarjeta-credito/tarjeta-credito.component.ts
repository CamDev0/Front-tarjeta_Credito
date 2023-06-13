import { Component, OnInit } from '@angular/core';

//Importamos estos dos componentes para trabajar con el form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})

export class TarjetaCreditoComponent implements OnInit {
  //Creamos la lista de tarjetas y unos objetos
  listCard: any[] = [];
  id: number | undefined;
  form: FormGroup;

  //En el constructor inicializamos y ponemos las validaciones

  constructor(private fb: FormBuilder, private toastr: ToastrService, private _cardService: CardService){
    this.form = this.fb.group({
      titular: ['', Validators.required],
      number: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      expiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(4)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }
  ngOnInit(): void {
      this.getCard();
  }

  //Get front -> List

  getCard(){
    this._cardService.getListCard().subscribe(data => {
      console.log(data);
      //Con esta instrucción pusheamos los datos de la BD a la lista del front
      this.listCard = data;
    }, error => {
      console.log(error);
      
    })
  }


  //POST front

  saveTarjeta(){

    //Obtenemos los valores que se ingresan en el form
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      number: this.form.get('number')?.value,
      expiracion: this.form.get('expiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }

    if(this.id == undefined)
    {
      //Agg nueva tarjeta
      this._cardService.saveCard(tarjeta).subscribe(data => {
        this.toastr.success('Tarjeta agregada con éxito.', 'Tarjeta Agregada');
        this.getCard();
        this.form.reset();
      }, error =>{
        this.toastr.error('Reintente por favor.', 'Error');
        console.log(error);
      })
    }
    else
    {
      //Edit Tarjeta
      tarjeta.id = this.id;
      this._cardService.updateCard(this.id, tarjeta).subscribe(data => {
        this.form.reset();
        this.id = undefined;
        this.toastr.success("Tarjeta actualizada con éxito", "Tarjeta Actualizada");
        this.getCard();
      }, error =>{
        this.toastr.error("Ha ocurrido un error", "Error");
      })
    }
  }

  //PUT
  editCards(tarjeta: any){
    this.id = tarjeta.id;

    console.log(tarjeta);
    this.form.patchValue({
      
      titular: tarjeta.titular,
      number: tarjeta.numberCard,
      expiracion: tarjeta.expiracion,
      cvv: tarjeta.cvv
    })
  }


  //DELETE front

  deleteCard(id: number){
    //el .splice le pasamos la posición del index al dar click en borrar y le decimos que elimine solo esa posición
    this._cardService.deleteCard(id).subscribe(data => {
      this.toastr.error("La tarjeta fué eliminada con éxito.", "Tarjeta Eliminada")
      this.getCard();
    }, error => {
      console.log(error);
      this.toastr.error("Reintente por favor.", "Error")
    })
  }
}
