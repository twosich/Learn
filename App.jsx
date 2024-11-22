import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css";
import CoverImage from './components/CoverImage';
import SearchManga from './components/SearchManga';


export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <SearchManga />
    </View>
  );
}


