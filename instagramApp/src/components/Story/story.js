import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './story_style';
const Story = props => {
  return (
    <View>
      <Image 
        style={[(
          props.name === 'Your story')
            ? styles.your_story
            : styles.friends_stories
        ]}
        source={{uri: props.link}}
      />
      <Text style={styles.story_name}>{props.name}</Text>
    </View>
  );
}
export default Story;
