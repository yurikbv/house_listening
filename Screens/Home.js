import React, {useState, useEffect} from 'react';
import { View, FlatList } from 'react-native';
import styled from "styled-components/native";
import {StatusBar} from "expo-status-bar";
import ListingItem from "../Components/ListingItem";

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
    <ListingsWrapper>
      {!loading && !error &&
      <Listings
          keyExtractor={item => String(item.id)}
          data={data}
          renderItem={({item}) => <ListingItem item={item} navigation={navigation}/>}
      />}
      <StatusBar style="auto" />
    </ListingsWrapper>
)};

const ListingsWrapper =styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Listings = styled(FlatList)`
  width: 100%;
  padding: 5%;
`

export default Home;
