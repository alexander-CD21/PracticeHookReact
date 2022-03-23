import  {useState} from 'react';
import './App.css';


function App() {
  const [datos,setDatos] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    comfirmPassword : ""
  });
  //desestructuracion de datos 
  //se accede a datos con datos.atributo
  const {firstName,lastName,email,password,comfirmPassword}= datos;
  //se crea la funcion para el onchange
  const actualiza = (event) => {
    setDatos({
      ...datos,
      [event.target.id] : event.target.value
    });
  };

 
  return (
    <div className="App">
      <form  >
        <div>
          <label htmlFor='firstName'>
            FirstName:
          </label>
          <input type="text" id='firstName'  onChange={(event) => actualiza(event)} />
        </div>
        <div>
          <label htmlFor='lastName'>
            lastName:
          </label>
          <input type="text" id="lastName" onChange={(event) => actualiza(event)} />
        </div>
        <div>
          <label htmlFor='email'>
            Email:
          </label>
          <input type="text" id="email"  onChange={(event) => actualiza(event)} />
        </div>
        <div>
          <label htmlFor='password'>
            Password:
          </label>
          <input type="password" id="password" onChange={(event) => actualiza(event)} />
        </div>
        <div>
          <label htmlFor='comfirmPassword'>
            Comfirm Password: 
          </label>
          <input type="password" id="comfirmPassword"  onChange={(event) => actualiza(event)} />
        </div>
      </form>
      <div>

        <h1>
          Resultados
        </h1>
        <h2>
          FirstName :{firstName}
        </h2>
        <h2> 
          LastName :{lastName}
        </h2>
        <h2>   
          Email : {email}
        </h2>   
        <h2>
          Password : {password}
        </h2> 
        <h2>
          comfirmPassword : {comfirmPassword}
        </h2>
      </div>
    </div>
  );
}

export default App;
