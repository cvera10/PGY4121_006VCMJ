import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  public vinilos = [['Mogwai','Aqui va la descripcion almacenada en el array jiji',12900,'https://vinilogarage.cl/wp-content/uploads/2020/11/atlc-box-set.png'], 
  ['Pink Floyd',"Detalles del producto",14990,'https://media.discordapp.net/attachments/1013648121995210773/1013662296695910481/51ENZbJXWIL._SL1200_.jpg'],
  ['The Doors','Detalles del producto',14990,'https://cdn.discordapp.com/attachments/1013648121995210773/1013662699831439381/81nwuU5MVdL._SL1500_.jpg'],
  ['Queens of the stone age','Detalles del producto',14990,'https://media.discordapp.net/attachments/1013648121995210773/1013663839864238140/MUSICLAND-QUEENS-OF-THE-STONE-AGE-LULLABIES-TO-PARALYZE--800x800.jpeg?width=656&height=656'],
  ['Bob Marley','Detalles del producto',14990,'https://media.discordapp.net/attachments/1013648121995210773/1013664357034491924/75973295.jpg?width=492&height=656']];

}
