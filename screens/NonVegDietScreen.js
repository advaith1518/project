import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ImageBackground,Image} from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
export default class NonVegDietScreen extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
     
        <View>
          <Header
            backgroundColor={'blue'}
            centerComponent={{
              text: 'Non veg diet screen',
              style: { color: '#fff', fontSize: 20, alignContent: 'center' },
            }}
          />
           <Image source = {require('../assets/non_veg_diet.jpg')} />
        
       </View>
      </SafeAreaProvider>
    );
  }
}
