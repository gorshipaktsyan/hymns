import React, { Component } from 'react';
import {
    PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux';
import SearchComponent from "./containers/SearchContainer";
import HymnComponent from "./containers/HymnContainer";
import TitlesComponent from "./containers/TitlesContainer";
import SubTitlesComponent from "./containers/SubTitlesContainer";

export default class  extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        let {openDrawer} = this.props;
        
        return (
            <View style={{ flex: 1}}>
                <Router>
                    <Scene key="root">
                        <Scene key="search"
                               component={SearchComponent}
                               title="Меню"
                               titleStyle={{color: '#ffffff'}}
                               hideNavBar={false}
                               navigationBarStyle={{backgroundColor: '#1F1F1F', borderBottomColor: '#F2F2F2'}}
                               backButtonTextStyle={{color: '#007AFF', alignSelf: 'center', padding: 0}}
                               leftButtonImage={require('./assets/menu.png')}
                               onLeft={openDrawer}
                               leftButtonIconStyle={{height:30, width: 40, resizeMode: 'contain',}}
                               initial={true}
                        />
                        <Scene key="hymn"
                               component={HymnComponent}
                               title="Hymn 1"
                               titleStyle={{color: '#ffffff'}}
                               hideNavBar={false}
                               navigationBarStyle={{backgroundColor: '#1F1F1F', borderBottomColor: '#F2F2F2'}}
                               backButtonTextStyle={{color: '#007AFF', alignSelf: 'center', padding: 0}}
                               leftButtonImage={require('./assets/menu.png')}
                               onLeft={openDrawer}
                               leftButtonIconStyle={{height:30, width: 40, resizeMode: 'contain',}}
                               initial={false}
                        />
                        <Scene key="titles"
                               component={TitlesComponent}
                               title="titles"
                               titleStyle={{color: '#ffffff'}}
                               hideNavBar={false}
                               navigationBarStyle={{backgroundColor: '#1F1F1F', borderBottomColor: '#F2F2F2'}}
                               backButtonTextStyle={{color: '#007AFF', alignSelf: 'center', padding: 0}}
                               leftButtonImage={require('./assets/menu.png')}
                               onLeft={openDrawer}
                               leftButtonIconStyle={{height:30, width: 40, resizeMode: 'contain',}}
                               initial={false}
                        />
                        <Scene key="subTitles"
                               component={SubTitlesComponent}
                               title="subTitles"
                               titleStyle={{color: '#ffffff'}}
                               hideNavBar={false}
                               navigationBarStyle={{backgroundColor: '#1F1F1F', borderBottomColor: '#F2F2F2'}}
                               backButtonTextStyle={{color: '#007AFF', alignSelf: 'center', padding: 0}}
                               leftButtonImage={require('./assets/menu.png')}
                               onLeft={openDrawer}
                               leftButtonIconStyle={{height:30, width: 40, resizeMode: 'contain',}}
                               initial={false}
                        />
                    </Scene>
                </Router>
            </View>
        )
    }
}
