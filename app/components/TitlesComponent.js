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
    ListView,
    StatusBar
} from 'react-native'
import { Input } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class TitlesComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
        this.renderRow = this.renderRow.bind(this);
    }
    
    handler(dataRow) {
        this.props.actions.searchSubTitles(dataRow._id);
        Actions.subTitles({});
    }
    
    renderRow(dataRow){
        return (
            <TouchableOpacity style={styles.item} onPress={() => this.handler(dataRow)}>
                <View style={{ borderWidth: 1, borderBottomWidth: 0, borderColor: '#ededed', padding: 5 }}>
                    <Text>{dataRow.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#5E8D48"
                    barStyle="light-content"
                />
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.ds.cloneWithRows(this.props.titles)}
                    renderRow={this.renderRow}
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
                paddingTop: 10
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
