class Persona {
    static contadorPersonas = 0; // Atributos de nuestra clase
      
    static get MAX_OBJ (){
        return 5;
    }
       constructor(nombre, apellido){
           this._nombre = nombre;
           this._apellido = apellido;
           if (Persona.contadorPersonas < Persona.MAX_OBJ){
           this._idPersona = ++Persona.contadorPersonas;
           }
           else{
            console.log('Se han superado el máximo de objetos permitidos');
           }
       }
   
       get nombre (){
           return this._nombre
       }
   
       set nombre(nombre){
           this._nombre = nombre;
       }
   
       get apellido (){
           return this._apellido;
       }
   
       set apellido(apellido){
           return this._apellido = apellido;
       }
       nombreCompleto (){
           return this._idPersona + ': ' +this._nombre + ' '+ this._apellido;
       }
       toString(){ // se aplica Polimorfismo en esta llamada (multiples formas en tiempo de ejecución) El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
           return this.nombreCompleto();
       }
       static saludar(){
           console.log('Saludos desde metodo Static');
       }
       static saludar2(persona){
           console.log(persona.nombre + ' ' + persona.apellido);
       }
   }
   
   class Empleado extends Persona{    
       constructor(nombre, apellido, departamento){
           super(nombre, apellido); //Llamar al constructor de la clase padre
           this._departamento = departamento;
       }
       get departamento (){
          return this._departamento;
       }
   
       set departamento (departamento){
           return this._departamento = departamento;
       }  
       //Sobreescritura (modificar el comportamiento de un metodo definido en la clase padre ) se deb llamar al metodo igual como en la clase padre de lo contrario lo toma como un nuevo metodo.
       nombreCompleto(){
           // return this._nombre + ' ' + this._apellido + ', ' + this._departamento; // se utiliza super para llamar al metodo definido en la clase padre
           return super.nombreCompleto() + ', '+ this._departamento;
       }
   }
   
   
   let persona1 = new Persona('Cristian', 'Diaz');
   console.log(persona1.toString());

   
   let empleado1 = new Empleado ('Maria', 'Jimenez', 'Sistemas');
  console.log(empleado1.toString());

  console.log(Persona.contadorPersonas);

  let persona2 = new Persona('José', 'Martinez');
  console.log(persona2.toString());

  console.log(Persona.MAX_OBJ); // Llamamos al meotod MAX_OBJ por medio de la clase Persona, este metodo solo tiene un metodo Get por ende al tratar de cambia su valor (siguiente linea) este no tendrá efecto ya que no se le asigno un metodo Set y a su vez va a simular una constante
  Persona.MAX_OBJ = 10;
  console.log(Persona.MAX_OBJ);

  let persona3 = new Persona('José', 'Martin');
  let persona4 = new Persona('Ana', 'Moreno');
  let persona5 = new Persona('Franyi', 'Perez');
  console.log(persona4.toString());