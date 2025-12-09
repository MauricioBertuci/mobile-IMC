import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tableContainer:{
        marginTop: 20,
        width: "90%",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#f9f9f9"
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        padding: 10,
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: "#ccc" 
    },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: "#dcdcdc",
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: "center",
        fontSize: 14,
    },
    tableRow: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: "#ccc"
    },
    headerCell: {

    },
})