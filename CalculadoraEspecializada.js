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
        document.getElementsByTagName("textarea")[0].value = this.escribirPila();
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
        document.getElementsByTagName("textarea")[0].value = "";
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

"use strict";
class CalculadoraRPNExtendida extends CalculadoraRPN{
    constructor (){
        super();
        this.pilauds = new Array();
        this.ud = "m";
        this.uddes = "m";
    }
    escribirUnidad(){
        document.getElementsByTagName("input")[0].value = this.ud;
    }
    escribirPila(){
        var cadena = "";
        var i = this.size;
        while (i >=1){
            cadena = cadena + "\n" + this.pila[i-1]+ " " + this.pilauds[i-1];
            
            i--;
        }
        return cadena.substring(1,cadena.length);
    }

    desapilar(){
        this.uddes = this.pilauds.pop();
        return super.desapilar();
    }

    apilar(valor){
        this.pilauds.push(this.ud);
        super.apilar(valor);
    }

    suma(){
        if (this.size>1){
            var antgud = this.ud;
            var op1 = Number(this.desapilar());
            var unidad = this.uddes;
            var op2 = Number(this.desapilar());
            if (unidad != this.uddes){
                
                this.numero = op1;
                this.ud = unidad;
                this.metros();
                op1 = this.numero;
                
                this.numero = op2;
                this.ud = this.uddes;
                this.metros();
                op2 = this.numero;
                this.apilar(Number(op1)+Number(op2));
                
            }else{
                this.ud = unidad;
                this.apilar(Number(op1)+Number(op2));
            }
            this.ud = antgud;
            this.numero = "";
            this.escribirUnidad();
        }
    }

    resta(){
        if (this.size>1){
            var antgud = this.ud;
            var op1 = Number(this.desapilar());
            var unidad = this.uddes;
            var op2 = Number(this.desapilar());
            if (unidad != this.uddes){
                
                this.numero = op1;
                this.ud = unidad;
                this.metros();
                op1 = this.numero;
                
                this.numero = op2;
                this.ud = this.uddes;
                this.metros();
                op2 = this.numero;
                this.apilar(Number(op2)-Number(op1));
                
            }else{
                this.ud = unidad;
                this.apilar(Number(op2)-Number(op1));
            }
            this.ud = antgud;
            this.numero = "";
            this.escribirUnidad();
        }
    }

    multiplicacion(){
        if (this.size>1){
            var antgud = this.ud;
            var op1 = Number(this.desapilar());
            var unidad = this.uddes;
            var op2 = Number(this.desapilar());
            if (unidad != this.uddes){
                
                this.numero = op1;
                this.ud = unidad;
                this.metros();
                op1 = this.numero;
                
                this.numero = op2;
                this.ud = this.uddes;
                this.metros();
                op2 = this.numero;
                this.apilar(Number(op2)*Number(op1));
                
            }else{
                this.ud = unidad;
                this.apilar(Number(op2)*Number(op1));
            }
            this.ud = antgud;
            this.numero = "";
            this.escribirUnidad();
        }
    }

    division(){
        if (this.size>1){
            var antgud = this.ud;
            var op1 = Number(this.desapilar());
            var unidad = this.uddes;
            var op2 = Number(this.desapilar());
            if (unidad != this.uddes){
                
                this.numero = op1;
                this.ud = unidad;
                this.metros();
                op1 = this.numero;
                
                this.numero = op2;
                this.ud = this.uddes;
                this.metros();
                op2 = this.numero;
                this.apilar(Number(op2)/Number(op1));
                
            }else{
                this.ud = unidad;
                this.apilar(Number(op2)/Number(op1));
            }
            this.ud = antgud;
            this.numero = "";
            this.escribirUnidad();
        }
    }

    raiz(){
        if (this.size>0){
            var antud = this.ud;
            this.numero = this.desapilar();
            if (this.numero >= 0){
                this.ud = this.uddes;
                this.numero = Math.sqrt(Number(this.numero));
                this.apilar(this.numero);
                this.ud = antud;
                this.numero = "";
            }else{
                this.ud = this.uddes;
                this.apilar(this.numero);
                this.ud = antud;
                this.numero = "";
            }
            
        }
    }

    cuadrado(){
        if (this.size>0){
            var antud = this.ud;
            this.numero = this.desapilar();
            this.ud = this.uddes;
            this.numero = Math.pow(Number(this.numero),2);
            this.apilar(this.numero);
            this.ud = antud;
            this.numero = "";
        }
    }

    cambio(){
        if (this.size>0){
            this.numero = this.desapilar();
            if(this.ud == "mm"){
                this.ud = this.uddes;
                this.milimetros();
            }else if (this.ud == "cm"){
                this.ud = this.uddes;
                this.centimetros();
            }else if (this.ud == "dm"){
                this.ud = this.uddes;
                this.decimetros();
            }else if (this.ud == "m"){
                this.ud = this.uddes;
                this.metros();
            }else if (this.ud == "hm"){
                this.ud = this.uddes;
                this.hectometros();
            }else if (this.ud == "dam"){
                this.ud = this.uddes;
                this.decametros();
            }else if (this.ud == "km"){
                this.ud = this.uddes;
                this.kilometros();
            }else if (this.ud == "mil"){
                this.ud = this.uddes;
                this.mil();
            }else if (this.ud == "in"){
                this.ud = this.uddes;
                this.pulgada();
            }else if (this.ud == "ft"){
                this.ud = this.uddes;
                this.pie();
            }else if (this.ud == "yard"){
                this.ud = this.uddes;
                this.yarda();
            }else if (this.ud == "rod"){
                this.ud = this.uddes;
                this.varilla();
            }else if (this.ud == "fur"){
                this.ud = this.uddes;
                this.furlong();
            }else if (this.ud == "milla"){
                this.ud = this.uddes;
                this.milla();
            }
            this.apilar(this.numero);
            this.numero = "";
        }
    }

