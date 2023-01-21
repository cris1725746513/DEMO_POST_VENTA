import {Casilleros} from './casilleros.model'
export class ProductModel{
	idproductos:number;
	impuesto:number;
	nombreproducto:string;
	cantidad:number;
	codigobarras:string;
	codigoempresa:string;
	costo:number;
	costoproveedor:number;
	detalleproducto:string;
	idcasillero:Array<Casilleros>;
}
