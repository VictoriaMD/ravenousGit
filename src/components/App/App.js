import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

<<<<<<< HEAD

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
=======
>>>>>>> df421abf3bf54555b1329460b01b758bbcd27381


class App extends React.Component {
  constructor(props) {
  super(props); 
  this.state = {businesses: []};
  this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    //searchYelp instead of search
   Yelp.searchYelp(term, location, sortBy).then(businesses => {
     //value of businesses instead of [];
     this.setState({businesses: businesses});
   });
  };

  render() {
  return (
    <div className="App">
  <h1>ravenous</h1>
<<<<<<< HEAD
  <SearchBar/>
  <BusinessList businesses={businesses}/> 
  </div>
=======
  <SearchBar searchYelp={this.searchYelp}/>
 

  <BusinessList businesses={this.state.businesses}/> 
</div>
>>>>>>> df421abf3bf54555b1329460b01b758bbcd27381
  );
 }
}

export default App;
