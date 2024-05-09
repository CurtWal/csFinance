import React , {useEffect, useState}from 'react'
import {ActivityIndicator, StyleSheet, View, ImageBackground, Text, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import axios from "axios";

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"


const testing = () => {
const [getBitCoinVal, setgetBitCoinVal] = useState([]);
const [loading, setLoading] = useState(true);

const handleDataPointClick = (event, dataPoint) => {
  console.log('Clicked data point:', dataPoint);
  // Here, you can perform any action you want with the dataPoint
};

const bitCoinData = async() => {
  try{
    const res = await axios.get(API,{
    headers:{
      "accept": "application/json",
      "x-cg-demo-api-key": process.env.bitCoinAPIKEY
    }
  })
    setgetBitCoinVal(res?.data[0]);
    console.log(res?.data[0]);
    setLoading(false);
  }catch(e){
    console.log(e);
    setLoading(false);
  }  
    };
    
const bitData =  {
  labels:["January", "February", "March", "April", "May", "June"],
  datasets:[
    {
      data:[
        getBitCoinVal.atl,
        getBitCoinVal.ath,
        getBitCoinVal.high_24h,
        getBitCoinVal.low_24h,
        getBitCoinVal.current_price,
      ]
    }
  ]
} 
useEffect(() => {
  bitCoinData();
    }, [])
  const data = [
    { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 13 },
    { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 13 },
    { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 13 },
    { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 13 },
    { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 13 }
  ]
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2 // optional, default 3
  }
    return ( 
    <View> 
      {loading ? (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator color="red" />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="orange" />
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    ) : ( 
      <>
    <LineChart 
    data={bitData}
    width={Dimensions.get("window").width} // from react-native
    height={240}
    yAxisLabel="$"
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "red",
      backgroundGradientTo: "grey",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16 
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
    
  />
    <Text style={{color:"white", fontSize:28}}>Current Price: {getBitCoinVal.current_price}</Text>
    </>
    )}
    {/* <Text >Current High: ${getBitCoinVal.current_price}</Text> */}
    {/* <BarChart 
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "red",
      backgroundGradientTo: "black",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16 
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  /> */}
    {/* <PieChart
  data={data}
  width={Dimensions.get("window").width}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
  absolute
/> */}
  {/* <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator color="red" />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="orange" />
        <ActivityIndicator size="large" color="#00ff00" />
      
</View> */}
    {/* <Text>{getBitCoinVal.current_price}</Text>
    <Text>{getBitCoinVal.ath}</Text>
    <Text>{getBitCoinVal.high_24h}</Text>
    <Text>{getBitCoinVal.low_24h}</Text> */}

       </View>
    //     // <View>
    // {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
       
    //    {/* </ImageBackground> */}
    // //    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    //   marginTop: "200%",
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      
    },
  });

  export default testing;
