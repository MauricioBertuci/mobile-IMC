import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import ResultIMC from "./ResultIMC"
import { styles } from "./style";
import TableIMC from "./TabelaIMC";

export default function Form(){
    // Estado dos componentes: 
    const [height, setHeight] = useState(null) // Armazena altura
    const [weight, setWeight] = useState(null) // Armazena peso
    const [messagemIMC, setMessagemIMC] = useState("Preencha o peso e altura") // Msg a exibir
    const [IMC, setIMC] = useState(null) // Resultado do IMC
    const [textButton, setTextButton] = useState("Calcular IMC") // Texto do botão, que muda dependendo da situação
    /**
     * "useState" cria uma variavel de estado e uma função para atualizar
     * Isso permite que, quando os valore mudam, o ReactNative atualize automaticamente a interface
     */

    function imcCalculator(){
        return setIMC ((weight / (height * height)).toFixed(2))
        /**
         * Faz o calculo do IMC
         * USa .tofixed(2) para manter apenas duas casa decimais
         * Atualiza o estado IMC com o resultado
         */
    }

    function validationIMC(){
        // Essa função serve como validação:
        if (weight != null && height != null){
            imcCalculator() // Calcular o IMC
            setHeight(null) // Limpa o campo altura
            setWeight(null) // Limpa o campo pesoF
            setMessagemIMC("Seu IMC é igual a: ") // Mostrar mensagem
            setTextButton("Calcular novamente") // Muda o texto do botão
            return;
        }
        setIMC(null); // Se faltar peso ou altura, sera o IMC
        setTextButton("Calcular o IMC") // Volta o texto original
        setMessagemIMC("Voce deve preencher o peso e a altura!") // Mostra menssagem de erro
    }


    return (
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setHeight} // Atualiza o estado da altura
                value={height} // Vincula o valor do TextInput ao estado
                placeholder="Ex: 1.75" 
                keyboardType="numeric" // tipo de teclado nemerico  
                />
        
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setWeight} // Atualiza o estado do peso
                value={weight} // Vincula o valor do TextInput ao estado
                placeholder="Ex: 73.50" 
                keyboardType="numeric" // tipo de teclado nemerico 
                />

                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => { 
                    validationIMC();
                }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultIMC={messagemIMC} ResultIMC={IMC}></ResultIMC>
            
            <TableIMC></TableIMC>
        </View>
    );
}