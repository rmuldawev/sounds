import { StyleSheet } from 'react-native'
import { spaces } from '../../../spaces'
//spaces

const styles = StyleSheet.create({
  containerWindow: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingHorizontal: 22,

  },
  TabBarTextStyle: {
    fontSize: 13,
    marginTop: 1,
    letterSpacing: 0.16,
    lineHeight: 15,
  },
  tab: {
    width: spaces.windowWidth / 5.25,
    alignItems: 'center',
    // height: 50,
    // backgroundColor:'red',
  },
})

export default styles