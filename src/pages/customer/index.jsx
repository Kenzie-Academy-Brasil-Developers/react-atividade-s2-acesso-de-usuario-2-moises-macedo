import { Link, useParams } from "react-router-dom"
import  members  from "../../Componentes/Api"


const Customer = () =>{
    const params = useParams();

    const member = members.find((el)=>{
        return el.id === params.id
    })


    return(
        <div>
            <h1> Detalhes do cliente</h1>
            <p> Nome: {member && member.name}</p>
            <Link to='/'> Voltar</Link>
        </div>
    )
}

export default Customer