import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#a3ccf5',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent:'space-between',
    flex:1
  },
  trackImage: {
    height: 300,
    width: 200,
  },
  albumImage: {
    height: 400,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft:10
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',

  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom:80
  },
  image: {
    height: 350,
    width: 300,
    resizeMode: 'contain',
  },
  tapIcon: {
    height: 200,
    width: 300,
  },
  prevTrack: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopBnt: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  play: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column1: {
    height:110,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column2: {
    height:110,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  column3: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height:110
  },
  name:{
    alignSelf:'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#a3ccf5',

  },
});

export default styles;
