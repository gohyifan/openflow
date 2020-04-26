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
    TextInput,
    TickIcon
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
        // boxShadow: '5px 5px 6px 1px #ccc'
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
        color: '#000',
        widh: '65%',
        overflowWrap: 'break-word',
        fontSize: '2vh',
        display: 'inline-block'
    },
    title: {
        marginLeft: '6vh',
        textAlign: 'left',
        color: '#000',
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
    },
    setName: {
        marginTop: 40,
        marginBottom: 15,
    },
    textInput: {
        display: 'block',
        marginBottom: 40
    },
    success: {
        textAlign: 'center'
    }
};

class contributeBanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
            isNewData: false,
            isComplete: false
        };
    }

    // for contribution button
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
                    hasFooter={false}
                    >
                        <div style={theme.formWrapper}>
                            <Heading>Select the data file</Heading>
                            <FilePicker
                            required={true}
                            multiple={true}
                            width={'50%'}
                            marginTop={10}
                            placeholder="myFile.csv"
                            color={"red"}
                            />
                            <Heading marginTop={40}>Choose the dataset you're contributing to</Heading>
                            <Combobox
                            required={true}
                            width={'50%'}
                            marginTop={10}
                            marginBottom={30}
                            placeholder="Pick one"
                            openOnFocus={true}
                            items={dummyData}
                            />
                            <Text>The dataset you're looking for isn't there?</Text>
                            <Button
                            appearance="minimal"
                            style={theme.secondaryButton}
                            onClick={this.setIsNewData.bind(this, true)}
                            float={"right"}
                            >
                            Create new data set
                            </Button>
                            <Button
                            iconBefore="cloud-upload"
                            appearance="minimal"
                            style={theme.contributeButton}
                            marginTop={40}
                            onClick={() => {
                                this.setModal(this, false);
                                this.setIsComplete(this, true);
                                console.log(this.state.isComplete);
                                console.log(this.state.isShown);
                            }}
                            >
                            Contribute my data
                            </Button>
                        </div>
                        <Dialog
                        isShown={this.state.isNewData}
                        onCloseComplete={ this.setIsNewData.bind(this, false)}
                        title="Create a new dataset"
                        hasFooter={false}
                        >
                            <Heading style={theme.setName}>Name your dataset</Heading>
                            <TextInput style={theme.textInput} placeholder="Dataset name"></TextInput>
                            <Button
                            iconBefore="build"
                            appearance="minimal"
                            style={theme.contributeButton}
                            onClick={this.setIsNewData.bind(this, false)}
                            >
                            Create Dataset
                            </Button>
                        </Dialog>
                        <Dialog
                        isShown={this.state.isComplete}
                        onCloseComplete={this.setIsComplete.bind(this, false)}
                        hasFooter={false}
                        hasHeader={false}
                        >
                            <div style={theme.success}>
                                <TickIcon size={40}/>
                                <Heading color={"#000"} size={900}><b>Upload Complete!</b></Heading>
                                <Text>Thanks for your contribution, it means a lot</Text>
                            </div>
                        </Dialog>
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

    // Change state to toggle the modal
    setModal(bool) {
        this.setState((state) => {
            return {isShown: bool}
        });
    }

    // Change state to toggle the child modal (for the creation of a new dataset)
    setIsNewData(bool) {
        this.setState((state) => {
            return {isNewData: bool}
        });
    }

    setIsComplete(bool) {
        this.setState((state) => {
            return {isComplete: bool}
        });
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
