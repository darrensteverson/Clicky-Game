import React, {Component} from 'react';
import Header from "./components/Header/header";
import Container from "./components/Container/container";
import Nav from "./components/Nav/navbar";
import Cards from "./components/Cards/cards"
import img from "./img.json"

class App extends Component{
  state = {
    img 
  };

  render() {
    return(
      <> 
      
      <Nav></Nav>
      <Container>
      <Header></Header>
      <Cards></Cards>
      </Container>
  
      </>

    )};
};



export default App;
