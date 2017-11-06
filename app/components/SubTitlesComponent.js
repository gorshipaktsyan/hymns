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
    FlatList,
    StatusBar
} from 'react-native'
import { Input } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class SubTitlesComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            height : 0,
            subNumber : 0,
            hymns: {}
        };
        this.renderRow = this.renderRow.bind(this);
    }
    
    handler(dataRow) {
        this.props.actions.searchHymns(dataRow._id);
        this.setState({
            subNumber: dataRow._id
        })
    }
    
    showHymn(item) {
        this.props.actions.searchHymn(item.number);
        Actions.hymn({title: 'hymn' + item.number})
    }
    
    renderRow(dataRow){
        const id = dataRow._id;
        return (
            <View>
                <TouchableOpacity style={styles.item} onPress={() => this.handler(dataRow)}>
                    <View style={{ borderWidth: 1, borderBottomWidth: 0, borderColor: '#ededed', padding: 5 }}>
                        <Text>{dataRow.name}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flex:1 }}>
                    {(this.state.subNumber === id) &&
                        (<FlatList
                            data={this.props.hymns}
                            renderItem={({item}) =>
                                <TouchableOpacity style={styles.item} onPress={() => this.showHymn(item)}>
                                    <View style={{ height:30, borderTopWidth: 1, marginLeft: 30}}>
                                        <Text style={{color:'black'}}>{item["first_string"]}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />)
                    }
                </View>
            </View>
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
                    dataSource={this.state.ds.cloneWithRows(this.props.subTitles)}
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

