import { View, Modal, Text } from "react-native";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";
import React from "react";

type CustomModalProps = {
  visible: boolean;
  onPressOk: () => void;
  onPressNo: () => void;
  onPressCloseModal: () => void;
  modalMessage: string;
};

export default function CustomModal({
  visible,
  onPressOk,
  onPressNo,
  onPressCloseModal,
  modalMessage,
}: Partial<CustomModalProps>) {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View className="bg-black/20 flex-1 items-center justify-center">
        <View className="w-[80%] aspect-4/3 m- bg-white rounded-3xl p-2 items-center justify-center gap-3 border-2 border-black">
          <CustomText className="text-center">{modalMessage}</CustomText>
          {onPressOk && <CustomButton onPress={onPressOk}>SI</CustomButton>}
          {onPressNo && <CustomButton onPress={onPressNo}>NO</CustomButton>}
          {onPressCloseModal && (
            <CustomButton onPress={onPressCloseModal}>Cerrar</CustomButton>
          )}
        </View>
      </View>
    </Modal>
  );
}
