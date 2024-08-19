import { View, Modal, ModalProps } from "react-native";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";
import React from "react";

type CustomModalProps = ModalProps & {
  onPressOk: () => void;
  onPressNo: () => void;
  onPressCloseModal: () => void;
  modalMessage: string;
};

export default function CustomModal({
  onPressOk,
  onPressNo,
  onPressCloseModal,
  modalMessage,
  ...props
}: Partial<CustomModalProps>) {
  return (
    <Modal transparent={true} animationType="fade" {...props}>
      <View className="bg-black/20 flex-1 items-center justify-center">
        <View className=" w-[80%]  bg-white rounded-3xl p-4 items-center justify-center gap-3 border-2 border-black">
          <CustomText className="text-center">{modalMessage}</CustomText>
          <View className="w-[50%] flex-row gap-2 justify-center ">
            {onPressOk && (
              <CustomButton
                classNameButton="bg-success"
                title="SI"
                classNameTitle="text-white"
                onPress={onPressOk}
              />
            )}
            {onPressNo && (
              <CustomButton
                classNameButton="bg-primary"
                title="NO"
                classNameTitle="text-white"
                onPress={onPressNo}
              />
            )}
          </View>
          {onPressCloseModal && (
            <CustomButton
              classNameButton="bg-primary"
              title="Cerrar"
              classNameTitle="text-white"
              onPress={onPressCloseModal}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}
