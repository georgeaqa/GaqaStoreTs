import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

export const Icons = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

interface CustomIconProps {
  type: React.ComponentType<any>;
  name: string;
  color?: string;
  size?: number;
  style?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  type: IconComponent,
  name,
  color,
  size = 24,
  style,
}) => {
  const fontSize = 24;
  return (
    <>
      {IconComponent && name && (
        <IconComponent
          name={name}
          size={size || fontSize}
          color={color}
          style={style}
        />
      )}
    </>
  );
};

export default CustomIcon;
