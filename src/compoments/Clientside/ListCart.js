import {useEffect,useState} from 'react';
import axios from 'axios';
import ElementsParfumCart from './ElementsParfumCart';

function ListCart() {
  const h1Style = {
    textAlign: 'center',
    color: 'green',
    fontSize: '2rem', 
    marginBottom: '1px',
  };

    const[articles,setArticles]=useState([]);

    const [search, setSearch] = useState("");
  
    useEffect(() => {
        axios.get('http://localhost:3001/Parfum')
          .then((res) => {
            const data = res.data;
            setArticles(data);
            
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
    
      const handleSearch = (e) => {
        setSearch(e.target.value);
      };
    
      const filteredCards = articles.filter((card) =>
        card.marque.toLowerCase().includes(search.toLowerCase())
      );
    return ( 
      
     <div className="container">
      <p style={h1Style}>
      "Découvrez une collection exquise de parfums qui captivent vos sens et 

      laissent une empreinte mémorable."
      </p>
      <p>search</p>
      <input type='text' value={search} onChange={handleSearch} />
      <ElementsParfumCart articles={filteredCards} />
      
    </div>
      
     );
}
export default ListCart;
