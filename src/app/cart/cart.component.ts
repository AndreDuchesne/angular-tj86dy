import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  items;
  checkoutForm; //Objet pour créer le formulaire

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) 
  //Création du formulaire sur l'initialisation
  { 
    this.checkoutForm = this.formBuilder.group({
      name:'',
      address: ''
    });

  }



  ngOnInit() {
    this.items = this.cartService.getItems();    

  }

  onSubmit(customerData){
    //Traiement du formulaire
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    console.warn('Votre commande a été transmise \n',customerData);
  }

}