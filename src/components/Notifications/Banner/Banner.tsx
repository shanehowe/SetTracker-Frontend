import { Icon, Banner as PaperBanner } from "react-native-paper";
import { useBanner } from "../../../contexts/BannerContext";

export const Banner = () => {
  const { state, hide } = useBanner();
  return (
    <PaperBanner
    icon={({ size }) => (
      <Icon source="alert-circle" size={size} />
    )}
      visible={state.visible}
      actions={[
        {
          label: "Dismiss",
          onPress: hide,
        },
      ]}
    >
      {state.text}
    </PaperBanner>
  );
};
