import React, { Component } from 'react';
import { StyleSheet, Text ,Image, View , TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback , ScrollView , Platform, FlatList, SectionList, ActivityIndicator, KeyboardAvoidingView, SafeAreaView, TouchableHighlightBase } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

// class Blind extends Component{
//   render(){
//     return(
//       <View style={{ alignItems:'center' }}>
//         <Text>Helllo { this.props.name }</Text>
//       </View>
//     )
//   }
// }

// export default class Dp extends Component{
//   render(){
//     return(
//       <View style={{ alignItems:'center',top:50 }}>
//         <Blind name='Dhaval' />
//         <Blind name='Hardik' />
//         <Blind name='Pravin' />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   },
//   buttonConatiner: {
//     margin: 20,
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
    
//   }
// })


// export default class Color extends Component{

//   constructor(props){
//     super(props);
//     this.state = { text: '' };
//   }
//   _onPressButton(){
//     alert('Yot Tapped the button');
//   }
//   render(){
//     return(  
      // <View style={{ alignItems:'center',top:50 }}>
      //   <Text style={ styles.red }>red</Text>
      //   <Text style={ styles.bigBlue }>bigBlue</Text>
      //   <Text style={[ styles.bigBlue,styles.red ]}>bigBlue, then red</Text>
      //   <Text style={[ styles.red,styles.bigBlue ]}>red, then bigBlue</Text>

      //   <View style={{ width:50, height:50, backgroundColor: 'powderblue' }}></View>
      //   <View style={{ width:100, height: 100, backgroundColor: 'skyblue' }}></View>
      //   <View style={{ width:200, height: 200, backgroundColor: 'steelblue' }}></View>
      // </View>
      // <View style={{ flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', position: 'relative' }}>
      //   <View style={{ width:50, height:50, backgroundColor: 'powderblue', alignSelf: 'stretch' }}></View>
      //   <View style={{ height:50, backgroundColor: 'skyblue' }}></View>
      //   <View style={{ height:100, backgroundColor: 'steelblue' }}></View>
      // </View>


      // <View style={{ padding:10 }}>
      //   <TextInput style={{ height:50,fontSize:20 }} placeholder= 'Type here Something' onChangeText={(text) => this.setState({text})} value={this.state.text} />
      //   <Text style={{ padding: 10, fontSize:42 }}>
      //     {this.state.text.split(' ').map((word) => word && '🍕').join('')}
      //   </Text>
      // </View>

//       <View style={styles.container}>
//         <View style={styles.buttonConatiner}>
//           <Button onPress={this._onPressButton} title="Press Me" />
//         </View>
//         <View style={styles.buttonConatiner}>
//           <Button onPress={this._onPressButton} title="Press Me" color="#841584" />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//             <Button onPress={this._onPressButton} title="Thats look great" />
//             <Button onPress={this._onPressButton} title="Thats look great" color="#841584" />
//         </View>
//       </View>
      
//     )
//   }
// }

// export default class Touchables extends Component{
//   _pressButton(){
//     alert('You tapped the button');
//   }

//   render(){
//     return(
//       <View style={styles.conatiner}>
//         <TouchableHighlight onPress={this._pressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._pressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//             onPress={this._pressButton}
//             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//           <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//             onPress={this._pressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._pressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   conatiner: {
//     paddingTop:50,
//     alignItems:"center"
//   },
//   button:{
//     marginBottom: 20,
//     width:260,
//     alignItems:'center',
//     backgroundColor:'#2196F3'
//   },
//   buttonText: {
//     textAlign:'center',
//     padding: 20,
//     color:'white'
//   }
// })

// export default class Scrollviews extends Component{
//   render(){
//     return(
//       <View style={styles.container}>

      {/* <ScrollView>
        <Text style={styles.text }>ScrollView Screen</Text>
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        <Image style={styles.images} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
        
      </ScrollView> */}
//       <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Dan'},
//             {key: 'Dominic'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//        </View>
     
//     )
//   }
// }

// export default class SelectionListBasics extends Component{
//   render(){
//     return(
//       <View style={styles.container}>
//         <SectionList
//           sections = {[
//             {title:'D',data:['Dhaval','Devin','Dharmik']},
//             {title:'E',data:['Ejal','Enal',]},
//           ]}
//         renderItem ={({item}) => <Text style={styles.item}>{item}</Text> }
//         renderSectionHeader = {({section}) => <Text style={styles.sectionHeader}>{section.title}</Text> }
//         keyExtractor={(item, index) => index}
//         />
//       </View>
//     )
//   }
// }


