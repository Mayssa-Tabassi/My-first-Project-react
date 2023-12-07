import './App.css';
import ListParfum from './compoments/ListParfum';
import AddParfum from './compoments/AddParfum';
import EditParfum from './compoments/EditParfum';
import Menu from './Menu';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ListCart from './compoments/Clientside/ListCart';
import { CartProvider } from "use-shopping-cart";
import Cart from "./compoments/Clientside/Cart";
import PdfCart from "./compoments/Clientside/PdfCart"; 
import Loginclient from './compoments/authentificationClient/LoginClient'; 
import Signup from "./compoments/authentificationClient/Signup";
import Home from './compoments/Home';
import ListParfumhomme from './compoments/ListParfumhomme';
import AddParfumhomme from './compoments/AddParfumhomme';
import EditParfumhomme from './compoments/EditParfumhomme';
import ListCarthom from './compoments/Clientside/ListCarthom';


function App() {


  
  return (
    <>
    <CartProvider>
    <Router>
      <Menu/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/articles' element={<ListParfum/>}/>
        <Route path='/AddParfum' element={<AddParfum/>}/>
        <Route path='/editParfum/:id' element={<EditParfum/>}/>

        <Route path='/articleshom' element={<ListParfumhomme/>}/>
        <Route path='/AddParfumhom' element={<AddParfumhomme/>}/>
        <Route path='/editParfumhom/:id' element={<EditParfumhomme/>}/>


        <Route path='/listcart' element={<ListCart/>}/>
        <Route path='/listcarthom' element={<ListCarthom/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/PdfCart' element={<PdfCart/>}/> 

        
        <Route path="/LoginClient" exact element={<Loginclient/>}/> 
        <Route path="/Signup" exact element={<Signup/>}/> 

      </Routes>
      </Router>
      </CartProvider>

      
      </>
  );

}

export default App;


