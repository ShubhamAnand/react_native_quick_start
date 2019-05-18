import React from 'react';
import {View, Text, StyleSheet,Dimensions,Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
 
export default class Tour extends React.Component {
    constructor(props){
    super(props);
      this.state = {
        entries : ["1","2","3","4"]
      }
    }
    _renderItem ({item, index}) {
        return (
          <View>
             <View style = {{ backgroundColor:"#F2F4F7", marginTop: 50, height: 400 }}>
                <Image style={ style.image } source={{uri: 'https://cdn.dribbble.com/users/1166566/screenshots/4285001/family2.jpg'}}/>
            </View>  
            <View style={style.imageTextArea} >
                <Text style={style.text2} > Çocuklar İzler </Text>
                <Text style={style.textdesc} > Ebeveynler çocuklarının ilgi alanlarını  ve videolardan neler öğrendiğini öğrenirler </Text>
            </View>
        </View>

        
        );
    }
    render () {
      const itemWidth = 300;
      const sliderWidth = Dimensions.get('window').width;
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}

const style = StyleSheet.create({
  pageBg: {
    backgroundColor: "#F2F4F7"
  },
  text2: {
    width: "100%",
    fontSize: 30,
    fontWeight: "800",
    fontStyle: "normal",
    lineHeight: 47,
    letterSpacing: 0,
    textAlign: "center",
    color: "#383838"
  },
  imageTextArea: {
     width:"100%",
    height: 110,
    backgroundColor: "#F2F4F7",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  },
  image: {
     width:"100%",
    height: 400,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
        width: 0,
        height: 3,
        resizeMode: "contain"
    },
    shadowRadius: 14,
    shadowOpacity: 1
  },
  textdesc: {
    width: "100%",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "center",
    color: "#9f9f9f",
    marginBottom: 20
  },
  skipBtn: {
     width: 24,
    height: 17,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: "#9f9f9f"
  }
});