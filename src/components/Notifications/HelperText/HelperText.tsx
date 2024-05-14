import { HelperText as PaperHelperText } from "react-native-paper";

interface HelperTextProps {
  text: string;
  visible: boolean;
  type?: "error" | "info";
}

export const HelperText = ({ text, visible, type }: HelperTextProps) => {
  return (
    <PaperHelperText
      type={type || "error"}
      visible={visible}
      testID="helper-txt"
    >
      {text}
    </PaperHelperText>
  );
};
