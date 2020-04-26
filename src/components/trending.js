import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatasetCard from './DatasetCard';
import {
    Pane,
    Heading,
    Button
} from 'evergreen-ui';

const theme = {
    // wrapper: {
    //     width: '100%',
    //     margin: '30px 0',
    //     textAlign: 'center'
    // },
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
    cardsWrap: {
        display: 'inline-block',
        width: '90%'
    }
}

export default function Trending() {
    const [datasets, setDatasets] = useState([{title: 'title_1', description: 'description_1', url: 'url'}, ]);

    return (
        <Pane 
        width="100%"
        marginX="30px"
        textAlign="center"
        >
            <div style={theme.head}>
                <Heading size={700} style={theme.headTitle}><b>Trending Datasets</b></Heading>
                <Button appearance="minimal" style={theme.headLink}>See all</Button>
            </div>
            <div style={theme.cardsWrap}>
                {datasets.map(dataset => (
                    <Link to={`/datasets/${encodeURI(dataset.title)}`}>
                        <DatasetCard 
                        url="https://res.cloudinary.com/julabo/image/upload/v1587827072/samples/xray_qyjx6z.png" 
                        title="Pneumonia X-ray set"
                        description="COVID-19 positive/negative labelled Pneumonia X-ray sets"
                        />
                    </Link>
                ))}   

                <DatasetCard 
                url="https://res.cloudinary.com/julabo/image/upload/v1587827071/samples/CTscan_st7iq8.png" 
                title="COVID-19 CT scans"
                description="CT scans and Expert segmentations of COVID-19 patients"
                />
                <DatasetCard 
                url="https://res.cloudinary.com/julabo/image/upload/v1587827071/samples/infectionarea_j4dciw.png" 
                title="Infection tracking"
                description="Time and coordinates of infection cases in the US"
                />
            </div>
        </Pane>
    );
}