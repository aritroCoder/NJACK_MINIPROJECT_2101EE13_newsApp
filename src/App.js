import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import News from './screens/News';
import Search from './screens/Search';
import SearchBar from './utils/SearchBar';
import { navigationRef } from './utils/RootNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Headlines">
        <Stack.Screen name="Headlines" component={Home} options={{
          // title: 'TOP HEADLINES',
          headerTitle: () => <SearchBar />,
          headerStyle:{
            backgroundColor: '#F8B400',
          },
        }}/>
        <Stack.Screen name="News" component={News} options={{
          title: 'NEWS',
          headerStyle:{
            backgroundColor: '#125B50',
          },
          headerTintColor: '#fff'
        }}/>
        <Stack.Screen name="Search" component={Search} options={{
          title: 'Search Results',
          headerStyle:{
            backgroundColor: '#00FFC6',
          },
          headerTintColor: '#000'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;