import { Component, OnInit } from '@angular/core';

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

  constructor(){}
  ngOnInit(): void {
      
  }
}
