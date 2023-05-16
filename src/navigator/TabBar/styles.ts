import { StyleSheet } from 'react-native'
import { spaces } from '../../../spaces'
//spaces

const styles = StyleSheet.create({
  containerWindow: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'rgba(87, 96, 123, 0.3)',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    borderTopWidth: 1,
    paddingHorizontal: 20,

  },
  TabBarTextStyle: {
    fontSize: 12,
    marginTop: 3,
    letterSpacing: 0.16,
    lineHeight: 13,
  },
  tab: {
    width: spaces.windowWidth / 5.25,
    alignItems: 'center',
    height: 40,
    // backgroundColor:'red'
  },
})

export default styles