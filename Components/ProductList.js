import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';
import {categoryChanged, getCategory} from "../actions";

class ProductList extends Component {
    buttonPress = () => {
        this.props.getCategory('Pizza');
    };

    render() {
        return(
            <View>
                <Button
                    onPress={this.buttonPress}
                    title='Pizza'
                />
                {this.props.products.map(p => <Text key={p.name}>{p.name}</Text>)}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        categoryName: state.category.categoryName,
        products: state.category.products
    }
};

export default connect(mapStateToProps, {categoryChanged, getCategory})(ProductList);