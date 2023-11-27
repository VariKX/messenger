import { useEffect, useState } from 'react';

const THEME_VALUE = {
  LIGHT: 'light',
  DARK: 'dark',
};

interface IThemeChangerProps {};

export const ThemeChanger: React.FC<IThemeChangerProps> = () => {
  
  const [value, setValue] = useState<string>(THEME_VALUE.LIGHT);
    
  useEffect(() => {
    if (value);
  }, []);

  return (
    <div>

    </div>
  );
};