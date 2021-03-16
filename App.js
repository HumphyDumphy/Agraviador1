import { StatusBar } from "expo-status-bar";
import React from "react";


import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
  Alert
} from "react-native";




import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';


  


const Menus = [
  {
    url: "https://i.imgur.com/L5IhOun.png",
    menuTitle: " ₱120          Jumbo Burger",
    menuDesc:
      "A huge double cheese, grilled burger, mixing a variety of tastes together tomatoes and onions",
  },
  {
    url: "https://i.imgur.com/T9MSBoz.jpg",
    menuTitle: " ₱70          Jumbo Fries",
    menuDesc:
      "French fries, or simply fries, chips, finger chips, or French-fried potatoes",
  },
  {
    url: "https://i.imgur.com/VUEGlFp.jpeg",
    menuTitle: "₱100           Jumbo Pizza",
    menuDesc:
      " Delicious combination of the most fresh ingredients and flavors, that will make your experience of tasting our pizza a thing you will remember.",
  },



  {
    url: "https://i.imgur.com/pWc7rI8.jpeg",
    menuTitle: "₱90           Jumbo Milktea",
    menuDesc:
      " Delicious combination of the most fresh ingredients and flavors, that will make your experience of tasting our pizza a thing you will remember.",
      
  
    },


  {
    url: "https://i.imgur.com/btfpmVM.jpg",
    menuTitle: "₱80        Jumbo Hotdog",
    menuDesc:
      " Jumbo Hot Dogs Filipino Style",
  },

 
  {
    url: "https://i.imgur.com/JrLAzRG.jpg",
    menuTitle: "₱100        Jumbo Pasta ",
    menuDesc:
      " Italian pasta pronounced “PAS-tah” is a collective name for a category of food made from wheat flour and water sometimes with egg",
  },



];



function HomeScreen({ navigation }) {
  return (
    
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/resto-bg.jpg")}
        style={styles.imageBG}
      >

        <View style={[styles.rowCenter, { marginTop: -300 }]}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>

      
<Text style={styles.brandName}>(づ｡◕‿‿◕｡)づ </Text>

        

        <View style={styles.rowCenter}>
          <View style={[{ width: 120, marginTop: 4 }]}>
            <Button
              title="Jumbo Foods
              "
              color="#fca311"
              onPress={() => navigation.navigate("Menu")}
            />
          </View>
        </View>


        <View style={styles.rowCenter}>
          <View style={[{ width: 120, marginTop: 4 }]}>
        <Button

        title="Jumbo Store"
        onPress={() => Alert.alert('Our Place is located at 1128 ,Visayas Avenue')}
      />
 </View>
        </View>

        <View style={styles.rowCenter}>
          <View style={[{ width: 120, marginTop: 4 }]}>
        <Button
       color="#64C22D"
        title="About Us"
        onPress={() => Alert.alert('Food is essential to Life therefore make it Good')}
      />
 </View>
        </View>







      </ImageBackground>
    </View>
  );
}


function MenuDetail(props) {
  return (
    <View>
      <Text>{props.route.params.url}</Text>
      <Text>{props.route.params.menuTitle}</Text>
      <Text>{props.route.params.menuDesc}</Text>
    </View>
  );
}


function MenuScreen({ navigation }) {
  return (
    <ScrollView>
      {Menus.map((menu, key) => (
        <View key={key} style={{ flexDirection: "row" }}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ecf0f1"
            onPress={() => navigation.navigate(menu.menuTitle)}

    
          >
            <View style={styles.cardRounded}>
              <Image style={styles.cardImage} source={{ uri: menu.url }} />
              <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
                <Image
                  style={styles.star}

                />
                <Text> </Text>
                <Image
                  style={styles.star}
                 
                />
                 <View style={styles.rowCenter}>
          <View style={[{ width: 100, marginLeft: 217}]}>
            <Button
              title="Buy Now
              "
              color="#fca311"
              onPress={() => Alert.alert('Thank you for buying!!')}
            />
          </View>
        </View>
       


                <Image
                  style={styles.star}
                  
                />
                <Image
                  style={styles.star}
              
                />
                <Image
                  style={styles.star}
                
                />
              </View>
              <Text style={styles.menuTitle}>{menu.menuTitle}</Text>
              <Text style={styles.menuDesc} numberOfLines={2}>
                {menu.menuDesc}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
}





const Stack = createStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#14213d",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
           
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Menu" component={MenuScreen} />  
      
     
		
		
        {Menus.map((menu, key) => (
          <Stack.Screen
            key={key}
			
            initialParams={{
              url: menu.url,
              menuTitle: menu.menuTitle,
              menuDesc: menu.menuDesc,
            }}
            name={menu.menuTitle}
            component={MenuDetail}
          />
        ))}


        
	
		
      </Stack.Navigator>
    </NavigationContainer>
  );
}


















const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  brandName: {
    margin: 12,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto",
  },

  label: {
    marginTop: 5,
    color: "#ecf0f1",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputTextbox: {
    margin: 5,
    width: 250,
    height: 50,
    borderColor: "#f1c40f",
    borderWidth: 2,
    borderRadius: 5,
    color: "#14213d",
    padding: 15,
    fontSize: 20,
    backgroundColor: "#ecf0f1",
  },

  btnRounded: {
    borderRadius: 5,
    margin:5
  },

  cardRounded: {
    height: 300,
    backgroundColor: "#B24536",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 3,
    borderRadius: 12,
    shadowColor: "#222",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cardImage: {
    width: 391,
    height: 180,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  menuTitle: {
    fontSize: 24,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Roboto",
    marginTop: 5,
    marginLeft: 10,
  },
  menuDesc: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  star: {
    width: 25,
    height: 25,
    marginTop: 6,
    marginLeft: 10,
  },
});
