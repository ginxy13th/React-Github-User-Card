import React from 'react';
// import GitHubForm from './Components/githubform.js';
import './App.css';
import Axios from 'axios';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cards: [],
    }
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/ginxy13th/')
    .then(response => {
      console.log(response)
      this.setState({
      cards: response.data.data
      });
    })
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
    return (
      
    <div className="App">
      <h1>GitHub Profile Cards</h1>
      {this.state.cards.map(user => (
        <div>
        <img src={user.avatar_url} alt='avatar' />
        <div>
          <h3>{user.name}</h3>
          <p>{user.login}</p>
          <p>{user.location}</p>
          <p>{user.bio}</p>
          <p>{user.profile}</p>
          <a href={user.html_url}>{user.html_url}</a>
          <p>{user.followers_url}</p>
          <p>{user.following_url}</p>
       </div>
      </div> 
      ))}
    </div>
    )
  }
}

export default App;
