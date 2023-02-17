import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const Home = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      category: "electronics",
      price: 4000,
      description: "This is description about product 1",
      imageUrl:'https://picsum.photos/id/237/200/300',

    },
    {
      id: 2,
      title: "Product 2",
      category: "electronics",
      price: 2000,
      description: "This is description about product 2",
      imageUrl:'https://picsum.photos/200',
    },
    {
      id: 3,
      title: "Product 3",
      category: "books",
      price: 1000,
      description: "This is description about product 3",
      imageUrl:'https://picsum.photos/id/237/200/300',
    },
    {
      id: 4,
      title: "Product 4",
      category: "fitness",
      price: 3000,
      description: "This is description about product 4",
      imageUrl:'https://picsum.photos/200',
    },
    {
      id: 5,
      title: "Product 5",
      category: "fitness",
      price: 4000,
      description: "This is description about product 5",
      imageUrl:'https://picsum.photos/id/237/200/300',
    },
    {
      id: 6,
      title: "Product 6",
      category: "gardening",
      price: 5000,
      description: "This is description about product 6",
      imageUrl:'https://picsum.photos/200',
    },
    {
      id: 7,
      title: "Product 7",
      category: "furniture",
      price: 6000,
      description: "This is description about product 7",
      imageUrl:'https://picsum.photos/200/300',
    },
    {
      id: 8,
      title: "Product 8",
      category: "furniture",
      price: 7000,
      description: "This is description about product 8",
      imageUrl:'https://picsum.photos/200',
    },
    {
      id: 9,
      title: "Product 9",
      category: "accessories",
      price: 4000,
      description: "This is description about product 9",
      imageUrl:'https://picsum.photos/200/300',
    },
    {
      id: 10,
      title: "Product 10",
      category: "electronics",
      price: 3000,
      description: "This is description about product 10",
      imageUrl:'https://picsum.photos/200',
     
    }
  
  ];
  return (
    <View>
      <Text style={styles.headerText}>Home</Text>
      <ScrollView
      style ={styles.container}
      scrollEnabled = {true}
      >
      { products.map(({id, title, category,price, description,imageUrl})=>(
        <View key = {id} style={styles.userCard}>
          <Image
            source={{uri:imageUrl}}
            style = {styles.imageCard}
          />
          <Text>{title}</Text>
          <Text>{category}</Text>
          <Text>{price}</Text>
          <Text>{description}</Text>

        </View>
      ))}
    

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText:{
    fontSize:26,
    fontWeight:'bold',
    marginHorizontal:10,
    marginVertical:10
  },
  container:{
  },
  userCard:{
    alignItems:'center'
  },
  imageCard:{
    height:200,
    width:200,
    borderRadius: 200 / 2
  },



});
export default Home;