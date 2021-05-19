import { Component, enableProdMode } from '@angular/core';



@Component({
    selector:'app-heroe',
    templateUrl : './heroe.component.html',                 

})
export class HeroeComponent{
nombre  :   string = 'IronMan';
edad    :   number = 55

get nombreCapitalizado() :string {
    return this.nombre.toUpperCase();
}

obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
}

cambiasNombre () : void {
    this.nombre = 'Spiderman';
}
cambiarEdad (): void{
    this.edad = 45;
}
}


