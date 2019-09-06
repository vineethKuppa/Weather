import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, ScrollView, Button } from 'react-native';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            location: '',
        };
    }

    handleChangeText =(newText)=>{
        this.setState({
            value: newText
        })
    }

    onPressButton=(input) => {
        this.props.setLocation(input);
        this.setState({
            location: this.state.value
        })
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style = {styles.inputBar}
                        placeholder = {'Location'}
                        onChangeText = {(newText) => {this.handleChangeText(newText)}}
                        returnKeyType = "next"
                    />
                    <Button 
                        onPress={
                            // (input) => {this.onPressButton(input)}
                            () => {this.props.navigation.navigate('output')}
                        }
                        title="SUBMIT"  
                        color="#009933" 
                    />
                    <Text style={styles.underInputBar}>You are searching weather for {`${this.state.value}`}</Text>
                    <Text>{`${this.state.location}`}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',

    },
    inputBar: {
        height: 40,
        borderColor: 'rgb(0,100,100)',
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 30
    },
    underInputBar: {
        marginTop: 5,
        
    }
})