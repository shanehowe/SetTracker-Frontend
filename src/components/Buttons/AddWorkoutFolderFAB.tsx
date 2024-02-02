import { FAB } from "react-native-paper";
import { StyleSheet } from "react-native";

interface AddWorkoutFolderFABProps {
    onPress: () => void;
}

export const AddWorkoutFolderFAB = ({ onPress }: AddWorkoutFolderFABProps) => {
    return <FAB icon="folder-plus" onPress={onPress} style={styles.fabStyle} />;
}

const styles = StyleSheet.create({
    fabStyle: {
        position: 'absolute',
        margin: 16,
        bottom: 20,
        alignSelf: 'center',
    },
});