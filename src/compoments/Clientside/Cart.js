import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Plus from '@mui/icons-material/AddAlarm';
import Minus from '@mui/icons-material/RemoveCircle';
import Delete from '@mui/icons-material/Delete';
import StripeCheckout from 'react-stripe-checkout';
const Cart = () => {
  const { cartDetails, removeItem , clearCart, totalPrice, cartCount,incrementItem,decrementItem } = useShoppingCart();
  const navigate = useNavigate();

  const [payment, setpayment] = React.useState(false);
  const imprimer = () => { 

    navigate('/PdfCart'); 
    
    }; 
  const onToken = (token) => {
    console.log(token);
    clearCart();
    navigate('/');
  };
  
    const commander = async() => {
    
     setpayment(true);
  
   };
  


  const more = () => {
    navigate('/ListCart');
  };
  
  const more1 = () => {
    navigate('/ListCarthom');
  };

  const clear = () => {
    clearCart();
  };

  if (cartCount === 0) return <h1>Cart est vide </h1>;

  return (
    <div>
        {payment ? <StripeCheckout
        token={onToken}
        stripeKey=""
        amount={totalPrice*100} 
        currency="USD" 
        /> :null}


      <Grid container spacing={2} columns={15} marginTop={10} marginLeft={10}>
        <Grid item xs={8}>
          {cartDetails && Object.values(cartDetails).map((item) => { 
            return (
              <Grid item xs={8} key={item.id}>
                <img
                  alt={item.title}
                  style={{ margin: "0 auto", maxHeight: "100px" }}
                  src={item.image} 
                  className="img-fluid d-block"
                />
                <h5>{item.title}</h5>
                <p>Prix: {typeof item.price === 'number' ? item.price.toFixed(3) + ' TND' : 'Invalid Price'} </p>

                <p>Qté: {item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity < item.qtestock) {
                      incrementItem(item.id);
                    } else {
                      alert("Quantité stock indisponible");
                    }
                  }}
                >
                  <Plus color="success" />
                </button>
                {item.quantity > 1 && (
                  <button
                  onClick={() => decrementItem(item.id)}
                  >
                    <Minus color="warning" />
                  </button>
                )}
                {item.quantity === 1 && (
                  <button onClick={() => removeItem(item.id)}>
                    <Delete color="error" />
                  </button>
           ) }
                <hr />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={5}>
          <Button color="error" variant="outlined" onClick={more}>
            Ajouter des Parfum Femme
          </Button>
          <Button color="error" variant="outlined" onClick={more1}>
            Ajouter des Parfum Homme
          </Button>
          <p>Total Parfum:<b> {cartCount} </b></p>
          <p>Total Payement: <b><h2>{totalPrice} TND</h2> </b></p>
         
          <hr />
          <div>
            <Button color="warning" variant="outlined" onClick={commander}>
              Commander
            </Button>
            <Button color="info" variant="outlined" onClick={clear}>
              Annuler
            </Button>
            <Button color="secondary" variant="outlined" onClick={imprimer}> 
            Imprimer PDF 
            </Button> 
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
