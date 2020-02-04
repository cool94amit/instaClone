import React, { FunctionComponent } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Button, Text } from 'native-base';

const App: FunctionComponent = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.containerView}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              InstaClone
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.profileImage} />
          </View>
          <View style={styles.loginBtnContainer}>
            <Button block style={styles.loginBtn}>
              <Text style={styles.loginBtnTxt}>Login As Amit Rai</Text>
            </Button>
          </View>
          <View style={styles.removeViewContainer}>
            <Text style={styles.removeTxt}>Remove</Text>
          </View>
          <View style={styles.footerContainer}>
            <Button bordered block style={styles.switchAccBtn}>
              <Text style={styles.footerBtnTxt}>Switch Account</Text>
            </Button>
            <Button bordered block style={styles.signupBtn}>
              <Text style={styles.footerBtnTxt}>Signup</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerView: {
    display: 'flex',
    backgroundColor: Colors.lighter,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: Dimensions.get('screen').height / 18,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height / 10,
    width: Dimensions.get('screen').width,
    marginTop: Dimensions.get('screen').height / 5,
    marginBottom: Dimensions.get('screen').height / 60,
  },
  title: {
    fontStyle: 'italic',
    fontSize: 34,
    letterSpacing: 2.5
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: Dimensions.get('screen').height / 7,
    borderRadius: 100
  },
  loginBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 50,
    margin: 25,
  },
  loginBtn: {
    borderRadius: 6,
  },
  loginBtnTxt: {
    textTransform: 'capitalize'
  },
  removeViewContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeTxt: {
    color: 'blue',
    letterSpacing: 1.5
  },
  signupBtn: {
    width: Dimensions.get('screen').width / 2,
  },
  switchAccBtn: {
    width: Dimensions.get('screen').width / 2
  },
  footerBtnTxt: {
    color: 'blue',
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'capitalize'
  }
});

export default App;
