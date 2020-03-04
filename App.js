import React, { Component } from 'react'
import { View, StyleSheet, Text, Animated } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(1),
      endValue: 1.5,
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.spring(this.state.startValue, {
        toValue: this.state.endValue,
        friction: 1,
      }),
      { iterations: 10 },
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.headerText}>Looping Animations in React Native</Text>
        </View>
        <View style={styles.screen}>
          <Animated.View
            style={[
              styles.square,
              {
                transform: [
                  {
                    scale: this.state.startValue,
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appHeader: {
    height: '8.5%',
    alignItems: 'center',
    backgroundColor: '#38ada9'
  },
  headerText: {
    marginTop: '4%',
    fontWeight: 'bold',
    fontSize: 21,
    color: 'snow'
  },
  square: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  screen: {
    alignItems: 'center',
    marginTop: '70%'
  }
})