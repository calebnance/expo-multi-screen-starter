import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { utilStyles } from '../api/constants';

// grab component
import NavigationBack from '../components/NavigationBack';

const MultiLevel2Screen = () => (
  <View style={utilStyles.container}>
    <ScrollView contentContainerStyle={utilStyles.contentContainer}>
      <Text style={utilStyles.text}>Multi Screens :: Level 2 Content Area</Text>
    </ScrollView>
  </View>
);

MultiLevel2Screen.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationBack navigation={navigation} />,
  headerRight: <View style={{ flex: 1 }} />,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'Level 2'
});

export default MultiLevel2Screen;
