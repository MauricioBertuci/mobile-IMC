import { Text, View } from "react-native";
import { styles } from "./style"

export default function ResultadoIMC(props){
    return (
        <View style={styles.title}>
            <Text style={styles.textMessageResultIMC}>{props.messageResultIMC}</Text>
            <Text style={styles.textResultIMC}>{props.ResultIMC}</Text>
        </View>
    )
}