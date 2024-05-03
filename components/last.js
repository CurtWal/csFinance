import React, {useState} from 'react'
import { StyleSheet, View, ImageBackground, Text, Modal,Pressable, Image} from 'react-native';
import { Card, ListItem, Button } from '@rneui/themed'
import { Icon } from 'react-native-elements'

const image = {uri: 'https://giffiles.alphacoders.com/222/222081.gif'};
const last = () =>  {
  const [modalVisible, setModalVisible] = useState(false);
 
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <Text style={{color: "white", textAlign:"center"}}>BACKGROUND IMAGE</Text>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

          <View style={styles.modalView}>
            <ImageBackground source={require("../Images/beach.jpg")} resizeMode="cover" style={[ {height:700, width:368, top:-3}]}  imageStyle={{ borderRadius: 20}}>
              <Pressable
              style={[styles.buttonClose, {alignSelf:"flex-start", width: "10%", backgroundColor:"white", borderRadius: 15, left:5, top:5}]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icon
              name='arrow-back-outline'
              type='ionicon' />

            </Pressable>
            <View>
              <Text style={{color:"white", alignSelf:"center", top:100, fontSize:35}}>Personal Account</Text>
              <Text style={{color:"white", alignSelf:"center", top:100, fontSize:40}}>₿50,000</Text>
              
            </View>
          <View style={styles.cardInfo}>
          <Text>Saved 50%                                        ₿50,000 / ₿100,000</Text>
          
          </View>
            </ImageBackground>
            
          
            
          </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

  </ImageBackground>
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:"50%",
      alignSelf:"center"
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalView: {
      margin: 2,
      height: 700,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 3,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    cardInfo: {
      margin: 2,
      width: 355,
      height: 100,
      top:400,
      left:5,
      padding: 3,
      borderRadius: 15,
      backgroundColor: "yellow",
      shadowColor:"red",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      alignSelf: "flex-start"
    },
  });

export default last;