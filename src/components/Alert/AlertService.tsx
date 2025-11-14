import React, { createContext, useContext, useState } from 'react';

import { Alert } from './index';

interface AlertButton {
  text: string;
  style?: 'default' | 'cancel' | 'destructive';
  onPress?: () => void;
}

interface AlertOptions {
  title?: string;
  message?: string;
  buttons?: AlertButton[];
}

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  alert: (title?: string, message?: string, buttons?: AlertButton[]) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within AlertProvider');
  }
  return context;
};

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alertOptions, setAlertOptions] = useState<AlertOptions | null>(null);

  const showAlert = (options: AlertOptions) => {
    setAlertOptions(options);
  };

  const alert = (title?: string, message?: string, buttons?: AlertButton[]) => {
    showAlert({ title, message, buttons });
  };

  const closeAlert = () => {
    setAlertOptions(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert, alert }}>
      {children}
      <Alert
        visible={!!alertOptions}
        title={alertOptions?.title}
        message={alertOptions?.message}
        buttons={alertOptions?.buttons}
        onClose={closeAlert}
      />
    </AlertContext.Provider>
  );
};
