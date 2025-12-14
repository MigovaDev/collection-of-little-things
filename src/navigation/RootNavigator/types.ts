import {StackScreenProps} from "@react-navigation/stack";


export enum RootStackName {
  Landing = 'Landing',
  Biometric = 'Biometric',
}

export type RootStackParamList = {
  [RootStackName.Landing]: undefined;
  [RootStackName.Biometric]: undefined;
};

export type LandingScreenNavigationProp = StackScreenProps<RootStackParamList, RootStackName.Landing>;
