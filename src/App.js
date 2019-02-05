import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0 
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let friends = this.state.friends.filter(friend => friend.id !== id);


  //   for (i = 0; i < friends.length; i++) { 
  //     turtles = friends[Math.floor(Math.random() * userGuess.length)];
  // }
    // Set this.state.friends equal to the new friends array
    this.shuffle(friends)
    this.setState({ friends });
  };


  setCounter = () => {
    this.setState({ count: this.state.count + 1 });
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <p>Total Points = {this.state.count} </p>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            setCounter = {this.setCounter}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
