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
                this.mMenos();
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

"use strict";
class CalculadoraCientifica extends Calculadora{
    constructor (){
        super();
        this.pantalla = "";
        this.res = "";
        this.parentesis = 0;
        this.isShift = false;
        this.isHyp = false;
        this.isFE = false;
        this.tipo = "deg";
        this.isExp = false;
        this.lastop = "";
    }

    digitos(number){
        if (this.estado == 1){
            this.pantalla = "";
            this.res = "";
            this.op1 = "";
            this.antop2 = "";
            this.op2 = "";
            this.aop = "";
            this.lastop = "";
            this.estado = 0;
        }else if (this.estado == 2){
            this.resOperacion();
            this.pantallaOperacion();
            this.op1 = "";
            this.op2 = "";
            this.estado = 0;
        }else if(this.isExp){
            if (this.op2[this.op2.length-1] == "0" && this.op2[this.op2.length-2] == "+"){
                this.op2 = this.op2.substring(0,this.op2.length-1);
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-this.op2.length+2);
                alert(this.res);
                this.res = this.res.substring(0,this.res.length-(this.op1+"").length+5);
                alert(this.res);
                this.pantalla = this.pantalla + this.op2;
                this.res = this.res + this.op1;
                
            } 
        }
        this.pantalla = this.pantalla + Number(number);
        this.res = this.res + Number(number);
        this.op1 = this.op1 + Number(number);
        this.antop2 = this.op1;
        this.op2 = this.op2 + Number(number);
        this.aop = "";

        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    punto(){
        if (this.op2==""){
            this.op1="0.";
            this.op2="0.";
            this.pantalla = this.pantalla + "0.";
            this.res = this.res + "0.";
        }else{
            var x = true;
            for (var i = 0;i<this.op1.length;i++){
                if (this.op1[i] == "."){
                    x = false;
                }
            }
            
            if (x){
                this.op1 = this.op1 + ".";
                this.op2 = this.op2 + "."
                this.pantalla = this.pantalla + ".";
                this.res = this.res + ".";
            }
        }
        document.getElementsByTagName("input")[0].value = this.pantalla;
        this.estado = 0;
    }

