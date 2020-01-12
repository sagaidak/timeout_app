import React from 'react';
import {View, Text, Button} from 'react-native';
import HeaderNavBar from './Common/HeaderNavBar';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <HeaderNavBar/>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go to ProductList"
                    onPress={() => this.props.navigation.navigate('ProductList')}
                />
            </View>
        );
    }
}



export default HomeScreen;