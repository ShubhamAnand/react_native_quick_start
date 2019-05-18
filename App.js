/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { createStackNavigator, createAppContainer,StackActions, NavigationActions} from "react-navigation";
import Tour from './components/Tour'
import Chart from './components/Chart'

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details')
          }}
        />
      </View>
    );
  }  
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
          title="Take Tour"
          onPress={() => this.props.navigation.navigate('Tour')}
         // onPress={() => this.props.navigation.goBack()}
        />
        <Text>Details Screen</Text>
      </View>
    );
  }  
}

class TourScreen extends React.Component {
  static navigationOptions = {
    title: 'Tour',
  };
  render() {
    return (
    <View>
      <Tour/>
      <Button
          title="Check Charts"
          onPress={() => this.props.navigation.navigate('Chart')}
         // onPress={() => this.props.navigation.goBack()}
        />
      </View>
    
    );
  }  
}

class ChartScreen extends React.Component {
  static navigationOptions = {
    title: 'Chart',
  };
  render() {
    return (
      <Chart/>
    
    );
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Tour:{
    screen: TourScreen,
  },
  Chart:{
    screen: ChartScreen,
  },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
});

const AppContainer = createAppContainer(AppNavigator);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {  
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
