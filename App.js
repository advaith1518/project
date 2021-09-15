import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import ChooseDiet from './screens/ChooseDiet';

import NonVegDietScreen from './screens/NonVegDietScreen';
import VegDietScreen from './screens/VegDietScreen';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({

  ChooseDiet:{screen: ChooseDiet},
  VegDietScreen: {screen: VegDietScreen},
  NonVegDietScreen: {screen: NonVegDietScreen},
});
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
