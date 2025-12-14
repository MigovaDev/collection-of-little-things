export enum Theme {
  Dark = 'dark',
  Light = 'light',
  Toxic = 'toxic',
}

export type ThemeColors = {
  background: {
    dark: string;
    light: string;
    transparent: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    dark: string;
    error: string;
    success: string;
  };
  overlay: {
    dark: string;
  };
  button: {
    background: string;
    border: string;
    text: string;
    primary: string;
    destructive: string;
  };
  border: {
    separator: string;
  };
  shadow: {
    black: string;
  };
  status: {
    success: string;
    error: string;
    destructive: string;
  };
  ui: {
    dot: {
      inactive: string;
      active: string;
    };
  };
};

export const themes: Record<Theme, ThemeColors> = {
  [Theme.Dark]: {
    background: {
      dark: '#0d0d0d',
      light: '#f2f2f7',
      transparent: 'transparent',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255,255,255,0.9)',
      tertiary: 'rgba(255,255,255,0.7)',
      dark: '#000',
      error: '#ff6b6b',
      success: '#4caf50',
    },
    overlay: {
      dark: 'rgba(0, 0, 0, 0.4)',
    },
    button: {
      background: 'rgba(255,255,255,0.12)',
      border: 'rgba(255,255,255,0.2)',
      text: '#fff',
      primary: '#007aff',
      destructive: '#ff3b30',
    },
    border: {
      separator: '#c6c6c8',
    },
    shadow: {
      black: '#000',
    },
    status: {
      success: '#4caf50',
      error: '#ff6b6b',
      destructive: '#ff3b30',
    },
    ui: {
      dot: {
        inactive: 'rgba(255,255,255,0.25)',
        active: '#fff',
      },
    },
  },
  [Theme.Light]: {
    background: {
      dark: '#ffffff',
      light: '#f5f5f5',
      transparent: 'transparent',
    },
    text: {
      primary: '#000',
      secondary: 'rgba(0,0,0,0.8)',
      tertiary: 'rgba(0,0,0,0.6)',
      dark: '#000',
      error: '#ff3b30',
      success: '#34c759',
    },
    overlay: {
      dark: 'rgba(0, 0, 0, 0.4)',
    },
    button: {
      background: 'rgba(0,0,0,0.08)',
      border: 'rgba(0,0,0,0.15)',
      text: '#000',
      primary: '#007aff',
      destructive: '#ff3b30',
    },
    border: {
      separator: '#c6c6c8',
    },
    shadow: {
      black: '#000',
    },
    status: {
      success: '#34c759',
      error: '#ff3b30',
      destructive: '#ff3b30',
    },
    ui: {
      dot: {
        inactive: 'rgba(0,0,0,0.2)',
        active: '#000',
      },
    },
  },
  [Theme.Toxic]: {
    background: {
      dark: '#0a0a0a',
      light: '#0f1a0f',
      transparent: 'transparent',
    },
    text: {
      primary: '#00ff41',
      secondary: '#ff00ff',
      tertiary: '#00ffff',
      dark: '#00ff41',
      error: '#ff0080',
      success: '#00ff41',
    },
    overlay: {
      dark: 'rgba(0, 0, 0, 0.6)',
    },
    button: {
      background: 'rgba(0, 255, 65, 0.15)',
      border: '#00ff41',
      text: '#00ff41',
      primary: '#ff00ff',
      destructive: '#ff0080',
    },
    border: {
      separator: '#00ff41',
    },
    shadow: {
      black: '#000',
    },
    status: {
      success: '#00ff41',
      error: '#ff0080',
      destructive: '#ff0080',
    },
    ui: {
      dot: {
        inactive: 'rgba(0, 255, 65, 0.3)',
        active: '#00ff41',
      },
    },
  },
};

