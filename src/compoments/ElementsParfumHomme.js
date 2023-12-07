
import {Link } from "react-router-dom";

import React from 'react';

function ElementsParfumhomme(props) {

  const linkStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    textDecoration: 'none', 
    marginRight: '10px',
  };

  const buttonStyle = {
    backgroundColor: '',
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

    return ( 
<div >
  <div className="row">
{
props.articles.map(article =>{
return(
<div key={article.id} className="col-sm-4">
<div className="card" style={{"width": "18rem"}}>
  <img src={article.image} className="card-img-top" alt={article.designation}/>
  <div className="card-body">
    <h5 className="card-title">{article.designation}</h5>
    <p className="card-text">{article.marque}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{article.prixVente} TND</li>
  </ul>
  <div className="card-body">
  <Link exact to={`/editParfumhom/${article.id}`}  style={linkStyle} className="btn btn-primary">Modifier</Link>
  <button  style={buttonStyle} onClick={()=>{props.deleteProd(article.id)}} className="btn btn-danger">Supprimer</button>
 
 
  </div>
</div>
                    </div>
                )
            })
        }
</div>
</div>
 );
}

export default ElementsParfumhomme ;