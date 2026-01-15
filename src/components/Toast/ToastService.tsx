import React, { createContext, useCallback, useContext, useRef, useState } from 'react';

import { Animated  } from 'react-native';

import { screenHeight } from '@constants/screenDimensions';

import { Toast } from './index';

type ToastItem = {
  id: string;
  translateY: Animated.Value;
  opacity: Animated.Value;
  text: string;
};

interface ToastContextType {
  showToast: (text?: string) => void;
  clearToasts: () => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

const MAX_TOASTS = 5;
const targetY = screenHeight * 0.3;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const toastIdCounter = useRef(0);

  const showToast = useCallback((text: string = 'Copied!') => {
    const toastId = `toast-${toastIdCounter.current++}`;
    const translateY = new Animated.Value(0);
    const opacity = new Animated.Value(1);

    setToasts(prev => {
      const newToasts = [...prev, { id: toastId, translateY, opacity, text }];
      if (newToasts.length > MAX_TOASTS) {
        const removed = newToasts.shift();
        if (removed) {
          removed.translateY.stopAnimation();
          removed.opacity.stopAnimation();
        }
      }
      return newToasts;
    });

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -targetY,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setToasts(prev => prev.filter(toast => toast.id !== toastId));
    });
  }, []);

  const clearToasts = useCallback(() => {
    setToasts(prev => {
      prev.forEach(toast => {
        toast.translateY.stopAnimation();
        toast.opacity.stopAnimation();
      });
      return [];
    });
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, clearToasts }}>
      {children}
      {toasts.map(toast => (
        <Toast key={toast.id} translateY={toast.translateY} opacity={toast.opacity} text={toast.text} />
      ))}
    </ToastContext.Provider>
  );
};

