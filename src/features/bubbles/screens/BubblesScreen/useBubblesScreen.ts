import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Animated } from 'react-native';

import { screenHeight, screenWidth } from '@constants/screenDimensions';
import { ThemeColors } from '@constants/themes';

type BubbleConfig = {
  id: string;
  size: number;
  color: string;
};

type BubbleRuntime = {
  config: BubbleConfig;
  positionX: Animated.Value;
  positionY: Animated.Value;
  scale: Animated.Value;
  opacity: Animated.Value;
  popped: boolean;
};

const MIN_SIZE = 40;
const MAX_SIZE = 80;
const MAX_BUBBLES = 20;

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const createBubbleConfigs = (count: number, colors: { primary: string; secondary: string }) =>
  Array.from({ length: count }).map((_, index) => {
    const size = randomBetween(MIN_SIZE, MAX_SIZE);
    const color = index % 2 === 0 ? colors.primary : colors.secondary;

    return {
      id: String(index),
      size,
      color,
    };
  });

type UseBubblesScreenParams = {
  count: number;
  colors: ThemeColors;
};

type UseBubblesScreenReturn = {
  bubbles: BubbleRuntime[];
  handlePop: (id: string) => void;
  remaining: number;
};

export const useBubblesScreen = ({
  count,
  colors,
}: UseBubblesScreenParams): UseBubblesScreenReturn => {
  const [bubbles, setBubbles] = useState<BubbleRuntime[]>([]);
  
  const areaWidth = screenWidth;
  const areaHeight = screenHeight;

  const animatedValuesPoolRef = useRef<Array<{
    positionX: Animated.Value;
    positionY: Animated.Value;
    scale: Animated.Value;
    opacity: Animated.Value;
  }>>([]);
  const animationRefs = useRef<Map<string, Animated.CompositeAnimation>>(new Map());
  const isPoppedRef = useRef<Map<string, boolean>>(new Map());

  // Инициализируем pool animated values один раз
  useEffect(() => {
    if (animatedValuesPoolRef.current.length === 0) {
      for (let i = 0; i < MAX_BUBBLES; i++) {
        animatedValuesPoolRef.current.push({
          positionX: new Animated.Value(0),
          positionY: new Animated.Value(0),
          scale: new Animated.Value(1),
          opacity: new Animated.Value(1),
        });
      }
    }
  }, []);

  useEffect(() => {
    const configs = createBubbleConfigs(count, {
      primary: colors.button.background,
      secondary: colors.text.secondary,
    });

    // Останавливаем предыдущие анимации
    animationRefs.current.forEach(animation => animation.stop());
    animationRefs.current.clear();
    isPoppedRef.current.clear();

    const runtime: BubbleRuntime[] = configs.map((config, index) => {
      const animatedValues = animatedValuesPoolRef.current[index];
      if (!animatedValues) {
        return null as unknown as BubbleRuntime;
      }

      const initialX = randomBetween(0, areaWidth - config.size);
      const initialY = randomBetween(0, areaHeight - config.size);
      animatedValues.positionX.setValue(initialX);
      animatedValues.positionY.setValue(initialY);
      animatedValues.scale.setValue(1);
      animatedValues.opacity.setValue(1);

      isPoppedRef.current.set(config.id, false);

      // Функция для анимации движения
      const animate = () => {
        if (isPoppedRef.current.get(config.id)) {
          return;
        }

        const targetX = randomBetween(0, areaWidth - config.size);
        const targetY = randomBetween(0, areaHeight - config.size);
        const duration = randomBetween(4000, 8000);

        const animationX = Animated.timing(animatedValues.positionX, {
          toValue: targetX,
          duration,
          useNativeDriver: true,
        });

        const animationY = Animated.timing(animatedValues.positionY, {
          toValue: targetY,
          duration,
          useNativeDriver: true,
        });

        const parallelAnimation = Animated.parallel([animationX, animationY]);
        
        parallelAnimation.start(({ finished }) => {
          if (finished && !isPoppedRef.current.get(config.id)) {
            animate();
          }
        });

        animationRefs.current.set(config.id, parallelAnimation);
      };

      // Запускаем первую анимацию
      animate();

      return {
        config,
        positionX: animatedValues.positionX,
        positionY: animatedValues.positionY,
        scale: animatedValues.scale,
        opacity: animatedValues.opacity,
        popped: false,
      };
    });

    setBubbles(runtime.filter(Boolean));

    return () => {
      animationRefs.current.forEach(animation => animation.stop());
      animationRefs.current.clear();
      isPoppedRef.current.clear();
    };
  }, [areaHeight, areaWidth, colors.button.background, colors.text.secondary, count]);

  const handlePop = useCallback((id: string) => {
    setBubbles(prev =>
      prev.map(bubble => {
        if (bubble.config.id !== id || bubble.popped) {
          return bubble;
        }

        // Помечаем как лопнувший
        isPoppedRef.current.set(id, true);

        // Останавливаем анимацию движения
        const animation = animationRefs.current.get(id);
        if (animation) {
          animation.stop();
          animationRefs.current.delete(id);
        }

        // Анимация лопанья: сначала увеличиваем, потом уменьшаем и делаем прозрачным
        const expandAnimation = Animated.timing(bubble.scale, {
          toValue: 1.3,
          duration: 100,
          useNativeDriver: true,
        });

        const collapseAnimation = Animated.parallel([
          Animated.timing(bubble.scale, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(bubble.opacity, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
          }),
        ]);

        const popAnimation = Animated.sequence([expandAnimation, collapseAnimation]);

        popAnimation.start(({ finished }) => {
          if (finished) {
            setBubbles(currentBubbles =>
              currentBubbles.map(b =>
                b.config.id === id ? { ...b, popped: true } : b,
              ),
            );
          }
        });

        return bubble;
      }),
    );
  }, []);

  const remaining = useMemo(() => bubbles.filter(bubble => !bubble.popped).length, [bubbles]);

  return {
    bubbles,
    handlePop,
    remaining,
  };
};
