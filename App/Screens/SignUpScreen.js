import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    ActivityIndicator,
    Image,
    ToastAndroid
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Styles/SignUpStyles';
import firebase from '../Database/firebase';

export default class SignUpScreen extends Component{
    constructor() {
        super();
        this.state = { 
          displayName: '',
          email: '', 
          password: '',
          isLoading: false,
          check_textInputChange:false,
          secureTextEntry: true,
        }
      }
    
      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState({state,
            check_textInputChange:true
        });
      }
      updateSecureTextEntry=()=>{
          this.setState(previousState=>({
            secureTextEntry:!previousState.secureTextEntry
            }))
      }
      registerUser = () => {
        const { navigation } = this.props;
        if(this.state.email === '' && this.state.password === '') {
           
            ToastAndroid.show('Enter details to Sign-up!', ToastAndroid.LONG);
            this.setState({check_textInputChange:false})
        } else {
          this.setState({
            isLoading: true,
          // check_textInputChange:true
          })
          firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            res.user.updateProfile({
              displayName: this.state.displayName
            })
            ToastAndroid.show('User Signed-Up Successfully!', ToastAndroid.LONG);
            console.log('User Signed-Up successfully!')
            this.setState({
              isLoading: false,
              displayName: '',
              email: '', 
              password: ''
            })
            console.log(res)
            console.log(res.user.displayName)
            navigation.navigate('SignInScreen')
          })
          .catch(error => this.setState({ errorMessage: error.message }))      
        }
      }
      render() {
        const { navigation } = this.props;
        if(this.state.isLoading){
          return(
            <View style={styles.preloader}>
              <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
          )
        } 
        return(

        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Register Now!</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}>
              <ScrollView>
              <Text style={styles.text_footer}>Username</Text>
              <View style={styles.action}>
                  <Image
                   source={require('../Images/user.png')}
                  />
                  <TextInput 
                      placeholder="Your Name"
                      style={styles.textInput}
                      autoCapitalize="none"
                      value={this.state.displayName}
                      onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                  />
                  {this.state.check_textInputChange ? 
                  <Animatable.View
                      animation="bounceIn" >
                     <Image
                     source={require('../Images/okicon.png')}
                     style={{height:20,
                    width:20}}
                    />
                  </Animatable.View>
                  : null}
              </View>
  
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Email</Text>
              <View style={styles.action}>
                  <Image
                   source={require('../Images/gmail.png')}
                  />
                  <TextInput 
                      placeholder="Your Email"
                      style={styles.textInput}
                      autoCapitalize="none"
                      value={this.state.email}
                     onChangeText={(val) => this.updateInputVal(val, 'email')}
                  />
              </View>
  
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Password</Text>
              <View style={styles.action}>
                  <Image
                   source={require('../Images/password.png')}
                  />
                  <TextInput 
                      placeholder="Your Password"
                      secureTextEntry={this.state.secureTextEntry}
                      style={styles.textInput}
                      autoCapitalize="none"
                      value={this.state.password}
                      onChangeText={(val) => this.updateInputVal(val, 'password')}
                      maxLength={15}
                  />
                  <TouchableOpacity
                      onPress={()=>this.updateSecureTextEntry()}
                  >
                      {this.state.secureTextEntry ? 
                      <Image
                          
                      source={require('../Images/hideeye.png')}  
                      />
                      :
                      
                      <Image
                          
                      source={require('../Images/showeye.png')}  
                      />
                      }
                  </TouchableOpacity>
              </View>
              <View style={styles.textPrivate}>
                  <Text style={styles.color_textPrivate}>
                      By signing up you agree to our
                  </Text>
                  <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                  <Text style={styles.color_textPrivate}>{" "}and</Text>
                  <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
              </View>
              <View style={styles.button}>
                  <TouchableOpacity
                      style={styles.signIn}
                      onPress={() => this.registerUser()}
                  >
                  <LinearGradient
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Sign Up</Text>
                  </LinearGradient>
                  </TouchableOpacity>
  
                  <TouchableOpacity
                  
                      onPress={() => navigation.goBack()}
                      style={[styles.signIn, {
                          borderColor: '#009387',
                          borderWidth: 1,
                          marginTop: 15
                      }]}>
                      <Text style={[styles.textSign, {
                          color: '#009387'
                      }]}>Sign In</Text>
                  </TouchableOpacity>
              </View>
              </ScrollView>
          </Animatable.View>
        </View>

        )
    }
}