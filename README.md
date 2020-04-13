# React Native code to set a 4-directional swipe gestures using hooks:

### Installation:

`npm i -S react-native-swipe-gestures`
`expo install expo-constants`

## CODE USING HOOKS AND FLAT ARROWS:

```javascript
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import Constants from "expo-constants";

const SomeComponent = () => {
  const [myText, setMyText] = useState("Swipe me");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [gestureName, setGestureName] = useState("none");

  const onSwipeUp = (gestureState) => {
    setMyText("You swiped up!");
  };

  const onSwipeDown = (gestureState) => {
    setMyText("You swiped down!");
  };

  const onSwipeLeft = (gestureState) => {
    setMyText("You swiped left!");
  };

  const onSwipeRight = (gestureState) => {
    setMyText("You swiped right!");
  };

  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    setGestureName(gestureName);
    switch (gestureName) {
      case SWIPE_UP:
        setBackgroundColor("red");
        break;
      case SWIPE_DOWN:
        setBackgroundColor("green");
        break;
      case SWIPE_LEFT:
        setBackgroundColor("lightblue");
        break;
      case SWIPE_RIGHT:
        setBackgroundColor("yellow");
        break;
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: Constants.statusBarHeight + 20,
      backgroundColor: backgroundColor,
    },
  });

  return (
    <View style={styles.container}>
      <GestureRecognizer
        onSwipe={(direction, state) => onSwipe(direction, state)}
        onSwipeUp={(state) => onSwipeUp(state)}
        onSwipeDown={(state) => onSwipeDown(state)}
        onSwipeLeft={(state) => onSwipeLeft(state)}
        onSwipeRight={(state) => onSwipeRight(state)}
        config={config}
        style={{ styles }}
      >
        <Text style={{ fontSize: 34 }}>{myText}</Text>
        <Text>
          onSwipe callback received gesture:{" "}
          {gestureName ? gestureName : "Try solving this bug"}
        </Text>
      </GestureRecognizer>
    </View>
  );
};

export default SomeComponent;
```

## Issues:

1. Swiper only works on the text

  - Try to make it able to recognize a swipe anywhere in the screen;
  - Try to focus the swipable area on specific areas (E.g. Images);

2. Some times the swiper won't work and there will be no gesture name

  - When the bug is (apparently randomly) triggered a message will be rendered;
  - The bug happens to swipes in any direction;

# Original React class component

## Check the original code using React classes below:

Original repository: https://github.com/glepur/react-native-swipe-gestures

```javascript
import React, { Component } from "react";
import { View, Text } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: "I'm ready to get swiped!",
      gestureName: "none",
      backgroundColor: "#fff",
    };
  }

  onSwipeUp(gestureState) {
    this.setState({ myText: "You swiped up!" });
  }

  onSwipeDown(gestureState) {
    this.setState({ myText: "You swiped down!" });
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: "You swiped left!" });
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: "You swiped right!" });
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({ backgroundColor: "red" });
        break;
      case SWIPE_DOWN:
        this.setState({ backgroundColor: "green" });
        break;
      case SWIPE_LEFT:
        this.setState({ backgroundColor: "blue" });
        break;
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: "yellow" });
        break;
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor,
        }}
      >
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
    );
  }
}

export default SomeComponent;
```

## Config

Can be passed within optional `config` property.

| Params                     |  Type  | Default | Description                                                                                                                        |
| -------------------------- | :----: | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| velocityThreshold          | Number | 0.3     | Velocity that has to be breached in order for swipe to be triggered (`vx` and `vy` properties of `gestureState`)                   |
| directionalOffsetThreshold | Number | 80      | Absolute offset that shouldn't be breached for swipe to be triggered (`dy` for horizontal swipe, `dx` for vertical swipe)          |
| gestureIsClickThreshold    | Number | 5       | Absolute distance that should be breached for the gesture to not be considered a click (`dx` or `dy` properties of `gestureState`) |

## Methods

#### onSwipe(gestureName, gestureState)

| Params       |  Type  | Description                              |
| ------------ | :----: | ---------------------------------------- |
| gestureName  | String | Name of the gesture (look example above) |
| gestureState | Object | gestureState received from PanResponder  |

#### onSwipeUp(gestureState)

| Params       |  Type  | Description                             |
| ------------ | :----: | --------------------------------------- |
| gestureState | Object | gestureState received from PanResponder |

#### onSwipeDown(gestureState)

| Params       |  Type  | Description                             |
| ------------ | :----: | --------------------------------------- |
| gestureState | Object | gestureState received from PanResponder |

#### onSwipeLeft(gestureState)

| Params       |  Type  | Description                             |
| ------------ | :----: | --------------------------------------- |
| gestureState | Object | gestureState received from PanResponder |

#### onSwipeRight(gestureState)

| Params       |  Type  | Description                             |
| ------------ | :----: | --------------------------------------- |
| gestureState | Object | gestureState received from PanResponder |
