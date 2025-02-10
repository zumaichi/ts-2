import "./style.css";


let turno = 0; 

const pintaTurno = () => {
    const marcador = document.getElementsByClassName("numero-turno");

    if(
        marcador !==null && marcador !==undefined && marcador instanceof HTMLHeadElement){

            marcador.textContent = turno.toString().padStart(2, '0');
        }
     else{
        console.error("no funciona el mardor de numeros")
     }
    

}

  

const eventos = () => {
    const botonSiguiente = document.getElementsByClassName("siguiente");

    if (
        botonSiguiente !== null && botonSiguiente !== undefined ){
            botonSiguiente
        


        }
            
   
    
    


}