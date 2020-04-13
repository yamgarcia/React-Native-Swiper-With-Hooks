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
