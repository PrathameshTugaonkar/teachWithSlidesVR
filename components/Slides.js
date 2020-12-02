import React from 'react';
import {
  asset,
  Environment,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

const {AudioModule} = NativeModules;

PHOTOS = [
  {uri: 'react360-slide1.jpg', title: 'First Slide', audio: 'menu-click.wav' },
  {uri: 'react360-slide2.jpg', title: 'Pre-requisite', audio: 'menu-click.wav'},
  {uri:'react360-slide3.jpg', title: 'Difference between JS and React', audio: 'menu-click.wav'},
  {uri: 'react360-slide4.jpg', title: "Let's React", audio: 'menu-click.wav'},
  //{uri: 'react360-slide1.jpg', title: '$toopid - March 22nd', audio: '$toopid.mp3'}
];

class EventImage extends React.Component {
  render() {
    return(
      <View>
        <Image style={{width: 800, height: 300}} source={asset(this.props.uri)} />
      </View>
    )
  }
}

export default class Events extends React.Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    Environment.setBackgroundImage(asset('360-Degree-Video-Technology.jpg'));
}
  //   AudioModule.playEnvironmental({
  //     source: asset(`audio/${PHOTOS[this.state.index].audio}`),
  //     volume: 0.3, // play at 3/10 original volume
  //   });
  // }

  // componentDidUpdate() {
  //   AudioModule.playEnvironmental({
  //     source: asset(`audio/${PHOTOS[this.state.index].audio}`),
  //     volume: 0.3, // play at 3/10 original volume
  //   });
  // }

  // componentWillUnmount() {
  //   AudioModule.stopEnvironmental();
  // }
  
  prevPhoto = () => {
    let next = this.state.index - 1;
    if (next < 0) {
      next += PHOTOS.length;
    }

    this.setState({
      index: next,
    });
  };

  nextPhoto = () => {
    let next = this.state.index + 1;
    if (next > 4) {
      next = 0;
    }

    this.setState({
      index: next
    });
  };

  render() {
    const current = PHOTOS[
      this.state.index % PHOTOS.length
    ];

    return (
      <View>
        <EventImage uri={current.uri} />
        <View style={styles.controls}>
          <VrButton onClick={this.prevPhoto} style={styles.button}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </VrButton>
          <View>
            <Text style={styles.title}>{current.title}</Text>
          </View>
          <VrButton onClick={this.nextPhoto} style={styles.button}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  controls: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 800,
    padding: 10,
  },
  title: {
    color: '#ffffff',
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#c0c0d0',
    borderRadius: 5,
    width: 40,
    height: 44,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
