import React,{useState} from "react"; 
import {Link } from "react-router-dom" 
import {auth} from "./fireConfig"; 
import { onAuthStateChanged} from "firebase/auth"; 
import './Menu.css';

function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
 onAuthStateChanged(auth, (user) => { 

 return user ? setIsLoggedIn(true) : setIsLoggedIn(false); 

 }); 

 const logOut=()=>{ 
 auth.signOut().then(() => { 

console.log('singOut'); 

}).catch((error) => { 

console.log(error); 

}); 

  } 

    return ( 
       
<nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">P A R F U M S</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link  " to="/">Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto">
            

            <li className="nav-item">
              <Link className="nav-link " to="/listcart"> Achat parfum femme</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/listcarthom">Achat parfum Homme</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link " to="/articles">Parfum femme </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/articleshom"> Parfum Homme</Link>
            </li>
            

          
            
          </ul>
     {!isLoggedIn 

 ? ( 

 <Link className="btn btn-outline-primary "to="/LoginClient">Log In</Link> 
 ):( 

 <button className="btn btn-outline-primary " onClick={()=>logOut()}>Log Out</button> 

 ) 

} 
    </div>
  </div>
</nav>
     );
}

export default Menu;
