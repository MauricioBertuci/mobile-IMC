import { Text, View } from "react-native"
import { styles } from "./style"

export default function TableIMC() {
    return (
        <View style={styles.tableContainer}>
            <Text style={styles.title}>Tabela de Calissifcação do IMC</Text>

            <View style={styles.tableHeader}>
                <Text style={[styles.cell, styles.headerCell]}>IMC</Text>
                <Text style={[styles.cell, styles.headerCell]}>Classificação</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>Menor que 18.5</Text>
                <Text style={styles.cell}>Abaixo do peso</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>18.5 - 24.9</Text>
                <Text style={styles.cell}>Peso normal</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>25.0 - 29.9</Text>
                <Text style={styles.cell}>Excesso de peso</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>30.0 - 34.9</Text>
                <Text style={styles.cell}>Obesidade classe I</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>35.0 - 39.9</Text>
                <Text style={styles.cell}>Obesidade classe II</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>Maior ou igual a 40</Text>
                <Text style={styles.cell}>Obesidade classe III</Text>
            </View>
           
        </View>
    )
}