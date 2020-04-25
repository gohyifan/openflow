import React from 'react';
import { Card, Paragraph, Heading } from 'evergreen-ui';
function DatasetCard(props) {
  return (
      <Card background="tint1" width="250px">
        <img src={props.url} height="250" width="250"></img>
        <Heading color="black" paddingLeft="12px" paddingTop="8px" fontSize="18px" fontWeight="700">{props.title}</Heading>
        <Paragraph color="grey" paddingBottom="12px" paddingLeft="12px">{props.description}</Paragraph>
      </Card>
  );
}

export default DatasetCard;
