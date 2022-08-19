import {StyleSheet, Dimensions} from "react-native";
export default StyleSheet.create({
  directionEnabled: {
    flex: 1,
    marginBottom: 10,
  },
  profilName: {
    justifyContent: 'center',
    marginLeft: 7,
  },
  pn_text: {
    fontSize: 18,
    color: 'black',
    textAlignVertical: 'center',
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  topBar: {
    flexDirection: 'row',
    marginTop: 10,
  },
  threeDots: {
    marginLeft: 'auto',
    marginRight: 10,
    justifyContent: 'center',
  },
  postPhoto: {
    height: Dimensions.get('window').height/1.5,
  },
  postPhotoView: {
    marginTop: 10,
  },
  postInfoView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  infoPN: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginLeft: 10,
  },
  infoText: {
    color: 'black',
    fontSize: 17,
    marginLeft: 5,
  },
  reactions: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  saveIcon: {
    marginLeft: 'auto',
    marginRight: 15,
  },
  middleReaction: {
    marginHorizontal: 18,
  },
  liked:{
    marginLeft: 10,
    marginTop: 5,
  },
  likedBy: {
    fontSize: 15,
    color: 'black',
    marginLeft: 25,
  },
  firstPhoto: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: 10,
  },
  secondPhoto: {
    width: 20,
    height: 20,
    borderRadius: 50,
    position: 'absolute',
    left: 20,
  },
  lastPhoto: {
    width: 20,
    height: 20,
    borderRadius: 50,
    position: 'absolute',
    left: 30,
  },
  liked: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  commentLine: {
    flexDirection: 'row',
  },
  comments: {
    marginLeft: 10,
  },
  commentPn: {
    fontWeight: 'bold',
    marginRight: 5,
    color: 'black'
  },
  comment: {
    color: 'black',
  },
  viewCommentsTx: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 3,
  },
  postTimeTx: {
    fontSize: 14,
    marginTop: 5,
  }
})