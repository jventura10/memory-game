import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import "./App.css";

class App extends React.Component {
  state = {
    cards: characters,
    clickedCards: [],
    count: 0
  };

  //Fisher-Yates Shuffle
  shuffle = array => {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  //Handles a Character Card Being Clicked
  cardClicked = cardID => {
    //Check if ID of Card has Been Clicked Already
    let hasBeenClicked=false;
    for(var i=0;i<this.state.clickedCards.length;i++){
      if(cardID===this.state.clickedCards[i]){
        hasBeenClicked=true;
        break;
      }
    }
    //If Card has Been Clicked,Player Lost
    if(hasBeenClicked){
      alert("YOU LOST!");
      this.reset();
    }
    //Else Player Clicked Correctly
    else{
      //Add ID of Card to clickedCards
      let newArray=this.state.clickedCards;
      newArray.push(cardID);
      //Check if Player won 
      let current=this.state.count+1; //Find how Many User has Guessed so far + One User Just Clicked
      //If User Has Clicked as Many as There Exists, Then They won
      if(current===this.state.cards.length){
        alert("You Won!");
        this.reset();
      }
      //If Player Has Less Just Update State
      else{
        this.setState({clickedCards: newArray, count: this.state.count+1});
      }
    }
  };

  //Reset Function
  reset = () => {
    this.setState({clickedCards: [], count: 0});
  }
  
  //Render Function
  render=()=>{
    let shuffledArray=this.shuffle(this.state.cards);

    const allFriends = shuffledArray.map(character =>
      <CharacterCard image={character.image} name={character.name} id={character.id} cardClicked={this.cardClicked} />
    );

    return (
      <div>
        <Navbar count={this.state.count}/>
        <Title/>
        <Wrapper>
          {allFriends}
        </Wrapper>
      </div>
    );
  };

};

export default App;