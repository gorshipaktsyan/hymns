import React, { Component } from 'react';
import  {
    PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
    TextInput,
    Image,
    StatusBar
} from 'react-native'
import { Input } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state={
            number: '',
            searchString: '',
        };
    }
    
    searchHymnByNumber = () => {
        this.props.actions.searchHymn(this.state.number);
        Actions.hymn({title: 'hymn ' + this.state.number})
    };
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#5E8D48"
                    barStyle="light-content"
                />
                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                    <View style={{flex:1}}>
                        <TextInput
                            style={{height: 40, borderColor: 'black', borderWidth: 1, backgroundColor: 'white'}}
                            onChangeText={(number) => this.setState({number})}
                            value={this.state.number}
                            keyboardType="numeric"
                            placeholder="search by number"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <TouchableOpacity style={styles.item} onPress={this.searchHymnByNumber}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={ require('./../assets/search.png') }
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row' }}>
                    <View style={{flex:1}}>
                        <TextInput
                            style={{height: 40, borderColor: 'black', borderWidth: 1, backgroundColor: 'white'}}
                            onChangeText={(searchString) => this.setState({searchString})}
                            value={this.state.searchString}
                            placeholder="search by string"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
                        <TouchableOpacity style={styles.item} onPress={this.searchHymnByNumber}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={ require('./../assets/search.png') }
                            />
                        </TouchableOpacity>
                    </View>
                </View>
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
                paddingTop: 64
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
