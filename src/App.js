import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    top: 0,
    clicked: []
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
    // let friends = this.state.friends.filter(friend => friend.id !== id);

   
      
      // if (friends.id = id) {
      //   this.state.friends[1].pressed = true; 
      //   console.log(this.state.friends[1].pressed)
      // }

      // console.log(this.state.friends[1].pressed)

      // this.state.friends.forEach(friend => {
      //   if (friend.id = id) {
      //    console.log("hey")
      //   }

      // }
        
        
      // console.log(id)  

      // friends[[id]].pressed = true; 

      // console.log(friends[[id]].pressed) 

      // console.log(friends)

      //   )


    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({clicked: this.state.clicked.concat(id)})
    this.setCounter();
    this.shuffle(friends)
    } else {
    this.reset()
    }

   


  //   for (i = 0; i < friends.length; i++) { 
  //     turtles = friends[Math.floor(Math.random() * userGuess.length)];
  // }
    // Set this.state.friends equal to the new friends array
  };

  reset = () => {
    this.setState({
    friends,
    count: 0,
    clicked: []
    }); 

    this.shuffle(friends)
  }



  setCounter = () => {
    if (this.state.count >= this.state.top) {
      this.setState({ top: this.state.count});
    }
    this.setState({ count: this.state.count + 1 });
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Game of Thrones</Title>
        <div>
        <p>Total Points = {this.state.count} </p>
        </div>
        <p>TOP SCORE = {this.state.top} </p>
        <div className = "row">
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
        </div>
      </Wrapper>
    );
  }
}

export default App;
