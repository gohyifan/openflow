import React from 'react';
import {
  Button,
  Pane,
  Text,
  Pill,
  Heading,
  Paragraph,
  Link,
  Strong,
  Table,
  defaultTheme,
  ThemeProvider,
} from 'evergreen-ui';

const theme = {
  ...defaultTheme,
  primaryButton: {
    backgroundColor: '#2c2c64',
    color: '#fcfcfc'
  },
  secondaryButton: {
    color: '#2c2c64'
  }
}

function Dataset() {
  return (
    <ThemeProvider value={theme}>
      <Pane
        id="banner"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        paddingY={16}
        paddingX={32}
        borderBottom="muted"
        >
        <Pane textAlign="left" width="60%">
          <Text>University of California</Text>
          <Pill display="inline-flex" marginX={8} color="teal" isSolid>Healthcare</Pill>
          <Heading size={800} marginY={8}>Medi-Cal Certified Eligible Tables</Heading>
          <Paragraph size={500} marginY={16}>
            Medi-Cal certified eligible totals by county and demographic characteristics to inform the public, stakeholders, and researchers.
          </Paragraph>
          <Pane display="flex">
            <Text marginRight={16}>Version 26</Text>
            <Text marginRight={16}>Last Updated: 25/04/2020</Text>
            <Link href="#">32 comments</Link>
          </Pane>
        </Pane>
        <Pane id="buttons" display="flex" flexDirection="column">
          <Button height={40} iconBefore="lock" appearance="minimal" style={theme.primaryButton}>Contribute dataset</Button>
          <Button height={40} iconBefore="tick-circle" appearance="minimal" style={theme.secondaryButton} marginTop={8}>Verify my account</Button>
        </Pane>
      </Pane>
      <Pane
        id="body"
        width="100%"
        paddingY={16}
        paddingX={32}
        >
        <Pane id="info-menu" display="flex" justifyContent="space-between" marginBottom={16}>
          <Pane id="info">
            <Strong marginRight={16}>26 columns</Strong>
            <Strong>1350 rows</Strong>
          </Pane>
          <Pane id="menu">
            <Button iconBefore="sort" appearance="minimal" style={theme.secondaryButton}>EDIT ROW</Button>
            <Button iconBefore="download" appearance="minimal" style={theme.secondaryButton}>DOWNLOAD</Button>
          </Pane>
        </Pane>
        <Pane id="table">
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>
              Index
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Location
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Years of Potential
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Health Index
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Percentage %
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Potential
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Gender
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.VirtualBody height={400}>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
            <Table.Row isSelectable>
              <Table.TextCell>
                12345
              </Table.TextCell>
              <Table.TextCell>
                Singapore
              </Table.TextCell>
              <Table.TextCell>
                59734932
              </Table.TextCell>
              <Table.TextCell>
                6349583457
              </Table.TextCell>
              <Table.TextCell>
                0.78
              </Table.TextCell>
              <Table.TextCell>
                743.383845
              </Table.TextCell>
              <Table.TextCell>
                F
              </Table.TextCell>
            </Table.Row>
          </Table.VirtualBody>
        </Table>
        </Pane>
      </Pane>
    </ThemeProvider>
  );
}

export default Dataset;
