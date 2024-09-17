import { Component } from '@angular/core';
import { range } from 'rxjs';
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-caesar-cipher',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './caesar-cipher.component.html',
  styleUrl: './caesar-cipher.component.css'
})
export class CaesarCipherComponent {
  savedInput: string = ''; // Variable to store the saved input
  test: any;
  type:string="";

  saveInput(value: string): void {
    this.savedInput = value; // Save the input value to the variable
  }
  encode(value:string):void{
    this.type="encoded";
    this.savedInput= '';
    for (let i = 0; i < value.length; i++){
      this.test=value.charCodeAt(i)+3;
      this.savedInput += String.fromCharCode(this.test)
    }   
  }
  decode(value:string):void{
    this.type="decoded";
    this.savedInput= '';
    for (let i = 0; i < value.length; i++){
      this.test=value.charCodeAt(i)-3;
      this.savedInput += String.fromCharCode(this.test)
    } 
  }

}
