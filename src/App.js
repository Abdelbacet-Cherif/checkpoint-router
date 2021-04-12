import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react'
import MovieList from './component/MovieList';
import {Navbar, Form, Button, FormControl, Nav} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import Filter from './component/Filter';

function App() {
  const [keyword,setKeyword] = useState("")
const [movies,setMovies] = useState([

{id:uuidv4(),
  titre : "Hunter x Hunter" , description : "Hunter × Hunter est un shōnen manga écrit et dessiné par Yoshihiro Togashi. Il est pré-publié depuis mars 1998 dans l'hebdomadaire Weekly Shōnen Jump de l'éditeur Shūeisha, et a été compilé en trente-six tomes au 4 octobre 2018. En mai 2013, le manga s'est vendu à plus de 65 millions d'exemplaires au Japon. " , images :"https://m.media-amazon.com/images/I/71ophqcLcjL._AC_SY679_.jpg",rate:5
},
{id:uuidv4(),
  titre : "Dragon Ball Z" , description :"Cinq ans après le mariage de Son Goku et de Chichi, Raditz, un mystérieux guerrier de l'espace, frère de Son Goku, arrive sur Terre. Goku apprend qu'il vient d'une planète de guerriers redoutables dont il ne reste plus que quatre survivants." , images :"https://images-na.ssl-images-amazon.com/images/I/81JKz3l3tjL._AC_SX522_.jpg",rate:3
},
{id:uuidv4(),
  titre : "Naruto Shippuden" , description : "Naruto est de retour à Konoha trois ans après son voyage d'entraînement avec Jiraiya. Konoha n'a pas changé, enfin presque. Notre cher héros retrouve une Sakura bien plus forte, un Kakashi toujours fidèle à lui-même, et des compagnons qui n'ont pas l'air d'avoir chômé ces trois dernières années, mais les retrouvailles seront de courte durée." , images : "https://m.media-amazon.com/images/I/81dwTCF6+XL._AC_SY879_.jpg",rate:4
},
{id:uuidv4(),
  titre : "One Piece" , description :"One Piece est une série de mangas shōnen créée par Eiichirō Oda. Elle est prépubliée depuis le 22 juillet 1997 dans le magazine hebdomadaire Weekly Shōnen Jump, puis regroupée en volumes reliés aux éditions Shūeisha depuis le 24 décembre 1997. 98 tomes sont commercialisés au Japon en février 2021." , images :"https://www.filmspourenfants.net/wp-content/uploads/2018/07/one-piece-serie-a-348x500.jpg",rate:2
}]);
const search=(e) => {
  setKeyword (e.target.value)
}
const [keyRate, setKeyRate] = useState(1)
const addMovie = (nMovie) => {
  setMovies(movies.concat(nMovie))
}

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange= { search } />
      <Filter  setKeyRate={setKeyRate}/>
    </Form>
  </Navbar>


  
      <MovieList movies={movies.filter ((el) => el.titre.toUpperCase().trim().includes (keyword.toUpperCase().trim()) && el.rate >= keyRate) } addMovie={addMovie}/> 
   
    
 
    
    </div>

  );
}

export default App;