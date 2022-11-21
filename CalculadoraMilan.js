"use strict";
class Calculadora {
    constructor (){
        this.op1 = "";
        this.op2 = "";
        this.antop2 = "";
        this.aop = "";
        this.memoria = 0;
        this.estado = 0;
    }

    digitos(number){
        if (this.estado == 1){
            this.op1 = "";
            this.op2 = "";
            this.antop2 = "";
            this.aop = "";
            this.estado = 0;
        }
        if (this.aop == ""){
            this.op1 = this.op1 + number;
            this.antop2 = this.op1;
            document.getElementsByTagName("input")[0].value = this.op1;
        }else{
            this.op2 = this.op2 + number;
            this.antop2 = this.op2;
            document.getElementsByTagName("input")[0].value = this.op2;
        }
    }

    punto(){
        if (this.aop == ""){
            var x = true;
            if (this.op1 == ""){
                this.op1 = "0";
            }else{
                for (var i = 0;i<this.op1.length;i++){
                    if (this.op1[i] == "."){
                        x = false;
                    }
                }
            }
            if(x){
                this.op1 = this.op1 + ".";
                document.getElementsByTagName("input")[0].value = this.op1;
            }
        }else{
            var x = true;
            if (this.op2 == ""){
                this.op2 = "0";
            }else{
                for (var i = 0;i<this.op2.length;i++){
                    if (this.op2[i] == "."){
                        x = false;
                    }
                }
            }
            if(x){
                this.op2 = this.op2 + ".";
                document.getElementsByTagName("input")[0].value = this.op2;
            }
        }
    }

    suma(){
        if (this.aop != "" && this.op2 != ""){
            var x = eval(Number(this.op1)+this.aop+Number(this.op2));
            document.getElementsByTagName("input")[0].value = x;
            this.op1 = x;
            this.antop2 = this.op2;
            this.op2 = "";
        }
        this.antop2 = this.op1;
        this.aop = "+";
        this.estado = 0;
    }

    resta(){
        if (this.aop != "" && this.op2 != ""){
            var x = eval(Number(this.op1)+this.aop+Number(this.op2));
            document.getElementsByTagName("input")[0].value = x;
            this.op1 = x;
            this.antop2 = this.op2;
            this.op2 = "";
        }
        this.antop2 = this.op1;
        this.aop = "-";
        this.estado = 0;
    }

    multiplicacion(){
        if (this.aop != "" && this.op2 != ""){
            var x = eval(Number(this.op1)+this.aop+Number(this.op2));
            document.getElementsByTagName("input")[0].value = x;
            this.op1 = x;
            this.antop2 = this.op2;
            this.op2 = "";
        }
        this.antop2 = this.op1;
        this.aop = "*";
        this.estado = 0;
    }

    division(){
        if (this.aop != "" && this.op2 != ""){
            var x = eval(Number(this.op1)+this.aop+Number(this.op2));
            document.getElementsByTagName("input")[0].value = x;
            this.op1 = x;
            this.antop2 = this.op2;
            this.op2 = "";
        }
        this.antop2 = this.op1;
        this.aop = "/";
        this.estado = 0;
    }

    mrc(){
        if (this.estado == 1){
            this.op1 = "";
            this.op2 = "";
            this.antop2 = "";
            this.aop = "";
            this.estado = 0;
        }
        if (this.op1 == ""){
            this.op1 = this.memoria;
            this.aop = "";
            this.antop2 = this.op1;
            document.getElementsByTagName("input")[0].value = "M "+this.memoria;
        }else{
            this.op2 = this.memoria;
            this.antop2 = this.op2;
            document.getElementsByTagName("input")[0].value = "M "+this.memoria;
        }
        

    }

    mMenos(){
        if (this.aop != "" && this.op2 == ""){
            this.aop = "";
        }
        var x = this.igual();
        this.memoria = this.memoria - x;
        document.getElementsByTagName("input")[0].value = x;
        this.op1 = x;
        this.antop2 = this.op1;
        this.op2 = "";
        this.aop = "";
        this.estado = 1;
    }

