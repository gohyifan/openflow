import React, { useState } from  'react';
import {
    Pane,
    Heading,
    Text,
    Avatar,
    Button
} from 'evergreen-ui';

const theme = {
    wrapper: {
        textAlign: 'center',
        margin: '30px 0',
        width: '100%',
    },
    head: {
        width: '86%',
        margin: '0 7%',
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-between'
    },
    headTitle: {
        color: 'black'
    },
    headLink: {
        color: '#2c2c64'
    },
    linkSection: {
        width: '90%',
        margin: '0 5%'
    },
    linkColumn: {
        width: '28%',
        display: 'inline-block',
        margin: '10px 2%'
    },
    link: {
        display: 'flex',
        padding: '10px',
        margin: '20px 0',
        textAlign: 'left',
        width: '100%',
        borderRadius: 10,
        cursor: 'pointer'
      },
      img: {
        display: 'inline-block',
        marginRight: '15px',
      },
      title: {
        display: 'inline-block',
        color: "#000"
      }
};

export default function New() {
    return (
        <Pane style={theme.wrapper}>
            <div style={theme.head}>
                <Heading size={700} style={theme.headTitle}><b>Newest</b></Heading>
                <Button appearance="minimal" style={theme.headLink}>See all</Button>
            </div>
            <div style={theme.linkSection}>
                <div style={theme.linkColumn}>
                    <div style={theme.linkWrapper}>
                        <Pane style={theme.link}>
                            <Avatar
                            src="https://www.logolynx.com/images/logolynx/ae/aedde728ab8423d2e5a4ed95205fe5cf.jpeg"
                            name="Stanford"
                            size={50}
                            style={theme.img}
                            />
                            <div >
                                <Heading size={600} style={theme.title}><b>Stanford University</b></Heading>
                                <Text size={300}><br/>Healthcare data</Text>
                            </div>
                        </Pane>
                    </div>
                    <div style={theme.linkWrapper}>
                        <Pane style={theme.link}>
                            <Avatar
                            src="https://assets.fontsinuse.com/static/use-media-items/53/52888/upto-700xauto/59355ed9/Oxford-University-ceremonial-crest.png?resolution=0"
                            name="Oxford"
                            size={50}
                            style={theme.img}
                            />
                            <div >
                                <Heading size={600} style={theme.title}><b>University of Oxford</b></Heading>
                                <Text size={300}><br/>Sleep quality data</Text>
                            </div>
                        </Pane>
                    </div>
                </div>
                <div style={theme.linkColumn}>
                    <div style={theme.linkWrapper}>
                        <Pane style={theme.link}>
                            <Avatar
                            src="https://pbs.twimg.com/profile_images/953550423524282368/iFJULpzx_400x400.jpg"
                            name="Durham"
                            size={50}
                            style={theme.img}
                            />
                            <div >
                                <Heading size={600} style={theme.title}><b>Durham University</b></Heading>
                                <Text size={300}><br/>Water quality data</Text>
                            </div>
                        </Pane>
                    </div>
                    <div style={theme.linkWrapper}>
                        <Pane style={theme.link}>
                            <Avatar
                            src="https://brand.ucla.edu/images/identity/logos-and-marks/campus-seal.jpg"
                            name="UCLA"
                            size={50}
                            style={theme.img}
                            />
                            <div >
                                <Heading size={600} style={theme.title}><b>UCLA</b></Heading>
                                <Text size={300}><br/>Healthcare data</Text>
                            </div>
                        </Pane>
                    </div>
                </div>
                <div style={theme.linkColumn}>
                    <div style={theme.linkWrapper}>
                        <Pane style={theme.link}>
                            <Avatar
                            src="https://www.pythagoras.co.uk/wp-content/uploads/2015/06/Image_Profile_Bath.jpg"
                            name="University of Bath"
                            size={50}
                            style={theme.img}
                            />
                            <div >
                                <Heading size={600} style={theme.title}><b>University of Bath</b></Heading>
                                <Text size={300}><br/>Sports data</Text>
                            </div>
                        </Pane>
                    </div>
                    <div style={theme.linkWrapper}>
                        <Pane style={theme.link}>
                            <Avatar
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/1200px-NUS_coat_of_arms.svg.png"
                            name="NUS"
                            size={50}
                            style={theme.img}
                            />
                            <div >
                                <Heading size={600} style={theme.title}><b>NUS</b></Heading>
                                <Text size={300}><br/>Healthcare data</Text>
                            </div>
                        </Pane>
                    </div>
                </div>
            </div>
        </Pane>
    );
}
