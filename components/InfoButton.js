import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  VrButton,
  Animated,
  NativeModules,
} from 'react-360';

const {AudioModule} = NativeModules;

const CLICK_SOUND = asset('./audio/menu-click.wav');
const FOCUS_SCALE = 1.3;

export default class InfoButton extends React.Component {
  static defaultProps = {
    width: 180,
    text: '',
  };

  // This component has example to show how animation works
  // You can check the doc: https://facebook.github.io/react-native/docs/0.49/animated#docsNav
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      scaleAnim: new Animated.Value(0), // initial a value for doing animation
    };
  }

  _focus = () => {
    // start an animation
    Animated.timing(this.state.scaleAnim, {
      toValue: 1,
      duration: 300,
    }).start();
    this.setState({hasFocus: true});
  };

  _blur = () => {
    // start an animation
    Animated.timing(this.state.scaleAnim, {
      toValue: 0,
      duration: 300,
    }).start();
    this.setState({hasFocus: false});
  };

  _click = () => {
    // input handling
    this.props.onClick && this.props.onClick();
  };

  render() {
    return (
      <View
        style={[
          styles.wrapper,
          this.props.style,
          {width: this.props.width * FOCUS_SCALE}
        ]}>
        <VrButton
          onClick={this._click} //this event trigger when click the view
          onExit={this._blur} //this event trigger when cursor move out of the view
          onEnter={this._focus} //this event trigger when cursor move into of the view
          onClickSound={CLICK_SOUND}
          onEnterSound={CLICK_SOUND}
          onExitSound={CLICK_SOUND}
          onLongClickSound={CLICK_SOUND}
          >
          <Animated.View
            style={[
              styles.button,
              this.state.hasFocus && styles.buttonFocused,
              {
                // With this the width of the this view
                // is animated with the value of scaleAnim
                // by an interpolation
                width: this.state.scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [this.props.width, this.props.width * FOCUS_SCALE],
                }),
              }]}>
              <Image
                style={styles.icon}
                source={this.props.source} />
              <Text style={styles.text}>
                {this.props.text}
              </Text>
          </Animated.View>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    height: 70,
  },
  buttonFocused: {
    backgroundColor: '#18011f',
    borderColor:'white',
  },
  icon: {
    padding: 10,
    height: '100%',
    aspectRatio: 1,
  },
  iconFocused: {
    tintColor: 'white',
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
});
