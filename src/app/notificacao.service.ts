import { Injectable } from '@angular/core';
import{MatSnackBar} from '@angular/material/snack-bar'
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  notificar(mensagem: string){

    this.snackbar.open(mensagem,"OK",{duration:2000,verticalPosition:"top",horizontalPosition:"center"})


  }
}
