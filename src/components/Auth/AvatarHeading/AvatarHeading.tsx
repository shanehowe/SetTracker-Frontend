import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Text, useTheme } from "react-native-paper";

interface AvatarHeadingProps {
    title: string,
    icon: string,
};

export const AvatarHeading = ({ title, icon }: AvatarHeadingProps) => {
    const theme = useTheme();

    return (
        <View style={styles.avatarSection} testID="container-view">
          <Avatar.Icon
            style={{
              backgroundColor: theme.colors.primary,
              alignSelf: "center",
              flex: 0,
              marginBottom: 20,
            }}
            size={100}
            icon={icon}
            testID="avatar-icon"
          />
          <Text variant="titleMedium" style={styles.text} testID="title">
            {title}
          </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    avatarSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        marginVertical: 10,
        textAlign: "center",
    },
});