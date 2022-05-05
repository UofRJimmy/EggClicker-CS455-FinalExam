/**
 * file:App.js
 * author: Trevor M. Tomesh <trevor. tomesh@uregina.ca>
 * version:0.1
 * date-created: April-22-2022
 * last-modifyed:April-22-2022 
 */
import React, {useState,useEffect} from 'react';
import{Text,View,Button,StyleSheet,Pressable,TextInput,TouchableOpacity,Image} from 'react-native';

var txtColor='black'
var timer;


const EggClicker=()=>{
const[count, setCount]= useState(0);
const[text,setText]=useState('');
const[speed,setSpeed]=useState(0);
const[seconds,setSeconds]=useState(0);

//summary
//cheat text for the clicks counter
//summary
if(text == "100")
{
  setCount(count+100);
  setText(' ');
}
else if(text=="1k")
{
  setCount(count+1000);
  setText(' ');
}
else if(text=="10k")
{
  setCount(count+300);
  setText(' ');
}
else if(text=="100k")
{
  setCount(count+100000);
  setText(' ');
}

  /**
   *  useEffect
   * Purpose: This function will create a timer to increase the clicks amount
   * Parameter(s):
   * <1> timer
   * Precondition(s):N/A
   * Returns:seconds
   * side effect:
   * <1> seconds will increase
   * <2> seconds will do addition with speed if speed >=1
   * 
   */
useEffect(()=>{
  timer=setInterval(()=>{
  setSeconds(seconds+speed);
  },1000)
  return () => clearInterval(timer);
});

  /**
   *  wincondition
   * Purpose: This function use to pop up the winning text once player reach the win condition
   * Parameter(s):
   * <1> setCount: reset count to 0
   * Precondition(s):N/A
   * Returns:count
   * <2>setSpeed:reset clicks/s to 0
   * Precondition(s):N/A
   * Returns:speed
   * <3>clearInterval: reset the auto-clicker to 0
   * Precondition(s):seconds bigger than 0
   * Returns:seconds
   * side effect:
   * <1> speed will reset
   * <2> count will reset
   * <3> seconds will reset
   */
if(count==1000000000000000)
{    
  alert("Congradulation! you win")
  setCount(0);
    setSpeed(0);
    clearInterval(timer);
  }


  
return(
<View>
 <Text style={styles.clickcounter}>{count+seconds} Clicks </Text>

  <View style={styles.eggcontainer}>
 
<Pressable
onPress={()=>setCount(count+1)}
>
  
<Image style={styles.eggButton}
source={{uri:'https://images.emojiterra.com/google/android-pie/share/1f95a.jpg'}}/>
</Pressable>


<TextInput 
placeholder="enter"
onChangeText={newtext=>setText(newtext)}
/>

<Text style={styles.titletextstyle}>+ {speed} Clicks / s</Text>

<Text style={styles.titletextstyle}>Click Boosts:</Text>

<Button style={styles.container}
onPress={()=>{
  setCount(count-100);
  setSpeed(speed+1);
  }}
  disabled={count<100}
  title={"+1 Click/s (Cost:100 Clicks)"}
/>

<Button style={styles.container}
onPress={()=>{
  setCount(count-1000);
  setSpeed(speed+10);
  }}
  disabled={count<1000}
  title={"+10 Click/s (Cost:1k Clicks)"}
/>

<Button style={styles.container}
onPress={()=>{
  setCount(count-10000);
  setSpeed(speed+300);
  }}
  disabled={count<10000}
  title={"+300 Click/s (Cost:10k Clicks)"}
/>

<Button style={styles.container}
onPress={()=>{
  setCount(count-100000);
  setSpeed(speed+1000);
  }}
  disabled={count<100000}
  title={"+1000 Click/s (Cost:100k Clicks)"}
/>
  </View>
</View>

);
};


const styles= StyleSheet.create(
  {
eggcontainer:{
  flex:1,
  },

container:{
  margin:20,
},



eggButton:{
  alignItems:'center',
  marginHorizontal:'28%',
  height:150,
  width:150,
},

titletextstyle:{
 fontSize:20,
 textAlign:'center',
 marginVertical:8,
 fontWeight:500,
},


clickcounter:{
  fontSize:20,
  fontWeight:'bold',
  textAlign:'right',
  marginTop:20,
},
});

export default EggClicker;