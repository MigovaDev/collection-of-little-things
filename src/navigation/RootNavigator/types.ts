import { StackScreenProps } from '@react-navigation/stack';

export enum RootStackName {
  Landing = 'Landing',
  Biometric = 'Biometric',
  Themes = 'Themes',
}

export type RootStackParamList = {
  [RootStackName.Landing]: undefined;
  [RootStackName.Biometric]: undefined;
  [RootStackName.Themes]: undefined;
};

export type LandingScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  RootStackName.Landing
>;
