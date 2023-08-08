import React,{useState} from 'react'

export default function Cerrar() {
    
        /* PARA DISEÑO RESPONSIVE  */
        
        const [toggleMenu, setToggleMenu] = useState(false)
        
        /* Muestra o esconde el fondo de la pantalla de acuerdo al estado del boton*/
          const toggleNav = () => {
            setToggleMenu(!toggleMenu)
            
          }
  return 
    toggleNav
  
}
