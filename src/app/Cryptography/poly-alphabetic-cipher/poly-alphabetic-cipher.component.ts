import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-poly-alphabetic-cipher',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './poly-alphabetic-cipher.component.html',
  styleUrl: './poly-alphabetic-cipher.component.css'
})
export class PolyAlphabeticCipherComponent {
  Cipher_key: string[][] = [
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'P', 'O', 'I', 'U', 'Y', 'T', 'R', 'E', 'W', 'Q', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['Q', 'A', 'Z', 'W', 'S', 'X', 'E', 'D', 'C', 'R', 'F', 'V', 'T', 'G', 'B', 'Y', 'H', 'N', 'U', 'J', 'M', 'I', 'K', 'O', 'L', 'P'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'K', 'I', 'O', 'P', 'L', 'U', 'J', 'H', 'Y', 'T', 'G', 'F', 'R', 'E', 'D', 'S', 'W', 'Q', 'A']
  ];

  test=this.Cipher_key[2][2]
  savedInput: string = ''; // Variable to store the saved input
  type:string="";

  saveInput(value: string): void {
    this.savedInput = value; // Save the input value to the variable
  }
  encode(value:string):void{
    this.type="encoded";
    this.savedInput= '';
    for (let i = 0; i < value.length; i++){
      let c=i%3
      let d=value.charCodeAt(i)-65
      this.savedInput+=this.Cipher_key[c][d]
      
    }
    console.log(this.savedInput);
    }     
  decode(value:string):void{
    this.type="decoded";
    this.savedInput= '';
    let temp : number;
    for (let i = 0; i < value.length; i++){
      temp=0
      let c=i%3
      for (let j = 0; j < this.Cipher_key[c].length; j++){
        if(this.Cipher_key[c][j]==value[i]){
          temp=j
          break
        }
      }
      this.savedInput += String.fromCharCode(temp+65)
    }
    console.log(this.savedInput)
      }


  }



