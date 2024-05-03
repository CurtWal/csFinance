import { Alert, Modal,Pressable,Text, View , Image, Button, Switch, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { WebView } from 'react-native-webview';

import React, { useState } from 'react'

const images = ({checked, setChecked}) => {
const [getCounter, setGetCounter] = useState(0);
// const [checked, setChecked] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
const changeStyle = checked ? styles.back : styles.front;

  const jewelStyle = () => {
  return {
    margin: 20,
    backgroundColor: changeStyle.backgroundColor,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
  }

  const textColor = (option) => {
    styles.back = {
      color: option,

      
    } 
const newColor = checked ? styles.back : styles.textColors;

return {
   color: newColor.color, 
   marginTop: "10%", 
   fontSize: 50, 
   fontWeight: 'bold'
 }
  }

const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

const toggleSwitch = () => {
  setChecked(!checked);
};
    return (
      <View style={changeStyle}>
        <Text style={textColor("orange")}>Settings</Text>
         <Switch
      value={checked}
      onValueChange={(value) => setChecked(value)}
    />

        <Image source = {{uri:'https://steamuserimages-a.akamaihd.net/ugc/716414774615353757/6229A9820097690749446CAC4B05EDA4234D4BC7/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'}}
      style = {{ width: 300, height: 200, alignSelf:"center", }}
   />
   <Image source={require('../Images/anime.gif')} style = {{ width: 300, height: 200 }}/>

        <Button onPress={()=>{{setGetCounter(0)}}} title="Reset"/>
        <Button title="Counter" onPress={() => {setGetCounter(getCounter + 1)}}/>
        <Text style={{color: "lightgreen"}}>Counter: {getCounter}</Text>
        {/* <WebView
      source={{ uri: 'https://www.youtube.com/embed/NKuRZB8VaQI?si=UKlsMi0Ab49inmT-' }}
      style={styles.video }
    /> */}
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={jewelStyle(changeStyle)}>
            <Text style={styles.modalText}> <WebView
      source={{ uri: 'https://www.youtube.com/embed/NKuRZB8VaQI?si=UKlsMi0Ab49inmT-' }}
      style={styles.video }
    /> </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      <StatusBar style="auto" />
        {/* <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://www.youtube.com/embed/NKuRZB8VaQI?si=UKlsMi0Ab49inmT-',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back:{
    backgroundColor: 'black',
    
  },
  front:{
    backgroundColor: 'orange',
  },
  textColors:{
    color:"black",
  },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
});

export default images;