import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Switch  from '@mui/material/Switch';
import { FormControlLabel, FormGroup } from '@mui/material';

const FormSignUp = ({handleSubmit}) => { //componente funcional pero con arrow function (funcion flecha)
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [promociones, setPromociones] = useState(true);
    const [novedades, setNovedades] = useState(false);

    const [errors, setErrors] = useState({
        name: {
            error: false,
            mensaje: "Debe contener al menos 3 caracteres"
        }
    })

    function validarNombre(nombre) { 
       if(nombre.length  >= 3) {
        return { name: {error:false, mensaje: ""}}
       } else {
        return { name: {error:true, mensaje: "Debe contener al menos 3 caracteres"}}
       }
    }

    return (
        <form onSubmit={(e)=> {e.preventDefault() 
        handleSubmit({name, lastName, email, promociones, novedades})}}>
            <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined" 
            fullWidth margin="normal" 
            onChange={(e)=> setName(e.target.value)} 
            value={name} 
            error={errors.name.error} 
            helperText={errors.name.error ? errors.name.mensaje : ''}
            onBlur={(e)=> setErrors(validarNombre(e.target.value))}
            />
            <TextField id="lastname" label="Apellido" variant="outlined" fullWidth margin="normal" onChange={(e)=> setLastName(e.target.value)} value={lastName}/>
            <TextField id="email" label="E-mail" variant="outlined" fullWidth margin="normal" onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <FormGroup>
                <FormControlLabel control={<Switch checked={promociones} onChange={(e)=> setPromociones(e.target.checked)}/>} label="Promociones" />
                <FormControlLabel control={<Switch checked={novedades} onChange={(e)=> setNovedades(e.target.checked)}/>} label="Novedades"/>
            </FormGroup>
            
            <Button type='submit' variant="contained">Registrarse</Button>
        </form>
    )
}

export default FormSignUp; 