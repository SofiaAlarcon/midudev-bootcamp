import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>App del curso fullstack</p>
}
const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message ="Estamos trabajando" />
      <Mensaje color="green" message ="En un curso"/>
      <Mensaje color="yellow" message ="De React"/>
      {/* Llama 3 veces al componente "Mensaje", c/vez el atributo "message" tiene un valor distinto
      Los ejecuta en ese orden, pero en pantalla los muestra simultáneamente, uno debajo del otro */}
      <Description />
    </div>
  );
}

export default App;
