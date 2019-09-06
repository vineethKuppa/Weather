import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Input from "./Input";
import Weather from "./Weather";
import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
    Input: { screen: input },
    Weather: { screen: output },
})

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            location: ''
        }
    }
    updateLocation = (location) => {
        this.setState({
            location: location
        })
    }
    render() {
        return(
            <AppNavigator />
        )
    }
}