import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementsParfum from './ElementsParfum';
import {Link } from "react-router-dom";

function ListParfum() {
  const[articles,setArticles]=useState([]);
  useEffect(() => {
      axios.get("http://localhost:3001/Parfum")
      .then((response)=>setArticles(response.data));
     }, []);
     const deleteProd = async (id) => { 

    if (!window.confirm("Are you sure you want to delete")) { 
      
     return; 
      
     } 
    
   axios.delete('http://localhost:3001/Parfum/' + id) 
      
     .then(() => { 
      
     console.log('successfully deleted!') 
      setArticles(prevArticles => prevArticles.filter((article) => article.id !== id)); 
      
   }).catch((error) => { 
      
    console.log(error) 
      
       }) 

      } 


  return ( 
      <>
      <h2>Liste des Parfum Femme </h2>
      <Link exact to={`/AddParfum`}  className="btn btn-primary">ajout parfum</Link>
      <ElementsParfum articles={articles} deleteProd={deleteProd} />
      </>
   );
}

export default ListParfum;