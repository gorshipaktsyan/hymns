import React, { Component } from 'react';
import  {
    PropTypes,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Platform,
    TextInput,
    WebView,
    StatusBar
} from 'react-native'
import { Input } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class HymnComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            hymn: ""
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#5E8D48"
                    barStyle="light-content"
                />
                <WebView scalesPageToFit={false}
                    source={{html: this.props.hymn}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCe8',
        ...Platform.select({
            ios: {
                paddingTop: 0
            },
            android: {
                paddingTop: 54
            }
        })
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
});
