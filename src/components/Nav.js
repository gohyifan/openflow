import React from 'react';
import { Link } from "react-router-dom";
import { Button, Pane, SearchInput, defaultTheme, ThemeProvider } from 'evergreen-ui';

// relative imports
import logo from '../logo.svg';

const theme = {
  ...defaultTheme,
  secondaryButton: {
    color: '#2c2c64'
  },
  advanceButton: {
    color: '#4a4a4a'
  }
}

function Nav() {
  return (
    <ThemeProvider value={theme}>
      <Pane
        elevation={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX={32}
      >
        <Link to="/">
          <img src={logo} style={{ height: "100px" }} alt=""/>
        </Link>
        <Pane display="flex" alignItems="center">
          <SearchInput placeholder="Search datasets..." height={40} marginRight={8} />
          <Button height={40} appearance="minimal" style={theme.advanceButton} marginRight={8}>Advanced</Button>
        </Pane>
        <div>
          <Button height={40} appearance="minimal" style={theme.secondaryButton}>Log out</Button>
        </div>
      </Pane>
    </ThemeProvider>
  );
}

export default Nav;
