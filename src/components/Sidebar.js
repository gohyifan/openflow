import React from 'react';
import {
  Heading,
  Text,
  Button,
  Avatar,
  Pane
} from 'evergreen-ui';

const theme = {
  avatarSection: {
    marginTop: '10%',
    marginLeft: '20px'
  },
  avatarHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  avatarImg: {
    display: 'inline-block',
    marginRight: '15px',
  },
  avatarTitle: {
    display: 'inline-block',
    color: "#000"
  },
  buttons: {
    marginRight: '100%',
    marginTop: '5px',
    color: '#2c2c64',
    fontSize: '15px',
  },
  buttonsWrapper: {
    display: 'block'
  },
  info: {
    marginLeft: '20px',
    display: 'block',
  },
  infoHead: {
    color: '#000',
    marginTop: '10%',
    marginBottom: '10px',
  },
  infoLink: {
    color: "#4a4a4a",
    fontSize: '12px',
    textDecoration: "none",
    margin: 0
  }
}

function Sidebar() {
  return (
    <Pane style={theme.wrapper}>
      <div style={theme.avatarSection}>
        <div style={theme.avatarHeader}>
          <Avatar
          src="https://eddie-hernandez.com/wp-content/uploads/2019/07/Professional_Headshots_17.jpg"
          name="Nicolina Lindholm"
          size={50}
          style={theme.avatarImg}
          />
          <div>
            <Heading size={600} style={theme.avatarTitle}><b>Nicolina Lindholm</b></Heading>
            <Text size={300}><br/>National University of Singapore</Text>
          </div>
        </div>
        <div style={theme.buttonsWrapper}>
          <Button appearance="minimal" style={theme.buttons} iconBefore="person">Profile</Button>
          <Button appearance="minimal" style={theme.buttons} iconBefore="database">Collection</Button>
          <Button appearance="minimal" style={theme.buttons} iconBefore="cog">Settings</Button>
        </div>
      </div>
      <div style={theme.info}>
        <Heading size={600} style={theme.infoHead}><b>Featured</b></Heading>
        <a style={theme.infoLink} href="/">Healthcare<br/></a>
        <a style={theme.infoLink} href="/">Sports and wellness<br/></a>
        <a style={theme.infoLink} href="/">Sleep quality<br/></a>
        <a style={theme.infoLink} href="/">Water quality<br/></a>
      </div>
      <div style={theme.info}>
        <Heading size={600} style={theme.infoHead}><b>Categories</b></Heading>
        <a style={theme.infoLink} href="/">Healthcare<br/></a>
        <a style={theme.infoLink} href="/">Sports and wellness<br/></a>
        <a style={theme.infoLink} href="/">Sleep quality<br/></a>
        <a style={theme.infoLink} href="/">Water quality<br/></a>
      </div>
    </Pane>
  );
}

export default Sidebar;
