import { useShoppingCart} from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link}  from 'react-router-dom';

const  ElementsParfumCart= (props)=> {

  const { cartCount,addItem } = useShoppingCart();
  const addToCart = (product) => {
      
  const target = { 
    id : product.id,
    title : product.designation,
    image : product.image,
    price : product.prixVente,
    qtestock : product.qtestock,
    quantity : 1
    };
    addItem(target);
    console.log('Item added to cart:', target);
   
  };

const buttonstyle={
  backgroundColor: 'green',
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
}
const imageStyle = {
  width: '100%', // Ou la largeur que vous préférez
  height: '100%',
};

         return ( 
          <>
          <AppBar position="static" color='default'>
                <Toolbar>
                    <Button color="inherit"><Link to="/cart">{cartCount}<ShoppingCartIcon fontSize="large" /></Link></Button>
                </Toolbar>
  </AppBar>
  <div className="row">
            {props.articles && props.articles.map((product) => (
              
              <article className="col-sm-3" key={product.id}>
  <div className="card">
    <img
      src={product.image}
      className="card-img-top p-5"
      alt={product.designation}
      style={imageStyle}
    />
  </div>
  <div className="text-center">
 <div>{product.designation.substr(0,20)} ... </div>
 <div>Prix : {product.prixVente} TND </div>
 </div>
  <div className="text-center">
  <button
  disabled={product.qtestock <= 1}
  style={buttonstyle}
  className="btn btn-warning"
  onClick={() => addToCart(product)}>
  Ajouter au panier 
</button>

  </div>
</article>
             
            ))}
          </div>
          </>
     
       );
}

export default ElementsParfumCart;



