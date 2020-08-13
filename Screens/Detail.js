import React from 'react';
import { View, Text } from 'react-native';
import ListingDetail from '../Components/ListingDetail';

const Detail = ( {route} ) => {

  const {item} = route.params;

  return (
      <View>
        <ListingDetail item={item}/>
      </View>)};


export default Detail;
