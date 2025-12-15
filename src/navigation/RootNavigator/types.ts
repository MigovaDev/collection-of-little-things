import { StackScreenProps } from '@react-navigation/stack';

export enum RootStackName {
  Landing = 'Landing',
  Biometric = 'Biometric',
  Themes = 'Themes',
  Languages = 'Languages',
}

export type RootStackParamList = {
  [RootStackName.Landing]: undefined;
  [RootStackName.Biometric]: undefined;
  [RootStackName.Themes]: undefined;
  [RootStackName.Languages]: undefined;
};

export type LandingScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  RootStackName.Landing
>;
