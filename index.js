import React from 'react';
import {
  AppRegistry,
  asset,
  Environment,
  NativeModules,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import InfoButton from './components/InfoButton';
import Intro from './components/Intro';
import Events from './components/Slides';
import RockStarBeach from './components/RockStarBeach';

const SCENES = ['Intro', 'Slides'];

class Scene extends React.Component {
  state = {
    scene: ''
  }

  componentDidMount() {
    Environment.setBackgroundImage(asset('chilling.jpg'), { rotateTransform: [{rotateY: '180deg'}] });
  }

  clearMedia() {
    Environment.clearBackground();
  }

  clickHandler(selection) {
    this.setState({
      scene: selection
    })

    this.clearMedia();
  }

  render() {
    const scene = this.state.scene;
    let selection;
    const sceneButtons = [];

    if (scene === 'Intro') {
      selection = <Intro />;
    } else if (scene === 'Slides') {
      selection = <Events />;
    } else if (scene === 'Assignment') {
      selection = <RockStarBeach />;
    }

    for (let i in SCENES) {
      sceneButtons.push(
        <InfoButton
          key={i}
          style={{marginLeft:5, marginRight:5, backgroundColor:'black'}}
          source={asset('logo.png')}
          text={SCENES[i]}
          onClick={() => { this.clickHandler(SCENES[i])}}
        />
      )
    }

    return(
      <View style={styles.panel}>
        <View>
          {selection}
        </View>
        <View style={styles.section}>
          {sceneButtons}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 800,
    height: 450,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  section: {
    padding: 10,
    backgroundColor: '#000',
    borderColor: 'black',
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
    
  }
});

AppRegistry.registerComponent('Scene', () => Scene);
