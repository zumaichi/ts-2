
let turno = 0; 


const pintaTurno = () => {
    const marcador = document.getElementById("numero-turno");

    if(marcador instanceof HTMLHeadingElement){

            marcador.textContent = turno.toString().padStart(2, '0');
        }
     else{
        console.error("no funciona el marcador de numeros")
     }
    

}



const eventos =  () => {
    
    const botonSiguiente = document.getElementById("siguiente");

    if (botonSiguiente !== null && botonSiguiente !== undefined && HTMLButtonElement)  { 
            botonSiguiente.addEventListener("click", ()=> {
                turno ++;
                pintaTurno();
            });
        }
    else {
       console.error("no funciona siguiente turno")
    }        
    
    const botonAnterior = document.getElementById("anterior");

    if (botonAnterior !== null && botonSiguiente !== undefined && HTMLButtonElement ) { 
            botonAnterior.addEventListener("click", ()=> {
                if (turno > 0)
                turno --;
                pintaTurno();
            });
        }
    else {
       console.error("no funciona turno anterior")
    }
        
       const botonReset = document.getElementById("reset");

       if (botonReset !== null && botonReset !== undefined && HTMLButtonElement )  { 
               botonReset.addEventListener("click", ()=> {
                turno =0;
                pintaTurno();
        
               });
        }
       else {
          console.error("no funciona poner 0")
       }   
       
 
    }
    document.addEventListener("DOMContentLoaded", eventos);