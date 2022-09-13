import { Header } from "../../../components/Header/index"
import { Button } from "../../../components/Button/index";
import { Link } from "react-router-dom";


export const Headers = () => {
    
return(
    
   <div> 
        <Header>
             <Link to="/"> 
                <Button
                icon="icon-home.svg"
                text="Home"
                color="#0B1741"
                backgroundColor="#72EFDB"
                />
            </Link>
        </Header>
    </div>)
};