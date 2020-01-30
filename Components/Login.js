import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            passwd: "",
        };
    }

    _userLogin() {
        let username = this.state.username;
        let passwd = this.state.passwd;

        if(username == "username" && passwd == "password") {
            this.props.navigation.navigate('Calculator');
        } else {
            alert('Wrong Credentials');
        }

    }

    render() {
        return(
            <View>
                <TextInput
                    style= {{ paddingTop: 50 }}
                    placeholder= 'Username'
                    onChangeText={(username) => this.setState({username})}
                    value= {this.state.username}
                />
                <TextInput
                    placeholder= 'Password'
                    onChangeText={(passwd) => this.setState({passwd})}
                    value= {this.state.passwd}
                />
                <Button onPress= {()=>this._userLogin()} title= 'Login' color="#841584"/>
            </View>
        );
    }

}