import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { BottomCTA, IconButton } from "../components/ui/button"
import { useBottomSheet } from "../hooks/use-bottom-sheet"
import { Fragment } from "react"

export default function PageMain() {

    const [ref, control] = useBottomSheet();

    return (
        <Fragment>
            <SafeAreaView className="flex-1">
                <ScrollView className="p-2">
                    <View className="h-12 flex-row justify-end">
                        <IconButton onPress={control.open}>
                            <Text>+</Text>
                        </IconButton>
                    </View>
                </ScrollView>
                <BottomSheet
                    ref={ref}
                    index={-1}
                    onChange={control.handleSheetChanges}
                >
                    <BottomSheetView className="flex-1 items-center gap-4 p-4">
                        <Text>BottomSheet TEST</Text>
                        <BottomCTA onPress={control.close}>
                            <Text className="text-white">저장하기</Text>
                        </BottomCTA>
                    </BottomSheetView>
                </BottomSheet>
            </SafeAreaView>
        </Fragment>
    )
}
