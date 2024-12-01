import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-hill-cipher',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './hill-cipher.component.html',
  styleUrl: './hill-cipher.component.css'
})
export class HillCipherComponent {

  savedInput: string = ''; // Variable to store the saved input
  type:string="";
  temp:string="";

  encode(value:string):void{
    this.type="encoded";
    this.savedInput= '';
let matrix = [[2,3],[1,4]];
var c=value.length%2;
let result: number []=[];
if(c!=0){
  value=value+("X".repeat(2-c))
}
this.temp=value
for(let j=0;j<value.length;j=j+2){
for (let i=0;i<matrix.length;i++){
  //3×1+2×4+5×7=3+8+35=46
  c=(((value.charCodeAt(0+j))*matrix[0][i])+((value.charCodeAt(1+j))*matrix[1][i]))
  this.savedInput=this.savedInput+String.fromCharCode(c)
 // result.push(c)
}}
// Perform matrix multiplication


    
    console.log(this.savedInput);
    }
  decode(value:string):void{
    this.type="decoded";
    this.savedInput= '';
    let matrix = [[0.8,-0.6],[-0.2,0.4]];
    var c=value.length%2;
    let result: number []=[];
    if(c!=0){
      value=value+("X".repeat(2-c))
    }
    this.temp=value
    for(let j=0;j<value.length;j=j+2){
    for (let i=0;i<matrix.length;i++){
      //3×1+2×4+5×7=3+8+35=46
      c=(((value.charCodeAt(0+j))*matrix[0][i])+((value.charCodeAt(1+j))*matrix[1][i]))
      this.savedInput=this.savedInput+String.fromCharCode(c)
     // result.push(c)
    }}
    // Perform matrix multiplication
    
    
        
        console.log(this.savedInput);
        }
    }