import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-one-time-pad-cipher',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './one-time-pad-cipher.component.html',
  styleUrl: './one-time-pad-cipher.component.css'
})
export class OneTimePadCipherComponent {


  type:string="";
  KeyValue:any="";
  decimal:string="";


    binaryString: string = ''; // Variable to hold the binary result

    // Method to convert string to binary
    convertStringToBinary(input: string): string {
      return input
        .split('')
        .map((char) => {
          const binary = char.charCodeAt(0).toString(2);
          return binary.padStart(8, '0'); // Ensure it's 8 bits by padding
        })
        .join(' ');
    }
    // Method triggered when user clicks the button
    encode(input: string): void {
      this.type="encoded";
    this.KeyValue='';
    
    for (let i=input.length-1; i>=0; i--) {
      this.KeyValue=this.KeyValue+input[i];

    }
    if (input[4]=='0'||input[4]=='1') {
      this.binaryString = input;
    }else{
    this.binaryString = this.convertStringToBinary(input);
    this.KeyValue=this.convertStringToBinary(this.KeyValue);
    }

    let xorResult = '';

    // Iterate over both strings and perform XOR on each pair of bits
    for (let i = 0; i < this.binaryString.length; i++) {
      const bit1 = this.binaryString[i];
      const bit2 = this.KeyValue[i];
      const xorBit = (bit1 === bit2) ? '0' : '1'; // XOR logic
      xorResult += xorBit;
    }


    let asciiString = '';

    // Process each 8-bit segment of the binary string
    for (let i = 0; i < xorResult.length; i += 9) {
      const byte = xorResult.slice(i, i + 8);   // Extract 8 bits

      const asciiCode = parseInt(byte, 2); // Convert binary to decimal

      asciiString += String.fromCharCode(asciiCode);    // Convert decimal to character
    }
    this.binaryString=this.convertStringToBinary(asciiString);
    this.decimal=asciiString;
    console.log(asciiString);
      
    }

    decode(input: string): void {
      this.type="decoded";
    
    if (input[4]=='0'||input[4]=='1') {
      this.binaryString = input;
    }else{
    this.binaryString = this.convertStringToBinary(input);
    }

    let xorResult = '';

    // Iterate over both strings and perform XOR on each pair of bits
    for (let i = 0; i < this.binaryString.length; i++) {
      const bit1 = this.binaryString[i];
      const bit2 = this.KeyValue[i];
      const xorBit = (bit1 === bit2) ? '0' : '1'; // XOR logic
      xorResult += xorBit;
    }


    let asciiString = '';

    // Process each 8-bit segment of the binary string
    for (let i = 0; i < xorResult.length; i += 9) {
      const byte = xorResult.slice(i, i + 8);   // Extract 8 bits

      const asciiCode = parseInt(byte, 2); // Convert binary to decimal

      asciiString += String.fromCharCode(asciiCode);    // Convert decimal to character
    }
    this.binaryString=this.convertStringToBinary(asciiString); // Convert
    this.decimal=asciiString;
    console.log(asciiString);
      
    }


  }

