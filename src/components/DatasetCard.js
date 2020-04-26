import React from 'react';
import { Pane, Paragraph, Heading } from 'evergreen-ui';

const theme = {
  linkWrapper: {
    display:'inline-block',
    width: '28%',
    margin: '10px 2%',
    textAlign: 'center'
  },
  infoWrapper: {
    display: 'inline-block',
    textAlign: 'left',
    width: 250,
    borderRadius: '10px',
    cursor: 'pointer'
  },
  img: {
    borderRadius: '10px 10px 0 0'
  }
};

function DatasetCard(props) {
  return (
      <Pane style={theme.linkWrapper}>
        <Pane hoverElevation={3} style={theme.infoWrapper}>
          <img style={theme.img} src={props.url} height="250" width="250" alt=""></img>
          <Heading color="black" paddingLeft="12px" paddingTop="8px" fontSize="18px" fontWeight="700">{props.title}</Heading>
          <Paragraph color="grey" paddingBottom="12px" paddingLeft="12px">{props.description}</Paragraph>
        </Pane>
      </Pane>
  );
}

export default DatasetCard;
