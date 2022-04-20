import { Link, useParams } from "react-router-dom"
import  members  from "../../Componentes/Api"


const Company = () =>{
    const params  = useParams();

    const member = members.find((el)=>{
        return params.id === el.id
    })


    return(
        <div>
            <h1> Detalhes do cliente</h1>
            <p> Nome: {member && member.name}</p>
            <Link to='/'> Voltar</Link>
        </div>
    )
}

export default Company