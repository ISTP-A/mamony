import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export default function AddExpendScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <Button onPressOut={() => navigation.goBack()}>GO BACK</Button>
        </View>
    )
}