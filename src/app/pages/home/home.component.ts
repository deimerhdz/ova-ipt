import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2'
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CommonModule,DragDropModule, NavComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public message:string='';
  @ViewChild('opcionOne') opcionOne!: ElementRef;
  @ViewChild('opcionTwo') opcionTwo!: ElementRef;
  @ViewChild('opcionThree') opcionThree!: ElementRef;
  @ViewChild('opcionFour') opcionFour!: ElementRef;
  @ViewChild('opcionFive') opcionFive!: ElementRef;
  @ViewChild('opcionSix') opcionSix!: ElementRef;
  @ViewChild('opcionSeven') opcionSeven!: ElementRef;
  @ViewChild('opcionEight') opcionEight!: ElementRef;
  

  public point:number=0;
  public items:string[]=[
    "Palabras (tierra o arena)",
    "Foso",
    "Linea de blanco",
    "Campo de tiros",
    "Linea de fuego",
    "Linea de tiro",
    "Linea de espera",
    "Area de reunion"
  ]


  level1:string[] = [];
  level2:string[] = [];
  level3:string[] = [];
  level4:string[] = [];
  level5:string[] = [];
  level6:string[] = [];
  level7:string[] = [];
  level8:string[] = [];

 
  drop(event: CdkDragDrop<string[]>) {
    
    if (event.container.id === 'level1' && event.container.data.length >= 1) {
   
      return;
    }

    if (event.container.id === 'level2' && event.container.data.length >= 1) {
      return;
    }
    if (event.container.id === 'level3' && event.container.data.length >= 1) {
      return;
    }
    if (event.container.id === 'level4' && event.container.data.length >= 1) {
      return;
    }
    if (event.container.id === 'level5' && event.container.data.length >= 1) {
      return;
    }
    if (event.container.id === 'level6' && event.container.data.length >= 1) {
      return;
    }
    if (event.container.id === 'level7' && event.container.data.length >= 1) {
      return;
    }
    if (event.container.id === 'level8' && event.container.data.length >= 1) {
      return;
    }
  
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  submit(){
    try{
      if(this.point>=100) return;
      if(this.opcionOne.nativeElement.value == 'Palabras (tierra o arena)'){
        this.point+=12.5;
        this.opcionOne.nativeElement.className ='success';
      }else{
        this.opcionOne.nativeElement.className= 'error';
      }
      if(this.opcionTwo.nativeElement.value == 'Foso'){
        this.point+=12.5;
        this.opcionTwo.nativeElement.className ='success';
      }else{
        this.opcionTwo.nativeElement.className= 'error';
      }
      if(this.opcionThree.nativeElement.value == 'Linea de blanco'){
        this.point+=12.5;
         this.opcionThree.nativeElement.className ='success';
      }
      else{
        this.opcionThree.nativeElement.className= 'error';
      }
      if(this.opcionFour.nativeElement.value == 'Campo de tiros'){
        this.point+=12.5;
        this.opcionFour.nativeElement.className ='success';
      }
      else{
        this.opcionFour.nativeElement.className= 'error';
      }
      if(this.opcionFive.nativeElement.value == 'Linea de fuego'){
        this.point+=12.5;
        this.opcionFive.nativeElement.className ='success';
      }else{
        this.opcionFive.nativeElement.className= 'error';
      }
      if(this.opcionSix.nativeElement.value == 'Linea de tiro'){
        this.point+=12.5;
        this.opcionSix.nativeElement.className ='success';
      }else{
        this.opcionSix.nativeElement.className= 'error';
      }
      if(this.opcionSeven.nativeElement.value == 'Linea de espera'){
        this.point+=12.5;
        this.opcionSeven.nativeElement.className ='success';
      }else{
        this.opcionSeven.nativeElement.className= 'error';
      }
      if(this.opcionEight.nativeElement.value == 'Area de reunion'){
        this.point+=12.5;
        this.opcionEight.nativeElement.className ='success';
      }else{
        this.opcionEight.nativeElement.className= 'error';
      }
      if(this.point==100){
        this.message='Felicidades lo has realizado correctamente!'
      }else if(this.point>80 && this.point<100){
        this.message='Nada mal, lo has conseguido pero debes seguir esforzandote!'
      }else{
        this.message='Sigue intentandolo. no has conseguido superar el reto'
      }
    }catch(err){
    
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes completar todas las casillas!",
       
      });
    }
  }

  reset(){
    // this.level1 = [];
    // this.level2 = [];
    // this.level3 = [];
    // this.level4 = [];
    // this.level5 = [];
    // this.level6 = [];
    // this.level7 = [];
    // this.level8 = [];
    // this.point  =  0;
    // this.opcionOne.nativeElement.className   ='';
    // this.opcionTwo.nativeElement.className   ='';
    // this.opcionThree.nativeElement.className ='';
    // this.opcionFour.nativeElement.className  ='';
    // this.opcionFive.nativeElement.className  ='';
    // this.opcionSix.nativeElement.className   ='';
    // this.opcionSeven.nativeElement.className ='';
    // this.opcionEight.nativeElement.className ='';
    document.location.reload();
  }

}
