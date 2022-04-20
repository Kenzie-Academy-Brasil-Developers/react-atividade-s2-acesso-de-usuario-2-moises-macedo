import { Link } from "react-router-dom";
import members from "../Api";

const Home = () => {

    return(
        <>
            {members.map((el)=> {
                const {id, name, type} = el;
                return (
                    type === 'pj'? (
                        <Link to={`/company/${id}`}>{name}</Link>
                    ):(
                        <Link to={`/customer/${id}`}>{name}</Link>
                    )
                    )})}
        </>
    )
}

export default Home