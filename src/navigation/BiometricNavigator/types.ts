import { StackScreenProps } from '@react-navigation/stack';

export enum BiometricStackName {
  Hello = 'Hello',
  Home = 'Home',
}

export type BiometricStackParamList = {
  [BiometricStackName.Hello]: undefined;
  [BiometricStackName.Home]: undefined;
};

export type HelloScreenNavigationProp = StackScreenProps<BiometricStackParamList, BiometricStackName.Hello>;
export type HomeScreenNavigationProp = StackScreenProps<BiometricStackParamList, BiometricStackName.Home>;


