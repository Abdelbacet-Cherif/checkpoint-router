import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react'
import MovieList from './component/MovieList';
import {Navbar, Form, FormControl, Nav} from 'react-bootstrap'

import Filter from './component/Filter';
import {BrowserRouter, Route} from 'react-router-dom'
import Description from './component/Description'
import data from './data'

function App() {
  const [keyword,setKeyword] = useState("")
const [movies,setMovies] = useState(data);
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