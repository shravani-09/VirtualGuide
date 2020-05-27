import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StatusBar,
    Alert,
    ActivityIndicator,
    ToastAndroid,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Styles/SignInStyles';
import firebase from '../Database/firebase'


export default class SignInScreen extends Component{
    constructor() {
        super();
        this.state = { 
          email: '', 
          password: '',
          isLoading: false,
          secureTextEntry:true,
          check_textInputChange:false

        }
      }
      updateSecureTextEntry=()=>{
        this.setState(previousState=>({
          secureTextEntry:!previousState.secureTextEntry
          }))
    }
      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState({state,
          check_textInputChange:true
        
        });
      }
    
      userLogin = () => {
        const { navigation } = this.props;
        if(this.state.email === '' && this.state.password === '') {
            ToastAndroid.show('Enter details to Sign In', ToastAndroid.LONG);
            this.setState({check_textInputChange:false})
        } else {
          this.setState({
            isLoading: true,
          })
          firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            console.log(res.user.displayName)
            console.log(res.user.email)
            ToastAndroid.show('User Signed-in Successfully!', ToastAndroid.LONG);
            console.log('User logged-in successfully!')
            this.setState({
              isLoading: false,
              email: '', 
              password: ''
            })
            navigation.navigate('HomeScreen')
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
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View                                //Email
            animation="fadeInUpBig"
            style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <Image
                source={require('../Images/gmail.png')}
                />
                <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={[styles.textInput,]}
                    autoCapitalize="none"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
               {/* {this.state.check_textInputChange ? 
                  <Animatable.View
                      animation="bounceIn" >
                     <Image
                     source={require('../Images/okicon.png')}
                     style={{height:20,
                    width:20}}
                    />
                  </Animatable.View>
                  : null} */}
            </View>
            {/* { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
             */}

            <Text style={[styles.text_footer, {marginTop: 35 }]}>Password</Text>
            <View style={styles.action}>
                <Image
                 source={require('../Images/password.png')}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                   
                    style={[styles.textInput,]}
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                    maxLength={15}
                    secureTextEntry={this.state.secureTextEntry}                />
                <TouchableOpacity
                    onPress={()=>{this.updateSecureTextEntry()}}
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
            {/* { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            } */}
            

            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => this.userLogin()}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]} >
                    <Text style={[styles.textSign, {color: '#009387'}]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
        )
}
}