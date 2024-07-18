/*PERSONAS-A
*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
*datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más
*mujeres o ambos por igual.
*Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
*Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
*Porcentaje de mujeres procesadas: 58.33%
*Hay más mujeres
*2. PERSONAS-*/

import Cl_personas from "./personas.js";
import Cl_contador from "./contador.js";

let persona1=new Cl_personas("Luisa","F");
let persona2=new Cl_personas("Ana","F");
let persona3=new Cl_personas("Jose","M");
let persona4=new Cl_personas("Carmen","F");
let persona5=new Cl_personas("Rosa","F");
let persona6=new Cl_personas("Jose","M");
let persona7=new Cl_personas("Maria","F");
let persona8=new Cl_personas("Luz","F");
let persona9=new Cl_personas("Rafael","M");
let persona10=new Cl_personas("Liz","F");
let persona11=new Cl_personas("Marcos","M");
let persona12=new Cl_personas("Leo","M");

let contador= new Cl_contador();
contador.procesarPersona(persona1);
contador.procesarPersona(persona2);
contador.procesarPersona(persona3);
contador.procesarPersona(persona4);
contador.procesarPersona(persona5);
contador.procesarPersona(persona6);
contador.procesarPersona(persona7); 
contador.procesarPersona(persona8);
contador.procesarPersona(persona9);
contador.procesarPersona(persona10);
contador.procesarPersona(persona11);
contador.procesarPersona(persona12);

let salida = document.getElementById("salida");
salida.innerHTML+= contador.devolvweContador();
salida.innerHTML += "<br> el porcentaje de mujeres procesadas:" + contador.porcChicas()+"%";
