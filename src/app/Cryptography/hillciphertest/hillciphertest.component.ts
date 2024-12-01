import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-hillciphertest',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './hillciphertest.component.html',
  styleUrl: './hillciphertest.component.css'
})
export class HillciphertestComponent {

  savedInput: string = ''; // Variable to store the saved input
  type:string="";
  temp:string="";

  encode(value:string):void{
    this.type="encoded";
    this.savedInput= '';
let matrix = [[6,24,1],[13,16,10],[20,17,15]];
//[[2,0,0],[0,2,0],[0,0,2]]
var c=value.length%3;
let result: number []=[];
if(c!=0){
  value=value+("X".repeat(3-c))
}
this.temp=value
for(let j=0;j<value.length;j=j+3){
for (let i=0;i<matrix.length;i++){
  //3×1+2×4+5×7=3+8+35=46
  c=(((value.charCodeAt(0+j))*matrix[0][i])+((value.charCodeAt(1+j))*matrix[1][i])+((value.charCodeAt(2+j))*matrix[2][i]))
  this.savedInput=this.savedInput+String.fromCharCode(c)
 // result.push(c)
}}
// Perform matrix multiplication


    
    console.log(this.savedInput);
    }
  decode(value:string):void{
    this.type="decoded";
    this.savedInput= '';
    let matrix = [[70/441,-343/441,224/441],[5/441,70/441,-47/441],[-99/441,378/441,-216/441]]
    //[[0.5,0,0],[0,0.5,0],[0,0,0.5]]
    var c=value.length%3;
    let result: number []=[];
    if(c!=0){
      value=value+("X".repeat(3-c))
    }
    this.temp=value
    for(let j=0;j<value.length;j=j+3){
    for (let i=0;i<matrix.length;i++){
      //3×1+2×4+5×7=3+8+35=46
      c=(((value.charCodeAt(0+j))*matrix[0][i])+((value.charCodeAt(1+j))*matrix[1][i])+((value.charCodeAt(2+j))*matrix[2][i]))
      this.savedInput=this.savedInput+String.fromCharCode(c)
     // result.push(c)
    }}
    // Perform matrix multiplication
    
    
        
        console.log(this.savedInput);
        }
}