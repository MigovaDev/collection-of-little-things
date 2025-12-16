import { StackScreenProps } from '@react-navigation/stack';

export enum RootStackName {
  Landing = 'Landing',
  BiometricsNavigator = 'BiometricsNavigator',
  Themes = 'Themes',
  Languages = 'Languages',
  BubblesNavigator = 'BubblesNavigator',
}

export type RootStackParamList = {
  [RootStackName.Landing]: undefined;
  [RootStackName.BiometricsNavigator]: undefined;
  [RootStackName.Themes]: undefined;
  [RootStackName.Languages]: undefined;
  [RootStackName.BubblesNavigator]: undefined;
};

export type LandingScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  RootStackName.Landing
>;
