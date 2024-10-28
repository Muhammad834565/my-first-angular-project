import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-play-fair-square-cipher',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './play-fair-square-cipher.component.html',
  styleUrl: './play-fair-square-cipher.component.css'
})
export class PlayFairSquareCipherComponent {
  Cipher_key: string[][] = [
    ['M','O','N','A','R'],
    ['C','H','Y','B','D'],
    ['E','F','G','I','K'],
    ['L','P','Q','S','T'],
    ['U','V','W','X','Z']];

  savedInput: string = ''; // Variable to store the saved input
  type:string="";
  temp:string="";

  encode(value:string):void{
    this.type="encoded";
    this.savedInput= '';
    this.temp='';
    let ch='';
    let chi='';
    //for repeated letter
    for (let i = 0; i < value.length; i+=2){
      ch=value[i]; chi=value[i+1];
      if (ch=='J'){
        ch='I';
      }
      if (chi=='J'){
        chi='I';
      }
      if (ch===chi){
        this.temp+= ch+'X';
        i--;
      }else if (chi!==undefined){
        this.temp+= ch+chi;
      }else{
        this.temp+=ch;
      }
      if(this.temp.length%2!=0){
        this.temp+='X';
      }
    }
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    var e=0;
    for (let i = 0; i < this.temp.length; i+=2){
      for (let j = 0; j < 5; j++){
        for(let k = 0; k < 5; k++){
          if(this.temp[i]==this.Cipher_key[j][k]){
            a=j;
            b=k;
          }
          if(this.temp[i+1]==this.Cipher_key[j][k]){
            c=j;
            d=k;
          }
      }
      }
      if(a==c){
        b=(b+1)%5 ;
        d=(d+1)%5 ;
      }
      else if(b==d){
        a=(a+1)%5 ;
        c=(c+1)%5 ;
      }
      else{
        e=b;
        b=d;
        d=e;
      }
      this.savedInput+=this.Cipher_key[a][b]+this.Cipher_key[c][d];

    }
    console.log(this.savedInput);


    }




  decode(value:string):void{
    this.type="decoded";
    this.savedInput= '';
    this.temp='';
    //for repeated letter
    for (let i = 0; i < value.length; i+=2){
      if (value[i]===value[i+1]){
        this.temp+= value[i]+'X';
        i--;
      }else if (value[i+1]!==undefined){
        this.temp+= value[i]+value[i+1];
      }else{
        this.temp+= value[i];
      }
      if(this.temp.length%2!=0){
        this.temp+='X';
      }
    }
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    var e=0;
    for (let i = 0; i < this.temp.length; i+=2){
      for (let j = 0; j < 5; j++){
        for(let k = 0; k < 5; k++){
          if(this.temp[i]==this.Cipher_key[j][k]){
            a=j;
            b=k;
          }
          if(this.temp[i+1]==this.Cipher_key[j][k]){
            c=j;
            d=k;
          }
      }
      }
      if(a==c){
        b=(b-1) ;
        d=(d-1) ;
      }
      else if(b==d){
        a=(a-1) ;
        c=(c-1) ;
      }
      else{
        e=b;
        b=d;
        d=e;
      }
      if(a==-1)a=a+5;
      if(b==-1)b=b+5;
      if(c==-1)c=c+5;
      if(d==-1)d=d+5;
      this.savedInput+=this.Cipher_key[a][b]+this.Cipher_key[c][d];

    }


 console.log(this.savedInput);   
}
}
