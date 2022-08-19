import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './posts.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
const threedots = <Icon name="dots-vertical" size={28} color="black" />;
const like = <Icon name="heart-outline" size={32} color="black" />;
const comment = <Icons name="comment" size={28} color="black" />;
const send = <Icons name="paper-plane" size={28} color="black" />;
const save = <Icons name="bookmark" size={28} color="black" />;
const Postcard = ({posts}) => {
  return (
    <View style={styles.directionEnabled}>
      <View style={styles.topBar}>
        <View>
          <Image style={styles.profilePhoto} source={{uri: posts.imageUrl}} />
        </View>
        <View style={styles.profilName}>
          <Text style={styles.pn_text}>{posts.profilname}</Text>
        </View>
        <View style={styles.threeDots}>{threedots}</View>
      </View>
      <View style={styles.postPhotoView}>
        <Image style={styles.postPhoto} source={{uri: posts.postUrl}} />
      </View>
      <View>
        <View style={styles.reactions}>
          <View>{like}</View>
          <View style={styles.middleReaction}>{comment}</View>
          <View>{send}</View>
          <View style={styles.saveIcon}>{save}</View>
        </View>
        <View style={styles.liked}>
          <Image style={styles.firstPhoto} source={{uri: posts.firstLikeUrl}} />
          <Image
            style={styles.secondPhoto}
            source={{uri: posts.secondLikeUrl}} 
          />
          <Image style={styles.lastPhoto} source={{uri: posts.thirdLikeUrl}} />
          <Text style={styles.likedBy}>
            Liked by {posts.likedBy} and others
          </Text>
        </View>
      </View>
      <View style={styles.postInfoView}>
        <View>
          <Text style={styles.infoPN}>{posts.profilname}</Text>
        </View>
        <View>
          <Text style={styles.infoText}>{posts.postText}</Text>
        </View>
      </View>
      <View style={styles.comments}>
        <View>
          <Text style={styles.viewCommentsTx}>
            View all {posts.commentQuantity} comments
          </Text>
        </View>
        <View style={styles.commentLine}>
          <View>
            <Text style={styles.commentPn}>{posts.commentProfileName}</Text>
          </View>
          <View>
            <Text style={styles.comment}>{posts.comment}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.postTimeTx}>{posts.postTime}</Text>
        </View>
      </View>
    </View>
)
}
export default Postcard;