// export default class HttpExample extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       data: '',
//     }
//   }
//   componentDidMount = () => {
//       fetch('https://jsonplaceholder.typicode.com/posts/1', {
//          method: 'GET'
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//          console.log(responseJson);
//          this.setState({
//             data: responseJson
//          })
//       })
//       .catch((error) => {
//          console.error(error);
//       });
//    }
//   render(){
//     return(
//       <View>
//         <Text>{this.state.data.body}</Text>
//       </View>
//     )
//   }
// }

// export default class FetchData extends Component{
//   constructor(props){
//     super(props);
//     this.state= {
//       isloading: true,
//     }
//   }
//   componentWillMount = () => {
//     return fetch('https://reactnative.dev/movies.json')
//     .then((response) => response.json())
//     .then((responseJson) => {
//        this.setState({
//          isloading: false,
//          dataSource: responseJson.movies,
//        },function() {

//        });
//     })
//     .catch((error) =>{
//       console.error(error);
//     });
//   }
//   render(){
//     if(this.state.isloading){
//       return(
//         <View>
//           <ActivityIndicator />
//         </View>
//       )
//     }
//     return(
//       <View>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={({id}, index) => id}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//    },
//    sectionHeader:{
//     paddingTop:2,
//     paddingLeft:10,
//     paddingRight:10,
//     paddingBottom:2,
//     fontWeight:'bold',
//     fontSize:14,
//     backgroundColor:'rgba(247,247,247,2.0)',
//    },
//    item: {
//      padding: 10,
//      fontSize: 18,
//      height: 44,
//    },
//   text: {
//     fontSize: 25,
//     fontWeight:'bold',
//     textAlign:'center',
//     paddingTop:20,
//     color: '#2196F3'
//   },
//   images: {
//       width:100,
//       height:100,
//       alignSelf:'center',
//       margin:5
//   }
// })

const MAX_LENGTH = 250; 
export default class NewScreens extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      author: '',
      text:'',
      disabled:''
    }
  }
  onSave = () => {
    console.log(this.state)
  }
  render(){
    return(
      <KeyboardAvoidingView keyboardVerticalOffset={Header.HEIGHT} style={styles.flex} behavior="padding">
        <SafeAreaView style={styles.flex}>
                <View style={styles.flex}>
                    <TextInput
                        onChangeText={(author) => this.setState({author: author})}
                        placeholder={"Enter Author"}
                        underlineColorAndroid='transparent'
                        autoFocus={true}
                        style={[styles.author]}
                      />
                    <TextInput
                        multiline={true}
                        onChangeText={(text) => this.setState({text})}
                        placeholder={"Enter Quote"}
                        style={[styles.text]}
                        maxLength={MAX_LENGTH}
                        />
                </View>

                <View style={styles.buttonContainer}>
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <Text style={[styles.count, (MAX_LENGTH - this.state.text.length <= 10) && {color: "red"}]}> {MAX_LENGTH - this.state.text.length}</Text>
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end"}}>
                        <TouchableHighlight style={[styles.button]}  onPress={this.onSave}
                                            underlayColor="rgba(0, 0, 0, 0)">
                            <Text style={[styles.buttonText, {color:"#FFF"}]}>
                                Save
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
      flex: 1
  },

  buttonContainer: {
      height: 70,
      flexDirection: "row",
      padding: 12,
      backgroundColor: "white"
  },

  count: {
      fontFamily: 'HelveticaNeue-Medium',
      fontSize: 17,
      color: "#6B9EFA"
  },

  button: {
      width: 80,
      height: 44,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "#6B9EFA"
  },

  buttonText: {
      fontFamily: 'HelveticaNeue-Medium',
      fontSize: 16,
  },

  author: {
      fontSize: 20,
      lineHeight: 22,
      fontFamily: 'Helvetica Neue',
      height: 80,
      padding: 16,
      backgroundColor: 'white',
  },

  text: {
      fontSize: 30,
      lineHeight: 33,
      fontFamily: 'Helvetica Neue',
      color: "#333333",
      padding: 16,
      paddingTop: 16,
      minHeight: 170,
      borderTopWidth: 1,
      borderColor: "rgba(212,211,211, 0.3)"
  }
});