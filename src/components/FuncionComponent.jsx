import { useState } from "react";

function FuncionComponent() {

    const [contador, setContador] = useState(0)

    return <div>
        Funcion Component
        <p>
            <button onClick={()=> {setContador(contador - 1)}}> - </button>
            {contador}
            <button onClick={()=> {setContador(contador + 1)}}> + </button>
        </p>
        </div>
}

export default FuncionComponent