import { Component, OnInit } from '@angular/core';

import { RegistryService } from '../../../service/registry.service';
import { ClientService } from '../../../service/client.service';
import { InventoryService } from '../../../service/inventory.service';

import { ClientModel } from '../../../models/client.model';
import { ProductModel } from '../../../models/product.model';
import { RegistryModel } from'../../../models/registry.model';

@Component({
  selector: 'app-add-registry',
  templateUrl: './add-registry.component.html',
  styleUrls: ['./add-registry.component.css']
})
export class AddRegistryComponent implements OnInit {
	public clientToBuy: any;
	public products: ProductModel[];
	public products_to_select: ProductModel[];
	public success_client: number;
	public success_products: number;
	public registry: RegistryModel;

		//Busqueda de cliente
	public searchClient: {
		key: string,
		value: string
	};

		//Busqueda de productos
	public searchProduct: {
		key: string,
		value: string,
		quantity: number
	};

  constructor(	private _registryService: RegistryService,
  				private _inventoryService: InventoryService,
  				private _clientService: ClientService	) {
  	this.success_client = 0;
  	this.success_products = 0;
  	this.searchClient = {key: "", value: ""};
  	this.searchProduct = {key: "", value: "", quantity: null};

  	this.registry = new RegistryModel({id:"" ,name:"" ,surname:"" ,identification:null }, "" ,0 , [{id: '',name: '', brand: '', price:null ,quantity:null}]);

  	
  }

  ngOnInit() {
  }

  //Metodo para buscar un cliente por nombre o identificacion
  getClient(){
  	this._clientService.getBy(this.searchClient).subscribe(
  		response => {
  			this.clientToBuy = response;
			this.clientToBuy = this.clientToBuy.Client;
  			if(this.clientToBuy.length == 0){
  				alert("No se ha podido encotrado el cliente");
  			}
  			else{
	  			this.success_client = 1;
	  		}
  		},
  		error => {
  			console.log(<any>error);
  			alert("Ha ocurrido un error al intentar encotrar el cliente");
  			//this.success_client = -1;
  		}
  	);
  }

  //Metodo para capturar el cliente seleccionado de el componente hijo
  select(event){
  	this.clientToBuy = event;
  	//console.log(event);
  	console.log(this.clientToBuy);
  	//this.registry.client.id = this.clientToBuy._id;
  	//this.registry.client.name = this.clientToBuy.name;
  	//this.registry.client.surname = this.clientToBuy.surname;
  	//this.registry.client.identification = this.clientToBuy.identification;
  	this.success_client = 2;
  }

  //Metodo para cambiar el cliente seleccionado del componente hijo
  change(){
  	this.success_client = 0;
  }

  //Metodo para buscar un producto de la base de datos
  getProduct(){
  	console.log(this.searchProduct);
  	
  		this._inventoryService.getInventory().subscribe(
  			response => {  				
  				
  				this.products=response;
  				console.log(this.products);
  			},
  			error =>{
  				console.log(<any>error);
  				alert("Ha ocurrido un error al intentar obtener el producto de la base de datos");
  			}
  		);
  	
  }
}