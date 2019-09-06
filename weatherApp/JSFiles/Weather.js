import React, {Component} from 'react';
import { View, Text } from 'react-native';
// import getWeatherInfo from "./WeatherController";

export default class Weather extends Component {
    render() {
        return(
            <Text style={StyleSheet.container}>Second Screen</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
    }
})