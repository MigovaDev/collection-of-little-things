import { StackScreenProps } from '@react-navigation/stack';

export enum BiometricStackName {
  Password = 'Password',
  Home = 'Home',
}

export type BiometricStackParamList = {
  [BiometricStackName.Password]: undefined;
  [BiometricStackName.Home]: undefined;
};

export type PasswordScreenNavigationProp = StackScreenProps<BiometricStackParamList, BiometricStackName.Password>;
export type HomeScreenNavigationProp = StackScreenProps<BiometricStackParamList, BiometricStackName.Home>;


