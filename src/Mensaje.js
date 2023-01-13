const Mensaje = (props) => {
    return <h1 style = {{color: props.color}}>
      {props.message}
    </h1> 
    // llama a la propiedad "message" del componente "Mensaje" (que es utilizado en el componente "App" en el archivo "App.js") y muestra su valor por pantalla
  }

  export default Mensaje
