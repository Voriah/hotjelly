import React, {Component} from "react"
import Grid from '@material-ui/core/Grid';

import Bowser from "../../images/bowser.jpg"
import Captain from "../../images/captain.jpg"
import Falco from "../../images/falco.jpg"
import Fox from "../../images/fox.jpg"
import Shadow from "../../images/shadow.jpg"
import Mac from "../../images/mac.jpg"
import Marth from "../../images/marth.jpg"
import Meta from "../../images/meta.jpg"
import Peach from "../../images/peach.jpg"
import Pit from "../../images/pit.jpg"
import Ryu from "../../images/ryu.jpg"
import Wario from "../../images/wario.jpg"
import CharacterCard from "./gameComponents/Characters"

var imgArr = [{
  name: "Bowser",
  src: Bowser
}, {
  name: "Captain",
  src: Captain
}, { 
  name: "Falco",
  src: Falco
}, {
  name: "Fox",
  src: Fox,
}, {
  name: "Shadow",
  src: Shadow
}, {
  name: "Mac",
  src: Mac
}, {
  name: "Marth",
  src: Marth
}, {
  name: "Meta",
  src: Meta
}, {
  name: "Peach",
  src: Peach
}, {
  name: "Pit",
  src: Pit
}, {
  name: "Ryu",
  src: Ryu
}, {
  name: "Wario",
  src: Wario
}]



class Game extends Component {

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

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
  }

 handleClick = (them) => {
   if (this.state.clicked.indexOf(them) !== -1) {
     alert('You Lose!')
     this.setState({clicked: []})
   } else{
  let clickedArr = this.state.clicked
  clickedArr.push(them)
  this.setState({clicked: clickedArr})
  this.shuffle(imgArr)
   }
}

state = {
  characters: [],
  clicked: []
}

componentDidMount = () => {
  this.shuffle(imgArr)
  this.setState({characters: imgArr})
}

  render() {
    return (
      <Grid container spacing={16}>
      {this.state.characters.map(smash => {
        return (
          <>
          <Grid item onClick={() => {this.handleClick(smash.name)}}  xs={3}>
          <CharacterCard  image={smash.src} title={smash.name}></CharacterCard>
          </Grid>
          </>
          )
        })
      }
      </Grid>
    )
  }
} 

export default Game

