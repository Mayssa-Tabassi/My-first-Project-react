
import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementsParfum from './ElementsParfum';
import {Link } from "react-router-dom";


function ListParfumhomme() {
  const[articles,setArticles]=useState([]);
  useEffect(() => {
      axios.get("http://localhost:3001/ParfumMan")
      .then((response)=>setArticles(response.data));
     }, []);
     const deleteProd = async (id) => { 

     if (!window.confirm("Are you sure you want to delete")) { 
      
        return; 
     } 
      
     axios.delete('http://localhost:3001/ParfumMan/' + id) 
      
    .then(() => { 
      
       console.log('successfully deleted!') 
      
     setArticles(prevArticles => prevArticles.filter((article) => article.id !== id)); 
      
         }).catch((error) => { 
      
        console.log(error) 
      
        }) 
         } 


  return ( 
      <>
      <h2>Liste des Parfum Homme</h2>
      <Link exact to={"/AddParfumhom"}  className="btn btn-primary">ajout parfum</Link>

      <ElementsParfum articles={articles} deleteProd={deleteProd} />
      </>
   );
}

export default ListParfumhomme;