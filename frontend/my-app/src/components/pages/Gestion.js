import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Form , Button, Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import React from 'react';
import './Formulario.css';
// import './App.css';
import './App.css';

function Gestion () {
  const [nombreu_add, set_nombreu_add] = useState(""); 
  const [rol_add, set_rol_add]= useState("");  
  const [emaill_add, set_emaill_add]= useState("");
  const [estado_add, set_estado_add] = useState("");
 
/*   const add_product_db= () => {
    console.log(barcode_add+description_add+unit_cost_add+state_add)
 */
      const [nombreu_update, set_nombreu_update] = useState("");  
      const [emaill_update, set_emaill_update]= useState("");
      const [rol_update, set_rol_update]= useState(""); 
      const [estado_update, set_estado_update]= useState("");
      const [id_update, set_id_update] = useState(0); 


  const [gestion, set_gestion] = useState([])

//  M permite aceeder a las variables de estado o dependencia
  useEffect(() => {
    Axios.get('http://localhost:3003/api/v1/gestion/list').then((res) =>{
      console.log(res.data.gestion)
      set_gestion(res.data.gestion)
  });
  },[])

  const add_gestion_db = () => {
    console.log(nombreu_add+emaill_add+ rol_add+ estado_add)
    Axios.post('http://localhost:3003/api/v1/gestion/add',{
      nombreu : nombreu_add,
      emaill: emaill_add,
      rol: rol_add,
      estado:estado_add

    });
  }
  const delete_gestion = (_id) => {
     Axios.delete('http://localhost:3003/api/v1/gestion/delete/'+ _id)
  }


  const update_gestion = (_id) => {
    console.log(_id)
    Axios.put('http://localhost:3003/api/v1/gestion/update',{
      _id: _id,
      nombreu : nombreu_update,
      emaill:emaill_update,
      rol: rol_update,
      estado:estado_update, 

    });
  }

  return (
  
       <div className="App">
      {/* <header className="App-header">
          <h1>Desarrollando</h1>
      </header> */}
      <Container>
        <br /> <br />
        <h1 className="App-header">Gestion Usuarios</h1>
        
{/* inicio formulario productos nuevos */}
        <Form>


  <Form.Group className="mb-3" controlId="formBasicNombreu">
    <Form.Label>Nombre Usuario</Form.Label>
    <Form.Control type="text" placeholder="Ingrese nombre usuario" onChange = {(e)=> {
      set_nombreu_add(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Ingrese  email" onChange = {(e)=> {
      set_emaill_add(e.target.value);
    }}
    />
    </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicRol">
    <Form.Label>Rol</Form.Label>
    <Form.Control type="text " placeholder="ingrese rol" onChange = {(e)=> {
      set_rol_add(e.target.value);
    }}
    />

    </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEstado">
    <Form.Label>Estado</Form.Label>
    <Form.Control type="text " placeholder="Pediente /Autorizad@ /No Autorizad@" onChange = {(e)=> {
      set_estado_add(e.target.value);
    }}
    />

  </Form.Group>
   
 


  <Button variant="primary"  onClick = {add_gestion_db}>
    Guardar
  </Button>
</Form>
{/* fin  formulario productos nuevos productos */}

  <hr />

{/* inicio tabla */}
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre Usuario</th>
      <th>Email</th>
      <th>Rol</th>
      <th>Estado</th>
     
    </tr>
  </thead>
  <tbody>
    {
      gestion.map((value, key) =>
        <tr>
          <td>{key}</td>
          <td>{value.nombreu}</td>
          <td>{value.emaill}</td>
          <td>{value.rol}</td>
         <td>{value.estado}</td>

          
          
          <td>
            <Button variant="warning" onClick = {
              ()=>{
                set_id_update(value._id);
                set_nombreu_update(value.nombreu);
                set_emaill_update(value.emaill);
                set_rol_update(value.rol);
                set_estado_update(value.estado);
                

                
                document.getElementById('nombreu_update').defaultValue= value.nombreu;
                document.getElementById('emaill_update').defaultValue= value.emaill;
                document.getElementById('rol_update').defaultValue= value.rol;
                document.getElementById('estado_update').defaultValue=value.estado;
               
              }
          }>Editar</Button>
          </td>

          <td>
            <Button variant="secondary"  onClick ={() => delete_gestion(value._id)
            }>Eliminar
            </Button>
          </td>

        </tr>
      )
    }
    
  </tbody>
</Table>
{/* fin tabla */}
{/* Una lina para separar la tabla de lista del form de editar productos */}
<hr />
{/* aquí inicia el form de editar los productos */}
<Form>
  <Form.Group className="mb-3" controlId="formBasicNombreu">
    <Form.Label>Nombre Usuario</Form.Label>
    <Form.Control  id='nombreu_update' type="text" placeholder="aquí va el nombre" onChange = {(e)=> {
      set_nombreu_update(e.target.value);
    }}
    />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control  id='emaill_update' type="text" placeholder="nombre producto" onChange = {(e)=> {
      set_emaill_update(e.target.value);
    }}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicRol">
    <Form.Label>Rol</Form.Label>
    <Form.Control id='rol_update' type="text" placeholder="rol" onChange = {(e)=> {
      set_rol_update(e.target.value);
    }}
    />

    </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEstado">
    <Form.Label>Estado</Form.Label>
    <Form.Control id='estado_update' type="text " placeholder="ingrese esatado usuario" onChange = {(e)=> {
      set_estado_update(e.target.value);
    }}
    />
   </Form.Group>

  <Button variant="warning"  onClick ={
   ()=>{
     update_gestion(id_update)}}>
    Cambiar/actualizar
  </Button>
</Form>
</Container>
</div>
  );
}

export default Gestion;
 