    metros(){
        if (this.ud == "mm"){
            this.numero = Number(this.numero)/1000.0 +"";
        }else if (this.ud == "cm"){
            this.numero = Number(this.numero)/100.0+"";
        }else if (this.ud == "dm"){
            this.numero = Number(this.numero)/10.0+"";
        }else if (this.ud == "m"){
            this.numero = Number(this.numero)+"";
        }else if (this.ud == "hm"){
            this.numero = Number(this.numero)*10.0+"";
        }else if (this.ud == "dam"){
            this.numero = Number(this.numero)*100.0+"";
        }else if (this.ud == "km"){
            this.numero = Number(this.numero)*1000.0+"";
        }else if (this.ud == "mil"){
            this.numero = Number(this.numero)/39370.1+"";
        }else if (this.ud == "in"){
            this.numero = Number(this.numero)/39.3701+"";
        }else if (this.ud == "ft"){
            this.numero = Number(this.numero)/3.28084+"";
        }else if (this.ud == "yard"){
            this.numero = Number(this.numero)/1.09361+"";
        }else if (this.ud == "rod"){
            this.numero = Number(this.numero)*5.0292+"";
        }else if (this.ud == "fur"){
            this.numero = Number(this.numero)*201.1684+"";
        }else if (this.ud == "milla"){
            this.numero = Number(this.numero)*1609.34+"";
        }
        

        this.ud = "m";
        this.escribirUnidad();
    }
    milimetros(){
        if (this.ud != "mm"){
            this.metros();
            this.numero = Number(this.numero)*1000.0 +"";
        }
        this.ud = "mm";
        this.escribirUnidad();
    }
    centimetros(){
        if (this.ud != "cm"){
            this.metros();
            this.numero = Number(this.numero)*100.0 +"";
        }
        this.ud = "cm";
        this.escribirUnidad();
    }
    decimetros(){
        if (this.ud != "dm"){
            this.metros();
            this.numero = Number(this.numero)*10.0 +"";
        }
        this.ud = "dm";
        this.escribirUnidad();
    }
    hectometros(){
        if (this.ud != "hm"){
            this.metros();
            this.numero = Number(this.numero)/10.0 +"";
        }
        this.ud = "hm";
        this.escribirUnidad();
    }
    decametros(){
        if (this.ud != "dam"){
            this.metros();
            this.numero = Number(this.numero)/100.0 +"";
        }
        this.ud = "dam";
        this.escribirUnidad();
    }
    kilometros(){
        if (this.ud != "km"){
            this.metros();
            this.numero = Number(this.numero)/1000.0 +"";
        }
        this.ud = "km";
        this.escribirUnidad();
    }
    mil(){
        if (this.ud != "mil"){
            this.metros();
            this.numero = Number(this.numero)*39370.1 +"";
            
        }
        this.ud = "mil";
        this.escribirUnidad();
    }
    pulgada(){
        if (this.ud != "in"){
            this.metros();
            this.numero = Number(this.numero)*39.3701 +"";
        }
        this.ud = "in";
        this.escribirUnidad();
    }
    pie(){
        if (this.ud != "ft"){
            this.metros();
            this.numero = Number(this.numero)*3.28084 +"";
        }
        this.ud = "ft";
        this.escribirUnidad();
    }
    yarda(){
        if (this.ud != "yard"){
            this.metros();
            this.numero = Number(this.numero)*1.09361 +"";
        }
        this.ud = "yard";
        this.escribirUnidad();
    }
    varilla(){
        if (this.ud != "rod"){
            this.metros();
            this.numero = Number(this.numero)/5.0292 +"";
        }
        this.ud = "rod";
        this.escribirUnidad();
    }
    furlong(){
        if (this.ud != "fur"){
            this.metros();
            this.numero = Number(this.numero)/201.1684+"";
        }
        this.ud = "fur";
        this.escribirUnidad();
    }
    milla(){
        if (this.ud != "milla"){
            this.metros();
            this.numero = Number(this.numero)/1609.34+"";
        }
        this.ud = "milla";
        this.escribirUnidad();
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
            }else if(keyName == 'Enter'){
                this.enter();
            }else if(keyName == 'q'){
                this.milimetros();
            }else if(keyName == 'w'){
                this.centimetros();
            }else if(keyName == 'e'){
                this.decimetros();
            }else if(keyName == 'r'){
                this.metros();
            }else if(keyName == 't'){
                this.hectometros();
            }else if(keyName == 'y'){
                this.decametros();
            }else if(keyName == 'u'){
                this.kilometros();
            }else if(keyName == 'a'){
                this.mil();
            }else if(keyName == 's'){
                this.pulgada();
            }else if(keyName == 'd'){
                this.pie();
            }else if(keyName == 'f'){
                this.yarda();
            }else if(keyName == 'g'){
                this.varilla();
            }else if(keyName == 'h'){
                this.furlong();
            }else if(keyName == 'j'){
                this.milla();
            }else if(keyName == 'c'){
                this.cambio();
            }else if(keyName == 'k'){
                this.raiz();
            }else if(keyName == 'l'){
                this.cuadrado();
            }else if(keyName == 'o'){
                this.mBorrar();
            }
          });
    }
}

var calculadora = new CalculadoraRPNExtendida();
calculadora.presionar();