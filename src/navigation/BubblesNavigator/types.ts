import { StackScreenProps } from '@react-navigation/stack';

export enum BubblesStackName {
  BubblesCount = 'BubblesCount',
  Bubbles = 'Bubbles',
}

export type BubblesStackParamList = {
  [BubblesStackName.BubblesCount]: undefined;
  [BubblesStackName.Bubbles]: { count: number };
};

export type BubblesCountScreenNavigationProp = StackScreenProps<
  BubblesStackParamList,
  BubblesStackName.BubblesCount
>;

export type BubblesScreenNavigationProp = StackScreenProps<
  BubblesStackParamList,
  BubblesStackName.Bubbles
>;


