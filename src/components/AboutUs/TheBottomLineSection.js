import React from "react";
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import GridContainer from '../GridContainer/GridContainer'
import TextBox from '../TextBox/TextBox'
import Title from '../SectionTitle/Title'
import PContent from '../ParagraphedText/ParagraphedContent'
import Question from '../BoldedHeaderText/BoldedHeader'
import ContactButton from '../Button/ContactButton'
import People from '../../images/about-us/bottom-line/people.svg';
import SVGLoad from '../SVGLoad/SVG'

export default function TheBottomLineSection() {

    const title = "The bottom line"
    const content = "If you’re facing housing precarity in Toronto and want to learn 'tech' skills, we want to help you. Free of charge."
    const question = "Not sure if you qualify?"
    const buttonText = "Contact Us"

    return (
        <GridContainer>
            <Grid item xs={12} md={6}>
            <TextBox>
                <Title title={title} hideCheetohs={["lg","md"]}/>
                <PContent content={content} hideCheetohs={["sm","xs"]}/>
                <Hidden smDown>
                    <Question headerText={question}/>
                    <ContactButton buttonText={buttonText}/>
                </Hidden>
            </TextBox>
            </Grid>
            <Grid item xs={12} md={6}>
                <SVGLoad image={People} alt="peopleSVG" />
                <Hidden mdUp>
                    <Question headerText={question}/>
                    <ContactButton buttonText={buttonText}/>
                </Hidden>
            </Grid>
        </GridContainer>
    )
};

