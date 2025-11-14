export enum RootStackName {
  Landing = 'Landing',
  Biometric = 'Biometric',
}

export type RootStackParamList = {
  [RootStackName.Landing]: undefined;
  [RootStackName.Biometric]: undefined;
};
