import { Component, OnInit } from '@angular/core';

//Importamos estos dos componentes para trabajar con el form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})

export class TarjetaCreditoComponent implements OnInit {
  //Creamos la lista de tarjetas y unos objetos
  listCard: any[] = [
    {titular:'Camilo Barrios', number: '122233232323', expiracion:'06/25', cvv:'343'},
    {titular:'Felipe Lopez', number: '342443545466', expiracion:'01/26', cvv:'231'},
    {titular:'Marcela Puentes', number: '2123657878766', expiracion:'03/24', cvv:'443'},
    {titular:'Héctor Cardenas', number: '3232343535353', expiracion:'10/27', cvv:'875'},
  ];

  form: FormGroup;

  //En el constructor inicializamos y ponemos las validaciones

  constructor(private fb: FormBuilder, private toastr: ToastrService){
    this.form = this.fb.group({
      titular: ['', Validators.required],
      number: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      expiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(4)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }
  ngOnInit(): void {
      
  }

  agregarTarjeta(){
    console.log(this.form);

    //Obtenemos los valores que se ingresan en el form
    const tarjet: any = {
      titular: this.form.get('titular')?.value,
      number: this.form.get('number')?.value,
      expiracion: this.form.get('expiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }

    //Pusheamos los datos en el listCard, y sacamos un modal que importamos con el toasttr
    this.listCard.push(tarjet);
    this.toastr.success('Tarjeta agregada con éxito.', 'Tarjeta Agregada');
    //Reseteamos el form
    this.form.reset();
    console.log(tarjet);
  }

  deleteCard(index: number){
    //el .splice le pasamos la posición del index al dar click en borrar y le decimos que elimine solo esa posición
    this.listCard.splice(index, 1)
    this.toastr.error("La tarjeta fué eliminada con éxito.", "Tarjeta Eliminada")
  }
}
