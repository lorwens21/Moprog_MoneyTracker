import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'

const TextInput = ({title, placeholder, ...rest}) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <TextInputRN style={styles.input} placeholder={placeholder} {...rest} />
        </View>
    )
}

export default TextInput;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8,
        paddingLeft: 10,
        paddingHorizontal: 10,
    },
});
