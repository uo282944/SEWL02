"use strict";
class CalculadoraRPN {
    constructor (){
        this.pila = new Array();
        this.numero = "";
        this.size = 0;
    }

    apilar(valor){
        this.pila.push(valor);
        this.size++;
        document.getElementsByTagName("textarea")[0].textContent = this.escribirPila();
    }

    desapilar(){
        this.size--;
        return this.pila.pop();
    }

    digitos(number){
        this.numero = this.numero + number;
    }

    punto(){
        var x = true;
        if (this.numero == ""){
            this.numero = "0";
        }else{
            for (var i = 0;i<this.numero.length;i++){
                if (this.numero[i] == "."){
                    x = false;
                }
            }
        }
        if (x){
            this.numero = this.numero + ".";
        }
        
    }

    enter(){
        this.apilar(Number(this.numero));
        this.numero = "";
    }

    suma(){
        if (this.size>1){
            this.apilar(Number(this.desapilar())+Number(this.desapilar()));
        }
    }

    resta(){
        if (this.size>1){
            var x = this.desapilar();
            var y = this.desapilar();
            this.apilar(Number(y)-Number(x));
        }
    }

    multiplicacion(){
        if (this.size>1){
            this.apilar(Number(this.desapilar())*Number(this.desapilar()));
        }
    }

    division(){
        if (this.size>1){
            var x = this.desapilar();
            var y = this.desapilar();
            this.apilar(Number(y)/Number(x));
        }
    }

    raiz(){
        var x = this.desapilar();
        this.apilar(Math.sqrt(Number(x)));
    }

    escribirPila(){
        var cadena = "";
        var i = this.size;
        while (i >=1){
            cadena = cadena + "\n" + this.pila[i-1];
            
            i--;
        }
        return cadena.substring(1,cadena.length);
    }
   
    mBorrar(){
        while (this.size != 0){
            this.desapilar();
        }
        document.getElementsByTagName("textarea")[0].textContent = "";
        this.numero = "";
    }

    seno(){
        if (this.size > 0){
            this.apilar(Math.sin(this.desapilar()));
        }
    }

    coseno(){
        if (this.size > 0){
            this.apilar(Math.cos(Number(this.desapilar())));
        }
    }
    tangente(){
        if (this.size > 0){
            this.apilar(Math.tan(Number(this.desapilar())));
        }
    }

    arcseno(){
        if (this.size > 0){
            this.apilar(Math.asin(Number(this.desapilar())));
        }
    }

    arccoseno(){
        if (this.size > 0){
            this.apilar(Math.acos(Number(this.desapilar())));
        }
    }
    arctangente(){
        if (this.size > 0){
            this.apilar(Math.atan(Number(this.desapilar())));
        }
    }
    
    presionar(){
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName == '1' || keyName == '2' ||keyName == '3' ||keyName == '4' 
            ||keyName == '5' ||keyName == '6' ||keyName == '7' ||keyName == '8' ||keyName == '9' ||keyName == '0'){
                this.digitos(Number(keyName));
            }else if(keyName == '.'){
                this.punto();
            }else if(keyName == '+'){
                this.suma();
            }else if(keyName == '-'){
                this.resta();
            }else if(keyName == '/'){
                this.division();
            }else if(keyName == '*'){
                this.multiplicacion();
            }else if(keyName == 'e'){
                this.enter();
            }else if(keyName == 's'){
                this.seno();
            }else if(keyName == 'c'){
                this.coseno();
            }else if(keyName == 't'){
                this.tangente();
            }else if(keyName == 'x'){
                this.arcseno();
            }else if(keyName == 'g'){
                this.arctangente();
            }else if(keyName == 'v'){
                this.arccoseno();
            }else if(keyName == 'o'){
                this.mBorrar();
            }
          });
    }
}
var calculadora = new CalculadoraRPN();
calculadora.presionar();

