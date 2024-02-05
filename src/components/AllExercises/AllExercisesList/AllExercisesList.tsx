import { Card, Divider, List, useTheme } from "react-native-paper";

export const AllExerciseList = () => {
  const theme = useTheme();

  return (
    <Card
      testID="all-exercises-card"
      mode="contained"
    >
      <List.Section
        testID="all-exercises-list"
      >
        <List.Item title="Dumbbell Bench Press"
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <Divider
          style={{
            width: "100%",
            alignSelf: "center",
            backgroundColor: theme.colors.outline,
          }}
        />
        <List.Item title="Barbell Squat"
          right={(props) => <List.Icon {...props}  icon="chevron-right" />}
        />
        <Divider
          style={{
            width: "100%",
            alignSelf: "center",
            backgroundColor: theme.colors.outline,
          }}
        />
        <List.Item title="Latt Pull Down"
          right={(props) => <List.Icon {...props}  icon="chevron-right" />}
        />
      </List.Section>
    </Card>
  );
};