    mMas(){
        if (this.aop != "" && this.op2 == ""){
            this.aop = "";
        }
        var x = this.igual();
        this.memoria = this.memoria + x;
        document.getElementsByTagName("input")[0].value = x;
        this.op1 = x;
        this.antop2 = this.op1;
        this.op2 = "";
        this.aop = "";
        this.estado = 1;
    }

    mBorrar(number){
        if (number == 0){
            document.getElementsByTagName("input")[0].value = "";
            this.op1 = "";
            this.antop2 = "";
            this.op2 = "";
            this.aop = "";
            this.estado = 0;
        }else{
            document.getElementsByTagName("input")[0].value = "";
            if (this.aop != ""){
                this.antop2 = this.op1;
                this.op2 = "";
            }else{
                this.op1 = "";
                this.antop2 = "";
                this.op2 = "";
                this.aop = "";
            }
        }
    }

    igual(){
        try {
            if(this.aop == ""){
                var x = eval(this.op1);
                document.getElementsByTagName("input")[0].value = x;
                this.op1 = x;
            }else if(this.op2 == ""){
                var x = eval(this.op1 + this.aop + this.antop2);
                document.getElementsByTagName("input")[0].value = x;
                this.op1 = x;
            } else{
                var x = eval(this.op1 + this.aop + this.op2);
                document.getElementsByTagName("input")[0].value = x;
                this.op1 = x;
                this.antop2 = this.op2;
                this.op2 = "";
            }
            this.estado = 1;
            return x;
        }
        catch(err) {
            document.getElementsByTagName("input")[0].value = "Error = " + err;
            this.op1 = "";
            this.antop2 = "";
            this.op2 = "";
            this.estado = 1;
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
            }else if(keyName == '='){
                this.igual();
            }else if(keyName == '%'){
                this.porcentaje();
            }else if(keyName == 'r'){
                this.raiz();
            }else if(keyName == 'o'){
                this.mBorrar(0);
            }else if(keyName == 'c'){
                this.mBorrar(1);
            }else if(keyName == 'm'){
                this.mrc();
            }else if(keyName == 'n'){
                this.mMas();
            }else if(keyName == 'b'){
                this.mMenos(1);
            }else if(keyName == 'p'){
                this.masmenos();
            }
          });
    }

    porcentaje(){
        if (this.aop == "+" || this.aop == "-"){
            this.op2 = Number(this.op1)*Number(this.op2)/100;
            this.op1 = eval(Number(this.op1)+this.aop+Number(this.op2));
            document.getElementsByTagName("input")[0].value = this.op1;
        }else if (this.aop == "/"){
            this.op1 = eval(Number(this.op1)+this.aop+Number(this.op2)+"*"+100);
            this.op2 = "";
            this.apo = "";
            document.getElementsByTagName("input")[0].value = this.op1;
        }else if(this.aop == "*"){
            this.op1 = eval(Number(this.op1)+this.aop+Number(this.op2)+"/"+100);
            this.op2 = "";
            this.apo = "";
            document.getElementsByTagName("input")[0].value = this.op1;
        }
        this.estado = 1;
    }

    raiz(){
        var x = document.getElementsByTagName("input")[0].value;
        if (this.op1 == x){
            this.op1 = Math.sqrt(Number(this.op1));
            document.getElementsByTagName("input")[0].value = this.op1;
        }else{
            this.op2 = Math.sqrt(Number(this.op2));
            document.getElementsByTagName("input")[0].value = this.op2;
        }
    }

    masmenos(){
        var x = document.getElementsByTagName("input")[0].value;
        if (this.op1 == x){
            this.op1 = Number(this.op1)*(-1);
            document.getElementsByTagName("input")[0].value = this.op1;
        }else{
            this.op2 = Number(this.op2)*(-1);
            document.getElementsByTagName("input")[0].value = this.op2;
            
        }
    }
}
var calculadora = new Calculadora();
calculadora.presionar();
