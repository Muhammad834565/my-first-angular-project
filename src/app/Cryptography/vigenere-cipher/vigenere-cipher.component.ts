import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-vigenere-cipher',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './vigenere-cipher.component.html',
  styleUrl: './vigenere-cipher.component.css'
})
export class VigenereCipherComponent {

  // Defining a nested array (array of arrays)
  nestedArray: string[][] = [];

  // Initialize the array in the constructor or a method
  constructor() {
    this.createNestedArray();
  }

  // Method to create a 3x3 nested array
  createNestedArray() {
    let c=-1
    for (let i = 0; i < 26; i++) {
      c=c+1
      const row = [];  // Create a new row
      for (let j = 0; j < 26; j++) {
        let b = String.fromCharCode(((j+c)%26)+65)
        row.push(b);  // Add values to the row (0, 1, 2, 3, 4, ...)
      }
      this.nestedArray.push(row);  // Push the row into the nested array
    }
  }


  savedInput: string = ''; // Variable to store the saved input
  type:string="";
  KeyValue:string="";

  saveInput(value: string): void {
    this.savedInput = value; // Save the input value to the variable
  }
  encode(value:string):void{
    this.type="encoded";
    this.savedInput= '';
    this.KeyValue=value;
    for (let i = 0; i < value.length; i++){
      let c=value.charCodeAt(i)-65
      let d=this.KeyValue.charCodeAt(i)-65
      
      this.savedInput+=this.nestedArray[c][d]
    }
    console.log(this.savedInput);
    }     
  decode(value:string):void{
    this.type="decoded";
    this.savedInput= '';
    let temp : number;
    for (let i = 0; i < value.length; i++){
      temp=0
      let d=this.KeyValue.charCodeAt(i)-65
      for (let j = 0; j < this.nestedArray[d].length; j++){
        if(this.nestedArray[d][j]==value[i]){
          temp=j
          this.savedInput += String.fromCharCode(temp+65)
          break
        }
      }
      
    }
    console.log(this.savedInput);
      }


  }

