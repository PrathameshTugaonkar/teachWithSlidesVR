import React from 'react';
import {
  View,
  asset,
  Environment,
  NativeModules,
} from 'react-360';
import VideoModule from 'VideoModule';

export default class Intro extends React.Component {
  introVideo = VideoModule.createPlayer('intro');

  componentDidMount() {
    Environment.setBackgroundImage(asset('chilling.jpg'), { rotateTransform: [{rotateY: '100deg'}] });

    this.introVideo.play({
      //source: {url: asset('./video/spi.mp4').uri},
      source: {url: asset('./video/spi.mp4').uri},
      muted: false,
      volume: 0.1
    });

    Environment.setScreen(
      'default', /* screen name */
      'intro', /* player unique id */
      'main', /* surface name */
      0, 0, 800, 450 /* relative position on the surface */
    );
  }

  componentWillUnmount() {
    Environment.setScreen(
      'default', /* screen name */
      null, /* player unique id */
      'main', /* surface name */
      0, 0, 800, 450 /* relative position on the surface */
    );
    this.introVideo.destroy();
  }

  render() {
    return (
      <View style={{width: 800,height: 450}} />
    );
  }
}