    suma(){
        if (this.pantalla == ""){
            if (this.isFE){
                this.pantallaOperacion();
                this.op2 = Number(this.op2).toExponential() + "+";
                this.pantalla = this.pantalla + this.op2;
                this.res = this.res + "0+";   
            }else{
                this.pantalla = this.pantalla + "0+";
                this.res = this.res + "0+";   
            }
             
        }else{
            if (this.aop == "%"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-3);
                this.res = this.res.substring(0,this.res.length-1);
            }else if (this.aop == "**"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-2);
            }else if (this.aop != ""){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-1);
            }

            if (this.isFE){
                if (this.op2[0] != "("){
                    this.pantallaOperacion();
                    this.op2 = Number(this.op2).toExponential();
                    this.pantalla = this.pantalla + this.op2;
                }
            }

            this.pantalla = this.pantalla + "+";
            this.res = this.res + "+";

        }

        

        this.estado = 0;
        this.antop2 = this.op1;
        this.op1 = "";
        this.op2 = "";
        this.aop = "+";
        this.lastop = "+";
        this.isExp = false;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    resta(){
        if (this.pantalla == ""){
            if (this.isFE){
                this.pantallaOperacion();
                this.op2 = Number(this.op2).toExponential() + "-";
                this.pantalla = this.pantalla + this.op2;
                this.res = this.res + "0-";   
            }else{
                this.pantalla = this.pantalla + "0-";
                this.res = this.res + "0-";   
            }   
        }else{
            if (this.aop == "%"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-3);
                this.res = this.res.substring(0,this.res.length-1);
            }else if (this.aop == "**"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-2);
            }else if (this.aop != ""){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-1);
            }
            if (this.isFE){
                if (this.op2[0] != "("){
                    this.pantallaOperacion();
                    this.op2 = Number(this.op2).toExponential();
                    this.pantalla = this.pantalla + this.op2;
                }
            }

            this.pantalla = this.pantalla + "-";
            this.res = this.res + "-"; 
        }

        this.estado = 0;
        this.antop2 = this.op1;
        this.op1 = "";
        this.op2 = "";
        this.aop = "-";
        this.lastop = "-";
        this.isExp = false;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    multiplicacion(){
        if (this.pantalla == ""){
            if (this.isFE){
                this.pantallaOperacion();
                this.op2 = Number(this.op2).toExponential() + "*";
                this.pantalla = this.pantalla + this.op2;
                this.res = this.res + "0*";   
            }else{
                this.pantalla = this.pantalla + "0*";
                this.res = this.res + "0*";   
            }    
        }else{
            if (this.aop == "%"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-3);
                this.res = this.res.substring(0,this.res.length-1);
            }else if (this.aop == "**"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-2);
            }else if (this.aop != ""){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-1);
            }

            if (this.isFE){
                if (this.op2[0] != "("){
                    this.pantallaOperacion();
                    this.op2 = Number(this.op2).toExponential();
                    this.pantalla = this.pantalla + this.op2;
                }
            }

            this.pantalla = this.pantalla + "*";
            this.res = this.res + "*"; 
        }

        this.estado = 0;
        this.antop2 = this.op1;
        this.op1 = "";
        this.op2 = "";
        this.aop = "*";
        this.lastop = "*";
        this.isExp = false;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    division(){
        if (this.pantalla == ""){
            if (this.isFE){
                this.pantallaOperacion();
                this.op2 = Number(this.op2).toExponential() + "÷";
                this.pantalla = this.pantalla + this.op2;
                this.res = this.res + "0/";  
            }else{
                this.pantalla = this.pantalla + "0÷";
                this.res = this.res + "0/";   
            }   
        }else{
            if (this.aop == "%"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-3);
                this.res = this.res.substring(0,this.res.length-1);
            }else if (this.aop == "**"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-2);
            }else if (this.aop != ""){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-1);
            }

            if (this.isFE){
                if (this.op2[0] != "("){
                    this.pantallaOperacion();
                    this.op2 = Number(this.op2).toExponential();
                    this.pantalla = this.pantalla + this.op2;
                }
            }

            this.pantalla = this.pantalla + "÷";
            this.res = this.res + "/"; 
        }

        this.estado = 0;
        this.antop2 = this.op1;
        this.op1 = "";
        this.op2 = "";
        this.aop = "/";
        this.lastop = "/";
        this.isExp = false;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    elevar(){
        if (this.pantalla == ""){
            if (this.isFE){
                this.pantallaOperacion();
                this.op2 = Number(this.op2).toExponential() + "^";
                this.pantalla = this.pantalla + this.op2;
                this.res = this.res + "0**";   
            }else{
                this.pantalla = this.pantalla + "0^";
                this.res = this.res + "0**";   
            }   
        }else{
            if (this.aop == "%"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-3);
                this.res = this.res.substring(0,this.res.length-1);
            }else if (this.aop == "**"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-2);
            }else if (this.aop != ""){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-1);
            }
            if (this.isFE){
                if (this.op2[0] != "("){
                    this.pantallaOperacion();
                    this.op2 = Number(this.op2).toExponential();
                    this.pantalla = this.pantalla + this.op2;
                }
            }

            this.pantalla = this.pantalla + "^";
            this.res = this.res + "**"; 
        }

        this.estado = 0;
        this.antop2 = this.op1;
        this.op1 = "";
        this.op2 = "";
        this.aop = "**";
        this.lastop = "**";
        this.isExp = false;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    mod(){
        if (this.pantalla == ""){
            if (this.isFE){
                this.pantallaOperacion();
                this.op2 = Number(this.op2).toExponential() + "mod";
                this.pantalla = this.pantalla + this.op2;
                this.res = this.res + "0%";   
            }else{
                this.pantalla = this.pantalla + "0mod";
                this.res = this.res + "0%";
            }    
        }else{
            if (this.aop == "%"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-3);
                this.res = this.res.substring(0,this.res.length-1);
            }else if (this.aop == "**"){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-2);
            }else if (this.aop != ""){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-1);
            }

            if (this.isFE){
                if (this.op2[0] != "("){
                    this.pantallaOperacion();
                    this.op2 = Number(this.op2).toExponential();
                    this.pantalla = this.pantalla + this.op2;
                }
            }

            this.pantalla = this.pantalla + "mod";
            this.res = this.res + "%"; 
        }


        this.estado = 0;
        this.antop2 = this.op1;
        this.op1 = "";
        this.op2 = "";
        this.aop = "%";
        this.lastop = "%";
        this.isExp = false;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    fpi(){
        this.pantallaOperacion();
        this.resOperacion();
        this.antop2 = this.op1;
        this.op1 = Math.PI;
        this.op2 = Math.PI;
        this.pantalla = this.pantalla + this.op2;
        this.res = this.res + this.op1;

        this.estado = 2;

        document.getElementsByTagName("input")[0].value = this.pantalla
    }

    exp(){
        if (!this.isExp){
            if (this.op1[0]!="("){
                this.isExp = true;
                this.op1 = this.op1 + "*10**";
                this.op2 = this.op2 + "e+0"
                document.getElementsByTagName("input")[0].value = this.pantalla + "e+0";
            }
        }
    }

    raiz(){
        this.resOperacion();
        this.pantallaOperacion();

        if (this.op2[0] == "("){
            this.op2 = "√" + this.op2 + "";
            this.pantalla = this.pantalla + this.op2;
        }else{
            this.op2 = "√(" + this.op2 + ")";
            this.pantalla = this.pantalla + this.op2;
        }

        this.op1 = Math.sqrt(Number(this.op1));
        this.antop2 = this.op1;
        this.res = this.res + this.op1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    factorial(){
        this.resOperacion();
        this.pantallaOperacion();

        if (this.op2[0] == "("){
            this.op2 = "fact" + this.op2 + "";
            this.pantalla = this.pantalla + this.op2;
        }else{
            this.op2 = "fact(" + this.op2 + ")";
            this.pantalla = this.pantalla + this.op2;
        }
        
        var a = Number(eval(this.op1));

        var total = 1; 
        for (var i=1; i<=a; i++) {
            total = total * i; 
        }

        this.op1 = total;
        this.antop2 = this.op1;
        this.res = this.res + this.op1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    abreParentesis(){
        if (this.isExp){
            this.resOperacion();
            this.pantallaOperacion();
        }
        this.aop = "";
        
        this.pantalla = this.pantalla + "(";
        this.res = this.res + "(";
        this.op1 = "";
        this.op2 = "";
        this.parentesis = this.parentesis+1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    cierraParentesis(){
        if(this.parentesis >0){
            this.aop = "";
            if (this.isFE){
                this.pantallaOperacion();
                this.op2 = Number(this.op2).toExponential();
                this.pantalla = this.pantalla + this.op2;
            }
            this.pantalla = this.pantalla + ")";
            this.res = this.res+")";
            this.op1 = "";
            this.op2 = "";
            this.pantallaCierraParentesis();
            this.resCierraParentesis();
            this.parentesis = this.parentesis-1;
            document.getElementsByTagName("input")[0].value = this.pantalla;
            
        }
    }

    pantallaCierraParentesis(){
        var pl = this.pantalla.length;
        var lb = 0;
        var p = 0;
        for (var i = pl;i>=0;i--){
            if(this.pantalla[i] == ")"){
                p++;
            }else if (this.pantalla[i] == "("){
                p--;
                if (p == 0){
                    break;
                }
            }
            lb++;
        }

        this.op2 = this.pantalla.substring(this.pantalla.length-lb,this.pantalla.length);
    }

    resCierraParentesis(){
        var pl = this.res.length;
        var lb = 0;
        for (var i = pl;i>=0;i--){
            if (this.res[i] == "("){
                break;
            }
            lb++;
        }

        this.op1 = this.res.substring(this.res.length-lb,this.res.length);
        this.res = this.res.substring(0,this.res.length-lb);

        this.op1 = eval(this.op1);
        this.res = this.res + this.op1;
    }
    
    logaritmo(){
        this.resOperacion();
        this.pantallaOperacion();

        if (this.op2[0] == "("){
            this.op2 = "log" + this.op2 + "";
            this.pantalla = this.pantalla + this.op2;
        }else{
            this.op2 = "log(" + this.op2 + ")";
            this.pantalla = this.pantalla + this.op2;
        }
        

        this.op1 = Math.log10(Number(this.op1));
        this.antop2 = this.op1;
        this.res = this.res + this.op1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    pantallaOperacion(){
        var l = (this.op2+"").length;
        this.pantalla = this.pantalla.substring(0,this.pantalla.length-l);
    }

    resOperacion(){
        var l = (this.op1+"").length;
        this.res = this.res.substring(0,this.res.length-l);
    }

    cuadrado(){
        this.resOperacion();
        this.pantallaOperacion();

        if (this.op2[0] == "("){
            this.op2 = "sqr" + this.op2 + "";
            this.pantalla = this.pantalla + this.op2;
        }else{
            this.op2 = "sqr(" + this.op2 + ")";
            this.pantalla = this.pantalla + this.op2;
        }

        this.op1 = Math.pow(Number(this.op1),2);
        this.antop2 = this.op1;
        this.res = this.res + this.op1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

   
    diezElevado(){
        this.resOperacion();
        this.pantallaOperacion();

        if (this.op2[0] == "("){
            this.op2 = "10^" + this.op2 + "";
            this.pantalla = this.pantalla + this.op2;
        }else{
            this.op2 = "10^(" + this.op2 + ")";
            this.pantalla = this.pantalla + this.op2;
        }

        this.op1 = Math.pow(10,Number(this.op1));
        this.antop2 = this.op1;
        this.res = this.res + this.op1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    seno(){
        this.resOperacion();
        this.pantallaOperacion();

        if (!this.isShift){
            if(!this.isHyp){
                if (this.op2[0] == "("){
                    this.op2 = "sin" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "sin(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                if (this.tipo == "deg"){
                    this.op1 = Math.sin(Number(this.op1)*Math.PI/180);
                }else if(this.tipo == "grad"){
                    this.op1 = Math.sin(Number(this.op1)*Math.PI/200);
                }else{
                    this.op1 = Math.sin(Number(this.op1));
                }
                
                this.res = this.res + this.op1;
            }else{
                if (this.op2[0] == "("){
                    this.op2 = "asinh" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "asinh(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                this.op1 = Math.asinh(Number(this.op1));
                this.res = this.res + this.op1;
            }
        }else{
            if(!this.isHyp){
                if (this.op2[0] == "("){
                    this.op2 = "asin" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "asin(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                if (this.tipo == "deg"){
                    this.op1 = Math.asin(Number(this.op1))*180/Math.PI;
                }else if(this.tipo == "grad"){
                    this.op1 = Math.asin(Number(this.op1))*200/Math.PI;
                }else{
                    this.op1 = Math.asin(Number(this.op1));
                }
                this.res = this.res + this.op1;
            }else{
                if (this.op2[0] == "("){
                    this.op2 = "sinh" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "sinh(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                this.op1 = Math.sinh(Number(this.op1));
                this.res = this.res + this.op1; 
            }
            
        }

        this.antop2 = this.op1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    coseno(){
        this.resOperacion();
        this.pantallaOperacion();

        if (!this.isShift){
            if(!this.isHyp){
                if (this.op2[0] == "("){
                    this.op2 = "cos" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "cos(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                if (this.tipo == "deg"){
                    this.op1 = Math.cos(Number(this.op1)*Math.PI/180);
                }else if(this.tipo == "grad"){
                    this.op1 = Math.cos(Number(this.op1)*Math.PI/200);
                }else{
                    this.op1 = Math.cos(Number(this.op1));
                }
                this.res = this.res + this.op1;
            }else{
                if (this.op2[0] == "("){
                    this.op2 = "acosh" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "acosh(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                this.op1 = Math.acosh(Number(this.op1));
                this.res = this.res + this.op1;
            }
        }else{
            if(!this.isHyp){
                if (this.op2[0] == "("){
                    this.op2 = "acos" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "acos(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                if (this.tipo == "deg"){
                    this.op1 = Math.acos(Number(this.op1))*180/Math.PI;
                }else if(this.tipo == "grad"){
                    this.op1 = Math.acos(Number(this.op1))*200/Math.PI;
                }else{
                    this.op1 = Math.acos(Number(this.op1));
                }
                this.res = this.res + this.op1;
            }else{
                if (this.op2[0] == "("){
                    this.op2 = "cosh" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "cosh(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                this.op1 = Math.cosh(Number(this.op1));
                this.res = this.res + this.op1; 
            }
            
        }
        this.antop2 = this.op1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    tangente(){
        this.resOperacion();
        this.pantallaOperacion();

        if (!this.isShift){
            if(!this.isHyp){
                if (this.op2[0] == "("){
                    this.op2 = "tan" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "tan(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                if (this.tipo == "deg"){
                    this.op1 = Math.tan(Number(this.op1)*Math.PI/180);
                }else if(this.tipo == "grad"){
                    this.op1 = Math.tan(Number(this.op1)*Math.PI/200);
                }else{
                    this.op1 = Math.tan(Number(this.op1));
                }
                this.res = this.res + this.op1;
            }else{
                if (this.op2[0] == "("){
                    this.op2 = "atanh" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "atanh(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                this.op1 = Math.atanh(Number(this.op1));
                this.res = this.res + this.op1;
            }
        }else{
            if(!this.isHyp){
                if (this.op2[0] == "("){
                    this.op2 = "atan" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "atan(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                if (this.tipo == "deg"){
                    this.op1 = Math.atan(Number(this.op1))*180/Math.PI;
                }else if(this.tipo == "grad"){
                    this.op1 = Math.atan(Number(this.op1))*200/Math.PI;
                }else{
                    this.op1 = Math.atan(Number(this.op1));
                }
                this.res = this.res + this.op1;
            }else{
                if (this.op2[0] == "("){
                    this.op2 = "tanh" + this.op2 + "";
                    this.pantalla = this.pantalla + this.op2;
                }else{
                    this.op2 = "tanh(" + this.op2 + ")";
                    this.pantalla = this.pantalla + this.op2;
                }
                this.op1 = Math.tanh(Number(this.op1));
                this.res = this.res + this.op1; 
            }
            
        }
        this.antop2 = this.op1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    ms(){
        this.memoria = Number(eval(this.op1));
    }

    mr(){
        this.resOperacion();
        this.pantallaOperacion();

        this.res = this.res + this.memoria;
        this.pantalla = this.pantalla + this.memoria;
        this.op1 = this.memoria;
        this.antop2 = this.op1;
        this.op2 = this.memoria;

        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    mc(){
        this.memoria = 0;       
    }

    mMenos(){
        this.memoria = this.memoria - Number(eval(this.op1));
    }

    mMas(){
        this.memoria = this.memoria + Number(eval(this.op1));
    }

    deg(){
        if (this.tipo == "deg"){
            this.tipo = "rad";
            document.getElementsByTagName("input")[1].value = "RAD";
        }else if(this.tipo == "rad"){
            this.tipo = "grad";
            document.getElementsByTagName("input")[1].value = "GRAD";
        }else{
            this.tipo = "deg";
            document.getElementsByTagName("input")[1].value = "DEG";
        }
    }

    hyp(){
        if (!this.isHyp){
            this.isHyp = true;
        }else{
            this.isHyp = false;
        }
        this.shift();
    }

    fe(){
        if (!this.isFE){
            this.isFE = true;
        }else{
            this.isFE = false;
        }

    }

    shift(){
        if (!this.isShift){
            if (!this.isHyp){
                document.getElementsByTagName("input")[11].value = "asin";
                document.getElementsByTagName("input")[12].value = "acos";
                document.getElementsByTagName("input")[13].value = "atan";
            }else{
                document.getElementsByTagName("input")[11].value = "sinh";
                document.getElementsByTagName("input")[12].value = "cosh";
                document.getElementsByTagName("input")[13].value = "tanh";
            }
            this.isShift = true;
        }else{
            if (!this.isHyp){
                document.getElementsByTagName("input")[11].value = "sin";
                document.getElementsByTagName("input")[12].value = "cos";
                document.getElementsByTagName("input")[13].value = "tan";
            }else{
                document.getElementsByTagName("input")[11].value = "asinh";
                document.getElementsByTagName("input")[12].value = "acosh";
                document.getElementsByTagName("input")[13].value = "atanh";
            }
            this.isShift = false;
        }
        
    }


    igual(){
        try { 
            if (this.pantalla == this.res && this.aop == "" && this.lastop!="" && this.op1 == this.res){
                this.pantalla = eval(this.res+this.lastop+this.antop2)+"";
            }else if(this.aop != "" && this.op1 == ""){
                this.pantalla = eval(this.res+this.antop2)+"";
            }else{
                this.pantalla = eval(this.res)+"";
            }
            
            this.res = this.pantalla;
            this.op1 = this.pantalla;
            this.op2 = this.pantalla;
            this.isExp = false;
            this.aop = "";
            if (this.isFE){
                this.op2 = Number(this.op2).toExponential();
                this.pantalla = this.op2;
            }
            this.estado = 1;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
        catch(err) {
            document.getElementsByTagName("input")[0].value = "Error = " + err;
            this.pantalla ="";
            this.res = "";
            this.op1 = "";
            this.op2 = "";
            this.estado = 0;
        }
    }

    mBorrar(number){
        if (number == 0){
            this.pantalla ="";
            this.res = "";
            this.op1 = "";
            this.antop2 = "";
            this.op2 = "";
            this.aop = "";
            this.lastop = "";
            this.estado = 0;
            this.isExp = false;
        }else if(number == 1){
            this.pantallaOperacion();
            this.resOperacion();
            this.op1 = "";
            this.antop2 = "";
            this.op2 = "";
            this.estado = 0;
            this.isExp = false;
        }else if(number == 2){
            var a = this.pantalla[(this.pantalla+"").length-1];
            if (a == "1" || a == "2" ||a == "3" ||a == "4" ||a == "5" ||a == "6" ||
            a == "7" ||a == "8" ||a == "9" ||a == "0" ||a == "."){
                this.pantalla = this.pantalla.substring(0,this.pantalla.length-1);
                this.res = this.res.substring(0,this.res.length-1);
                this.op1 = this.op1.substring(0,this.op1.length-1);
                this.antop2 = this.op1;
                this.op2 = this.op2.substring(0,this.op2.length-1);
            }
            
        }
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    borrarHastaOperadorPantalla(){
        var pl = this.pantalla.length-1;
        var lb = 0;
        for (var i = pl;i>=0;i--){
            if (this.pantalla[i] == "+" ||
            this.pantalla[i] == "-" ||
            this.pantalla[i] == "*" ||
            this.pantalla[i-1] == "^" ||
            this.pantalla[i-1] == "m" ||this.pantalla[i-1] == "o" ||this.pantalla[i-1] == "d" ||
            this.pantalla[i] == "/"){
                if ((i-1)>=0){
                    if (!(this.pantalla[i] == "-" && (this.pantalla[i-1] == "-" || 
                    this.pantalla[i-1] == "+" ||
                    this.pantalla[i-1] == "/" ||
                    this.pantalla[i-1] == "^" ||
                    this.pantalla[i-1] == "m" ||this.pantalla[i-1] == "o" ||this.pantalla[i-1] == "d" ||
                    this.pantalla[i-1] == "*"))){
                        break;
                    }
                }
            }
            lb++;
        }
        return lb;
    }

    borrarHastaOperadorOperaciones(){
        var pl = this.operaciones.length-1;
        var lb = 0;
        for (var i = pl;i>=0;i--){
            if (this.operaciones[i] == "+" ||
            this.operaciones[i] == "-" ||
            this.operaciones[i] == "*" ||
            this.operaciones[i-1] == "%" ||
            this.operaciones[i] == "/"){
                if ((i-1)>=0){
                    if (!(this.operaciones[i] == "-" && (this.operaciones[i-1] == "-" || 
                    this.operaciones[i-1] == "+" ||
                    this.operaciones[i-1] == "/" ||
                    this.operaciones[i-1] == "%" ||
                    this.operaciones[i-1] == "*"))){
                        break;
                    }
                }
            }
            lb++;
        }
        return lb;
    }

    recorrerPantalla(){
        var pl = this.pantalla.length-1;
        var lb = 0;
        var parentesisn = 0;
        for (var i = pl;i>=0;i--){
            if (this.pantalla[i] == ")"){
                parentesisn++;
            }else if (this.pantalla[i] == "("){
                parentesisn--;
            }
            lb++;
            if (parentesisn==0){
                break;
            }
        }
        return lb;
    }

    recorrerOperaciones(){
        var pl = this.operaciones.length-1;
        var lb = 0;
        var parentesisn = 0;
        for (var i = pl;i>=0;i--){
            if (this.operaciones[i] == ")"){
                parentesisn++;
            }else if (this.operaciones[i] == "("){
                parentesisn--;
            }
            lb++;
            if (parentesisn==0){
                break;
            }
        }
        return lb;
    }

    masmenos(){
        this.resOperacion();
        this.pantallaOperacion();

        if (this.op2[0] == "("){
            this.op2 = "negate" + this.op2 + "";
            this.pantalla = this.pantalla + this.op2;
        }else{
            this.op2 = "negate(" + this.op2 + ")";
            this.pantalla = this.pantalla + this.op2;
        }

        this.op1 = this.op1*-1;
        this.antop2 = this.op1;
        this.res = this.res + this.op1;
        document.getElementsByTagName("input")[0].value = this.pantalla;
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
                this.mc();
            }else if(keyName == 'n'){
                this.mMas();
            }else if(keyName == 'b'){
                this.mMenos();
            }else if(keyName == 'p'){
                this.masmenos();
            }else if(keyName == 'l'){
                this.logaritmo();
            }else if(keyName == '^'){
                this.elevar();
            }else if(keyName == 'e'){
                this.exp();
            }else if(keyName == 'k'){
                this.cuadrado();
            }else if(keyName == 'j'){
                this.diezElevado();
            }else if(keyName == '('){
                this.abreParentesis();
            }else if(keyName == ')'){
                this.cierraParentesis();
            }else if(keyName == 'v'){
                this.mr();
            }else if(keyName == 'f'){
                this.ms();
            }else if(keyName == 'a'){
                this.seno();
            }else if(keyName == 's'){
                this.coseno();
            }else if(keyName == 'd'){
                this.tangente();
            }else if(keyName == 'g'){
                this.exp();
            }else if(keyName == 'Shift'){
                this.shift();
            }else if(keyName == 'u'){
                this.fpi();
            }else if(keyName == 'y'){
                this.factorial();
            }else if(keyName == 'Backspace'){
                this.mBorrar(2);
            }
          });
    }
}

var calculadora = new CalculadoraCientifica();
calculadora.presionar();