import { Fragment } from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { IconButton } from "../components/ui/button"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack";

export default function MainScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <Fragment>
            <SafeAreaView className="flex-1">
                <ScrollView className="p-2">
                    <View className="h-12 flex-row justify-end">
                        <IconButton onPress={() => navigation.push('add.expend')}>
                            <Text>+</Text>
                        </IconButton>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
}