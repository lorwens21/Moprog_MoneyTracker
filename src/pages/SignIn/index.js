import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Button, Header, TextInput, Gap} from '../../components';

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
           <Header title="Sign In" />
           <View style={styles.conterWrapper}>
            <TextInput title="Email" placeholder="Type your email address" />
            <Gap height={16} />
            <TextInput title="Password" placeholder="Type your password" />
            <Gap height={24} />
            <Button title="Sign In" />
            <Gap height={12} />
            <Button title="Create New Account" color="#8D92A3" textColor="white" 
             onPress={() => navigation.navigate('SignUp')}
            />
           </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    conterWrapper: {
        flex: 1,
       backgroundColor:'white',
       paddingHorizontal: 24, 
       paddingTop: 26,
       paddingBottom: 24,
    },
});
