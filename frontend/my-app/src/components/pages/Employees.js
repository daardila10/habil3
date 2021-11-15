import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Form , Button, Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import React from 'react';
import './Formulario.css';
// import './App.css';
import './App.css';

function Employees () {
  const [identification_add, set_identification_add] = useState(0); 
  const [producto_add, set_producto_add]= useState("");  
  const [name_add, set_name_add] = useState("");
  const [surname_add, set_surname_add]= useState("");
  const [rol_add, set_rol_add] = useState("");
  const [email_add, set_email_add] = useState("");
  const [cedulacl_add, set_cedulacl_add]= useState(0);
  const [nombrecl_add, set_nombrecl_add]= useState("");
  const [nombrev_add, set_nombrev_add]= useState("");
  const [estado_add, set_estado_add]= useState("");

/*   const add_product_db= () => {
    console.log(barcode_add+description_add+unit_cost_add+state_add)
 */
      const [identification_update, set_identification_update] = useState(0);  
      const [producto_update, set_producto_update]= useState(""); 
      const [name_update, set_name_update] = useState("");
      const [surname_update, set_surname_update]= useState("");
      const [rol_update, set_rol_update] = useState("");
      const [email_update, set_email_update] = useState("");
      const [cedulacl_update, set_cedulacl_update]= useState(0);
      const [nombrecl_update, set_nombrecl_update]= useState("");
      const [nombrev_update, set_nombrev_update]= useState("");
      const [estado_update, set_estado_update]= useState("");
      const [id_update, set_id_update] = useState(0); 


  const [employees, set_employees] = useState([])

//  M permite aceeder a las variables de estado o dependencia
  useEffect(() => {
    Axios.get('http://localhost:3003/api/v1/employees/list').then((res) =>{
      console.log(res.data.employees)
      set_employees(res.data.employees)
  });
  },[])

  const add_employees_db = () => {
    console.log(identification_add+producto_add+name_add+surname_add + rol_add+ email_add+cedulacl_add+nombrecl_add+estado_add)
    Axios.post('http://localhost:3003/api/v1/employees/add',{
      identification : identification_add,
      producto: producto_add,
      name : name_add,
      surname : surname_add,
      rol : rol_add, 
      email : email_add,
      cedulacl:cedulacl_add,
      nombrecl: nombrecl_add,
      nombrev:nombrev_add,
      estado:estado_add

    });
  }
  const delete_employees = (_id) => {
     Axios.delete('http://localhost:3003/api/v1/employees/delete/'+ _id)
  }


  const update_employees = (_id) => {
    console.log(_id)
    Axios.put('http://localhost:3003/api/v1/employees/update',{
      _id: _id,
      identification : identification_update,
      producto:producto_update,
      name : name_update,
      surname : surname_update,
      rol : rol_update, 
      email : email_update,
      cedulacl:cedulacl_update,
      nombrecl:nombrecl_update,
      nombrev:nombrev_update,
      estado:estado_update
    });
  }

  return (
  
       <div className="App">
      {/* <header className="App-header">
          <h1>Desarrollando</h1>
      </header> */}
      <Container>
        <br /> <br />
        <h1 className="App-header">Administrador Ventas</h1>
        
{/* inicio formulario productos nuevos */}
        <Form>


  <Form.Group className="mb-3" controlId="formBasicIdentification">
    <Form.Label>Código Producto</Form.Label>
    <Form.Control type="number" placeholder="Ingrese cod. producto" onChange = {(e)=> {
      set_identification_add(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicProducto">
    <Form.Label>Nombre Producto</Form.Label>
    <Form.Control type="text" placeholder="Ingrese cod. producto" onChange = {(e)=> {
      set_producto_add(e.target.value);
    }}
    />

  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Valor Venta</Form.Label>
    <Form.Control type="number " placeholder="ingrese el valor venta" onChange = {(e)=> {
      set_name_add(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicSurname">
    <Form.Label>Cantidad</Form.Label>
    <Form.Control type="number" placeholder="ingrese la cantidad" onChange = {(e)=> {
      set_surname_add(e.target.value);
    }}
    />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicRol">
    <Form.Label>Precio Unitario</Form.Label>
    <Form.Control type="text " placeholder="ingrese el costo unitario" onChange = {(e)=> {
      set_rol_add(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Fecha</Form.Label>
    <Form.Control type="text " placeholder="ingrese la fecha(Mes/día)" onChange = {(e)=> {
      set_email_add(e.target.value);
    }}
    />

  </Form.Group>
   
  <Form.Group className="mb-3" controlId="formBasicCedulacl">
    <Form.Label>Cedula Cliente</Form.Label>
    <Form.Control type="number " placeholder="# ced.cliente" onChange = {(e)=> {
      set_cedulacl_add(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNombrecl">
    <Form.Label>Nombre Cliente</Form.Label>
    <Form.Control type="text " placeholder="Nombr.Cliente" onChange = {(e)=> {
      set_nombrecl_add(e.target.value);
    }}
    />

  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicNombrev">
    <Form.Label>Nombre Vendedor</Form.Label>
    <Form.Control type="text " placeholder="Nombr.Vendedor" onChange = {(e)=> {
      set_nombrev_add(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEstado">
    <Form.Label>Estado</Form.Label>
    <Form.Control type="text " placeholder="En proceso /cancelada /entregada" onChange = {(e)=> {
      set_estado_add(e.target.value);
    }}
    />

  </Form.Group>
   
 


  <Button variant="primary"  onClick = {add_employees_db}>
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
      <th>Identificador</th>
      <th>Producto</th>
      <th>Valor Venta</th>
      <th>Cantidad</th>
      <th>Precio Unitario</th>
      <th>Fecha</th>   
      <th>Cédula Cliente</th>
      <th>Nombre Cliente</th>
      <th>Nombre Vendedor</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    {
      employees.map((value, key) =>
        <tr>
          <td>{key}</td>
          <td>{value.identification}</td>
          <td>{value.producto}</td>
          <td>{value.name}</td>
          <td>{value.surname}</td>
          <td>{value.rol}</td>
          <td>{value.email}</td>
          <td>{value.cedulacl}</td>
          <td>{value.nombrecl}</td>
          <td>{value.nombrev}</td>
          <td>{value.estado}</td>

          
          
          <td>
            <Button variant="warning" onClick = {
              ()=>{
                set_id_update(value._id);
                set_identification_update(value.identification);
                set_producto_update(value.producto);
                set_name_update(value.name);
                set_surname_update(value.surname);
                set_rol_update(value.rol) ;
                set_email_update(value.email);
                set_cedulacl_update(value.cedulacl);
                set_nombrecl_update(value.nombrecl);
                set_nombrev_update(value.nombrev);
                set_estado_update(value.estado);

                
                document.getElementById('name_update').defaultValue= value.name;
                document.getElementById('producto_update').defaultValue= value.producto;
                document.getElementById('surname_update').defaultValue= value.surname;
                document.getElementById('rol_update').defaultValue= value.rol;
                document.getElementById('email_update').defaultValue= value.email;
                document.getElementById('identification_update').defaultValue=value.identification;
                document.getElementById('cedulacl_update').defaultValue=value.cedulacl;
                document.getElementById('nombrecl_update').defaultValue=value.nombrecl;
                document.getElementById('nombrev_update').defaultValue=value.nombrev;
                document.getElementById('estado_update').defaultValue=value.estado;
               
              }
          }>Editar</Button>
          </td>

          <td>
            <Button variant="secondary"  onClick ={() => delete_employees(value._id)
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
  <Form.Group className="mb-3" controlId="formBasicIdentification">
    <Form.Label>Identificador</Form.Label>
    <Form.Control  id='identification_update' type="number" placeholder="aquí va el código producto" onChange = {(e)=> {
      set_identification_update(e.target.value);
    }}
    />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicProducto">
    <Form.Label>Producto</Form.Label>
    <Form.Control  id='producto_update' type="text" placeholder="nombre producto" onChange = {(e)=> {
      set_producto_update(e.target.value);
    }}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Valor Venta</Form.Label>
    <Form.Control id='name_update' type="number" placeholder="valor a editar" onChange = {(e)=> {
      set_name_update(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicSurname">
    <Form.Label>Cantidad</Form.Label>
    <Form.Control id='surname_update' type="number" placeholder="ingrese el apellido" onChange = {(e)=> {
      set_surname_update(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUnitRol">
    <Form.Label>Valor Unitario</Form.Label>
    <Form.Control id='rol_update' type="number " placeholder="ingrese el rol" onChange = {(e)=> {
      set_rol_update(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Fecha</Form.Label>
    <Form.Control id='email_update' type="text " placeholder="ingrese la fecha a editar" onChange = {(e)=> {
      set_email_update(e.target.value);
    }}
    />

  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicUnitRol">
    <Form.Label>Cedula Cliente</Form.Label>
    <Form.Control id='cedulacl_update' type="number " placeholder="ingrese la cedula cliente" onChange = {(e)=> {
      set_cedulacl_update(e.target.value);
    }}
    />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicNombreCliente">
    <Form.Label>Nombre Cliente</Form.Label>
    <Form.Control id='nombrecl_update' type="number " placeholder="ingrese la cedula cliente" onChange = {(e)=> {
      set_nombrecl_update(e.target.value);
    }}
    />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicNombreVendedor">
    <Form.Label>Nombre Vendedor</Form.Label>
    <Form.Control id='nombrev_update' type="number " placeholder="ingrese nombrevendedor" onChange = {(e)=> {
      set_nombrev_update(e.target.value);
    }}
    />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEstado">
    <Form.Label>Estado</Form.Label>
    <Form.Control id='estado_update' type="number " placeholder="ingrese la cedula cliente" onChange = {(e)=> {
      set_estado_update(e.target.value);
    }}
    />
   </Form.Group>

  <Button variant="warning"  onClick ={
   ()=>{
     update_employees(id_update)}}>
    Cambiar/actualizar
  </Button>
</Form>
</Container>
</div>
  );
}

export default Employees;
 