import React, { Component } from 'react';
import illustration from './assets/illustration.png';
import {
    Pane,
    Heading,
    Text,
    Button,
    defaultTheme,
    ThemeProvider,
    Dialog,
    FilePicker,
    Combobox,
} from 'evergreen-ui';

// dummy dataset list
const dummyData = ["Covid-1", "Covid-2", "Covid-3", "Covid-4", "Covid-5", "Covid-6", "Covid-7", "Covid-8", "Covid-9", "Covid-10", "Covid-11", "Covid-12", "Covid-13", "Covid-14", "Covid-15", "Covid-16", "Covid-17", "Covid-18", "Covid-19", "New Dataset"]

const theme = {
    ...defaultTheme,
    wrapper: {
        textAlign: 'center',
        width: '100%',
        margin: '30px 0'
    },
    banner: {
        textAlign: 'left',
        backgroundColor: '#fcfcfc',
        width: '90%',
        height: '33vh',
        display: 'inline-block',
        borderRadius: 10,
        boxShadow: '5px 5px 6px 1px #ccc'
    },
    textWrapper: {
        display: 'inline-block',
        height: '100%',
        width: '60%'
    },
    illustration: {
        float: 'right',
        height: '33vh',
        width: '33vh',
        marginRight: '10%'
    },
    desc: {
        marginLeft: '6vh',
        marginTop: '2%',
        textAlign: 'left',
        color: '#4a4a4a',
        widh: '65%',
        overflowWrap: 'break-word',
        fontSize: '2vh',
        display: 'inline-block'
    },
    title: {
        marginLeft: '6vh',
        textAlign: 'left',
        color: '#4a4a4a',
        marginTop: '5%',
        fontSize: '5vh'
    },
    buttonsWrap: {
        marginLeft: '6vh',
        marginTop: '4vh',
        marginBottom: '4vh+'
    },
    contributeButton: {
        backgroundColor: '#2c2c64',
        color: '#fcfcfc'
    },
    secondaryButton: {
        color: '#2c2c64'
    },
    formWrapper: {
        margin: '20px 0'
    }
};

class contributeBanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
            // for demo purposes, simulate a loading time
            isLoading: false
        };
    }



    checkVerified() {
        // if they are a verified contributor, display unlocked button and make contribution form available
        if (this.props.verified) {
            return(
                <div style={theme.buttonsWrap}>
                    <Button onClick={this.setModal.bind(this, true)} appearance="minimal" style={theme.contributeButton}>Contribute</Button>
                    <Dialog
                    isShown={this.state.isShown}
                    onCloseComplete={ this.setModal.bind(this, false) }
                    title="Contribute your data"
                    confirmLabel={this.state.isLoading ? "Almost there..." : "Contribute Data"}
                    hasFooter={false}
                    >
                        <form style={theme.formWrapper}>
                            <Heading>Select the data file</Heading>
                            <FilePicker
                            multiple
                            width={'50%'}
                            marginTop={10}
                            placeholder="myFile.csv"
                            color={"red"}
                            />
                            <Heading marginTop={40}>Choose the dataset you're contributing to</Heading>
                            <Combobox
                            width={'50%'}
                            marginTop={10}
                            marginBottom={60}
                            placeholder="Pick one"
                            openOnFocus={true}
                            items={dummyData}
                            />

                            <Button iconBefore="cloud-upload" appearance="minimal" style={theme.contributeButton} onClick={this.setModal.bind(this, false)}>Contribute my data</Button>
                        </form>

                    </Dialog>
                </div>
            );
        }
        // otherwise, lock button and display 'verify my account'
        else {
            return(
                <div style={theme.buttonsWrap}>
                    <Button iconBefore="lock" appearance="minimal" style={theme.contributeButton}>Contribute</Button>
                    <Button appearance="minimal" style={theme.secondaryButton}>Verify my account</Button>
                </div>
            );
        }
    }

    setModal(bool) {
        this.setState((state) => {
            return {isShown: bool}
        });
    }

    fakeContribution() {
        // simple form to enter details
        // open a dialog modal

    }

    render() {
            return (
                <ThemeProvider value={theme}>
                    <div style={theme.wrapper}>
                        <Pane style={theme.banner}>
                            <div style={theme.textWrapper}>
                                <Heading size={900} style={theme.title}>
                                    <b>Data science for social impact</b>
                                </Heading>
                                <Text style={theme.desc}>
                                    <b>Lorem Ipsum is simply dummy text of the printing and typesetting industry</b>
                                </Text>
                                { this.checkVerified() }
                            </div>
                            <img id="illustration" src={illustration} alt="" style={theme.illustration}/>
                        </Pane>
                    </div>
                </ThemeProvider>
            );

    }
}

export default contributeBanner;
