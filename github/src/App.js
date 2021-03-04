import React from 'react';
import './App.css';
import Axios from 'axios';

let one = 'https://api.github.com/users/ginxy13th';
let two = 'https://api.github.com/users/ginxy13th/followers';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cards: [],
      followers: []
    }
  }

  componentDidMount() {
    const requestOne = Axios.get(one);
    const requestTwo = Axios.get(two);
    Axios.all([requestOne, requestTwo])
    .then(Axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      this.setState({
        cards: [responseOne.data],
        followers: responseTwo.data
      })
    }))
    .catch(err => {
      console.log(err)
    }) 
    
  }

  // componentDidUpdate(previousProps, previousState) {
  //   if (previousState.cards !== this.props.cards){
  //     console.log(this.state.cards)
  //   }
  //   if (previousProps.cards.username !== this.props.cards.username){
  //     console.log(this.state.cards)
  //     this.setState({
  //       username: ''
  //     })
  //   }
  // }

  render(){

  console.log(this.state.followers)
    return (
      
    <div className="App">
      <h1>GitHub Profile Cards</h1>
      <div className="BigContainer">
        <div className="SmallContainer">
        {this.state.cards.map(user => (
          <div className="Card">
            <img src={user.avatar_url} alt='avatar' />
            <div key={user.id} className="Info" >
              <h3>{user.name}</h3>
              <p>Location: {user.location}</p>
              <p>Bio: {user.bio}</p>
              <p>GitHub Profile:</p>
              <a href={user.html_url}>{user.html_url}</a>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
            </div>
          </div>
        ))}
        </div>
        <div className="SmallContainer">
        {this.state.followers.map(user => (
          <div className="Card">
            <img src={user.avatar_url} alt='avatar' />
            <div className="Info" >
              <h3>{user.login}</h3>
              <p>GitHub Profile:</p>
              <a href={user.html_url}>{user.html_url}</a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
    
    )
  }
}

export default App;
