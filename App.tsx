import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Toast from 'react-native-toast-message';
import toastConfig from './constants/toastConfig';
import AuthentificationContext from './context/AuthentificationContext';
import { useState } from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [authData, setAuthData] = useState({
    message: "",
    token: {
      access_token: "",
      token_type: ""
    },
    user: {
      uuid: "",
      email: "",
      firstname: "",
      phonenumber: "",
      lastname: "",
      photo: "",
      date_added: new Date(),
      date_modified: new Date()
    }
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthentificationContext.Provider value={{ authData, setAuthData }}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <Toast position="top" topOffset={60} config={toastConfig} />
        </SafeAreaProvider>
      </AuthentificationContext.Provider>
    );
  }
}
