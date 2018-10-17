import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { fonts, utilStyles } from '../api/constants';
import appImages from '../api/preloadImages';

const headerImage = __DEV__ ? 'rabbitDev' : 'rabbitProd';
const headerTitle = (
  <View style={{ flex: 1 }}>
    <Image
      style={{ alignSelf: 'center', height: 40, width: 40 }}
      source={appImages[headerImage]}
    />
  </View>
);

const SettingsScreen = () => (
  <View style={utilStyles.container}>
    <ScrollView contentContainerStyle={utilStyles.contentContainer}>
      <Text style={utilStyles.text}>Settings Content Area</Text>
      <Text style={{ fontFamily: fonts.pacifico, fontSize: 20, marginTop: 16 }}>
        Pacifico Font Example
      </Text>
    </ScrollView>
  </View>
);

SettingsScreen.navigationOptions = {
  headerLeft: (
    <View style={{ flex: 1 }}>
      <Text>left</Text>
    </View>
  ),
  headerRight: (
    <View style={{ flex: 1 }}>
      <Text>right</Text>
    </View>
  ),
  // title: 'Settings'
  headerTitle
};

/*
// shoutout brent: https://snack.expo.io/H105kxsG7
const shouldShowBackButton = stackRouteNavigation => {
  const parent = stackRouteNavigation.dangerouslyGetParent();
  return parent.state.routes.indexOf(stackRouteNavigation.state) > 0;
};

SettingsScreen.navigationOptions = ({ navigation }) => ({

headerLeft: !shouldShowBackButton(navigation) ? (
  <View style={{ flex: 1 }}>
    <Text>left</Text>
  </View>
) : null,
*/

export default SettingsScreen;
