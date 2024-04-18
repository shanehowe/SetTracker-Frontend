import { Animated, StyleSheet, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { IconButton, Text, useTheme } from "react-native-paper";
import { ExerciseSet } from "../../../types";
import { formatUtcDateToLocalTimeString } from "../../../utils/dateUtils";
import { useAddSetMutation } from "../../../hooks/useAddSetMutation";
import { useRef } from "react";
import { useSnack } from "../../../contexts/SnackbarContext";
import { useDeleteSetMutation } from "../../../hooks/useDeleteSetMutation";

interface SetItemProps {
  set: ExerciseSet;
}

export const SetItem = ({ set }: SetItemProps) => {
  const theme = useTheme();
  const swipeableRef = useRef<Swipeable | null>(null);
  const snack = useSnack();

  const addSetOnSuccess = (createdSet: ExerciseSet) => {
    closeSwipeable();
    snack.success("Set logged successfully");
  }

  const addSetOnError = (error: Error) => {
    console.error(error.message);
  }

  const addSetMutation = useAddSetMutation(
    addSetOnSuccess,
    addSetOnError
  );

  const deleteSetOnSuccess = () => {
    closeSwipeable();
    snack.success("Set has been removed");
  }

  const deleteSetOnError = (error: Error) => {
    snack.error("Unable to delete set at this time.");
    console.error(error);
  }

  const deleteSetMutation = useDeleteSetMutation(
    deleteSetOnSuccess,
    deleteSetOnError
  );

  const closeSwipeable = () => {
    swipeableRef.current?.close();
  }

  const handleAddSetPress = () => {
    addSetMutation.mutate({
      exerciseId: set.exerciseId,
      weight: set.weight,
      reps: set.reps
    });
  }

  const handleDeleteSetPress = () => {
    deleteSetMutation.mutate(set.id);
  }

  const renderAction = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
    dragInputRange: number[],
    drageOutputRange: number[],
    icon: string,
    iconColor: string,
    additionalStyles?: object,
    onPressHandler?: () => void
  ) => {
    const trans = dragX.interpolate({
      inputRange: dragInputRange,
      outputRange: drageOutputRange,
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
        <IconButton icon={icon} size={20} iconColor={iconColor} onPress={onPressHandler} />
      </Animated.View>
    );
  };

  const renderLeftAction = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    return renderAction(
      progress,
      dragX,
      [0, 50, 100, 101],
      [-20, 0, 0, 1],
      "delete",
      theme.colors.error,
      styles.leftView,
      handleDeleteSetPress
    );
  };

  const renderRightAction = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    return renderAction(
      progress,
      dragX,
      [-20, 50, 100, 101],
      [0, 0, 0, 1],
      "refresh",
      theme.colors.primary,
      styles.rightView,
      handleAddSetPress
    );
  };

  return (
    <Swipeable
      ref={swipeableRef}
      dragOffsetFromLeftEdge={50}
      renderLeftActions={renderLeftAction}
      renderRightActions={renderRightAction}
    >
      <View testID="set-item" style={styles.setItem}>
        <View>
          <Text>{formatUtcDateToLocalTimeString(set.dateCreated)}</Text>
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
    color: "white",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  rightView: {
    alignItems: "flex-start",
  },
  leftView: {
    alignItems: "flex-end",
    paddingLeft: 20
  }
});
