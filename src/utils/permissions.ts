import { Permission, request, RESULTS } from 'react-native-permissions';

export const requestPermission = async (permission: Permission): Promise<boolean> => {
  try {
    const result = await request(permission);
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.error('Error requesting permission:', error);
    return false;
  }
};

