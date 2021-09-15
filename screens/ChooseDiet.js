import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';

export default class ChooseDiet extends React.Component {
  render() {
    return (
      <View style={{ marginBottom: 500 }}>
        <SafeAreaProvider>
          <View>
            <Header
              backgroundColor={'blue'}
              centerComponent={{
                text: 'choose diet',
                style: { color: '#fff', fontSize: 20, alignContent: 'center' },
              }}
            />
           
          </View>
          <View>
            <TouchableOpacity
            onPress={() => 
                this.props.navigation.navigate('VegDietScreen')
            }
              style={{
                backgroundColor: 'green',
                width: 160,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 80,
                marginTop: 100,
                borderRadius: 30,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                vegetarian
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => 
                this.props.navigation.navigate('NonVegDietScreen')
                
              }
              style={{
                backgroundColor: 'red',
                width: 160,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 80,
                marginTop: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                non vegetarian
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaProvider>
      </View>
    );
  }
}
