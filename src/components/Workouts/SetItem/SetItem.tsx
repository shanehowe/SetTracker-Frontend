import { Animated, StyleSheet, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { IconButton, Text, useTheme } from "react-native-paper";
import { ExerciseSet } from "../../../types";

interface SetItemProps {
  set: ExerciseSet;
}

export const SetItem = ({ set }: SetItemProps) => {
  const theme = useTheme();

  const renderAction = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
    dragInputRange: number[],
    icon: string,
    iconColor: string,
    additionalStyles?: object
  ) => {
    const trans = dragX.interpolate({
      inputRange: dragInputRange,
      outputRange: [-20, 0, 0, 1],
    });
  
    const opacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
  
    return (
      <Animated.View
        style={[
          styles.animatedView,
          { transform: [{ translateX: trans }], opacity },
          additionalStyles,
        ]}
      >
        <IconButton icon={icon} size={20} iconColor={iconColor} />
      </Animated.View>
    );
  };
  
  const renderLeftAction = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    return renderAction(progress, dragX, [0, 50, 100, 101], 'delete', theme.colors.error, { paddingLeft: 20 });
  };
  
  const renderRightAction = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    return renderAction(progress, dragX, [-20, 50, 100, 101], 'refresh', theme.colors.primary);
  };

  return (
    <Swipeable
      dragOffsetFromLeftEdge={50}
      renderLeftActions={renderLeftAction}
      renderRightActions={renderRightAction}
    >
      <View testID="set-item" style={styles.setItem}>
        <View>
          <Text>{set.timeStamp}</Text>
        </View>
        <View>
          <Text>{set.weight}KG</Text>
        </View>
        <View>
          <Text>{set.reps} reps</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  setItem: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  },
  animatedView: {
    justifyContent: "center",
    alignItems: "flex-start",
    color: "white",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
