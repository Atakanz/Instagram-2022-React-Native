import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Dimensions} from 'react-native';
// import post_data from './post_data.json';
// import story_data from './story_data.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const App = () => {
  const firstIcon = <Icon name="plus-box" size={30} color="black" />;
  const middleIcon = <Icon name="heart-outline" size={30} color="black" />;
  const lastIcon = <Icon name="facebook-messenger" size={30} color="black" />;
  return (
    <SafeAreaView style={styles.directionEnabled}>
      <View style={styles.navbar}>
        <View>
          <Image style={styles.logo} source={require('./photos/logo.png')} />
        </View>
        <View style={styles.navbarIcons}>
          <View>
            <View>{firstIcon}</View>
          </View>
          <View style={styles.middleIcon}>
            <View>{middleIcon}</View>
          </View>
          <View>
            <View>{lastIcon}</View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: Dimensions.get('window').height / 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  directionEnabled: {
    flex: 1,
  },
  logo: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 17,
    marginLeft: 10,
  },
  navbarIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 10,
  },
  middleIcon: {
    marginHorizontal: 18,
  },
});
export default App;
