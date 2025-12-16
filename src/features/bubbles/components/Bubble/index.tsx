import React from 'react';

import { Animated, Pressable } from 'react-native';

import { useBubblesScreen } from '../../screens/BubblesScreen/useBubblesScreen';
import { styles } from './styles';

type BubbleProps = {
  bubble: ReturnType<typeof useBubblesScreen>['bubbles'][number];
  onPop: (id: string) => void;
};

export const Bubble = ({ bubble, onPop }: BubbleProps) => {
  const animatedStyle = {
    transform: [
      { translateX: bubble.positionX },
      { translateY: bubble.positionY },
      { scale: bubble.scale },
    ],
    opacity: bubble.opacity,
  };

  return (
    <Animated.View
      style={[
        styles.bubble,
        {
          width: bubble.config.size,
          height: bubble.config.size,
          backgroundColor: bubble.config.color,
        },
        animatedStyle,
      ]}
    >
      <Pressable style={styles.bubblePressable} onPress={() => onPop(bubble.config.id)} />
    </Animated.View>
  );
};

