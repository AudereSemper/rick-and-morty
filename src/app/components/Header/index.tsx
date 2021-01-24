import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from 'src/assets/theme';
import CustomSwitch from '../CustomSwitch/index';
import NavbarContainer from './styles';
import Navbar from '../Menu';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isToggled, setIsToggled] = useState(false);
  const themeSelected = theme === 'light' ? lightTheme : darkTheme;
  const themeToggler = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  const handleThemeToggler = useCallback((e) => {
    setIsToggled(e.target.checked);
    themeToggler();
  },
  [themeToggler]);

  return (
    <ThemeProvider theme={themeSelected}>
      <GlobalStyles />
      <NavbarContainer>
        <Navbar />

        <CustomSwitch
          id="test-switch"
          toggled={isToggled}
          onChange={handleThemeToggler}
        />
      </NavbarContainer>
    </ThemeProvider>
  );
};

export default Header;
