export default class Cl_contador{
    constructor(){
        this.contMasculinos=0;
        this.contFemeninos=0;
        this.contTotal=0;
    }
    procesarPersona(persona){
        this.contTotal++;
        if(persona.sexo==="M"){
            this.contMasculinos++;
        }
        if(persona.sexo ==="F"){
            this.contFemeninos++;
        }
    }
    devolvweContador(){
        if(this.contMasculinos<this.contFemeninos) {
            return "Hay más mujeres"
        }
        if(this.contMasculinos>this.contFemeninos) {
            return "Hay más hombres"
        }
        if(this.contMasculinos===this.contFemeninos) {
            return "Ambos por igual"
        }
    }
    porcChicas(){
        return ((this.contFemeninos/this.contTotal)*100).toFixed(2);
        
    }
}