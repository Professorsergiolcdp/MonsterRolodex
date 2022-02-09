import React , {Component} from 'react';
import './App.css';
import { CardList } from './components/cards-list/CardList.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }
  // everytime setState function execute render function execute thereafter
  // setState is a async function it takes two arguments one value and one callback
  
  
  render(){
    const {monsters, searchField} = this.state;
    const fileteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className ="App">
        <h1> Monster Rolodex </h1>
        <SearchBox placeholder = "search monsters" handleChange = {e => this.setState({searchField: e.target.value})}/>
        <CardList monsters = {fileteredMonsters}/>
      </div>
    );
  }
}

export default App;
