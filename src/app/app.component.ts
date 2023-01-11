import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './contador/contador.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ngrx-02-redux-app';
  
  contador?: number;
  
  constructor( private store: Store<AppState>) {
    // subscripcion escuchando cuando cambie el estado (state)
    // el select es para seleccionar que es lo que tengo que escuchar 
    // porque puede haber varios y asi seleccionamos en cada cado uno
    this.store.select('contador')
        .subscribe( contador => this.contador = contador);   
 
  }
  
  incrementar() {        
    this.store.dispatch( actions.incrementar() );
  }  
  decrementar() {
    this.store.dispatch( actions.decrementar() );
  }

  

}

