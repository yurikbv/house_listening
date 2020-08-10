import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {StatusBar} from "expo-status-bar";

const Home = ({ navigation }) => {

  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');
  const [ data, setData ] = useState([]);

  const fetchAPI = async () => {
    try {
      const data = await fetch('https://my-json-server.typicode.com/PacktPublishing/React-Projects/listings');
      const dataJSON = await data.json();
      if (dataJSON) {
        setData(dataJSON);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, [])

  return (
    <View style={styles.container}>
      {!loading && !error && <FlatList data={data} renderItem={({item}) => <Text>{item.title}</Text>} />}
      <StatusBar style="auto" />
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
