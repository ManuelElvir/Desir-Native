import { StyleSheet, Dimensions } from "react-native";

const {width, height} =  Dimensions.get("screen")
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 60,
        paddingHorizontal: 30
    },
    image: { 
        width: width-80, 
        maxWidth: 500, 
        height: width-80
    },
    icon: { 
        width: 24,
        height: 24,
        marginEnd: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "left",
        width: '100%',
        marginBottom: 20
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    line2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    bar: {
        backgroundColor: '#9999',
        height: 1,
        flex: 1
    }
});

export default styles