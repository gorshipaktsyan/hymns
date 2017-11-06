import React, { Component } from 'react';
import {
    PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import {Actions} from 'react-native-router-flux';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
    }
    
    handler = (action) => {
        
        if(action === 'titles') {
            this.props.actions.searchTitles();
            this.props.closeDrawer();
            Actions.titles({});
            return
        }
        
        this.props.closeDrawer();
        Actions.search({})
    };
    
    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.item} onPress={() => this.handler()}>
                    <View>
                        <Text style={styles.menuText}>Որոնում</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => this.handler('titles')}>
                    <View>
                        <Text style={styles.menuText}>Բովանդակություն</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={this.handler}>
                    <View>
                        <Text style={styles.menuText}>Այբբենական ցուցանիշ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={this.handler}>
                    <View>
                        <Text style={styles.menuText}>Պատմություն</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={this.handler}>
                    <View>
                        <Text style={styles.menuText}>Նախաբան</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={this.handler}>
                    <View>
                        <Text style={styles.menuText}>Օգնություն</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={this.handler}>
                    <View>
                        <Text style={styles.menuText}>Կարգավորումներ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={this.handler}>
                    <View>
                        <Text style={styles.menuText}>Ծրագրի մասին</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
    },
    controlText: {
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    },
    item: {
        borderBottomWidth: 1,
        padding: 10,
    },
    menuText: {
        color: '#ffffff'
    }
});
