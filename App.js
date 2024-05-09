import { StyleSheet, View, StatusBar} from "react-native";
import { Tab, Text, TabView } from "@rneui/themed";
import Testing from "./components/testing.js"
import Pics from "./components/images.js";
import Last from "./components/last.js";
import React, { useState } from "react";

export default function App() {
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = React.useState(0);
  const jewelStyle = (option) => {
    styles.front = {
      backgroundColor: option,
    } 
    styles.back = {
      backgroundColor: "black",
    }
    const changeStyle = checked ? styles.back : styles.front;

    return {
     width: "100%",
      backgroundColor: changeStyle.backgroundColor, 
      
    }
    }

    const textColor = (textcolor) => {
      styles.back = {
        color: textcolor,
      } 
  const newColor = checked ? styles.back : styles.textColor;
  
  return {
     color: newColor.color, 
   }
    }
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={jewelStyle("green")}>
          {/* <Text>Home</Text> */}
          <Last/>
        </TabView.Item>
        <TabView.Item style={jewelStyle("purple")}>
          <Testing/>
          {/* <Text h1 style={textColor("blue")}>Favorite</Text> */}
        </TabView.Item>
        <TabView.Item style={jewelStyle("orange")}>
         
          <Pics checked={checked} setChecked={setChecked} />
          {/* <Text h1 style={textColor("green")}>Cart</Text> */}
        </TabView.Item>
      </TabView>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "white",
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Home"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "person-circle-outline", type: "ionicon", color: "white" }}
          />
          <Tab.Item
            title="AI Help"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "logo-wechat", type: "ionicon", color: "white" }}
          />
          <Tab.Item
            title="Settings"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "cog-outline", type: "ionicon", color: "white" }}
          />
        </Tab>
      </View>
      
    </View>
    // <View style={changeStyle}>
    //   <Text style={styles.texth1}>We In There</Text>

    //   <Pics checked={checked} setChecked={setChecked} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texth1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  back: {
    backgroundColor: "black",
    flex: 1,

  },
  front: {
    
    flex: 1,
  },
  textColor:{
    color:"black",
  }
});
