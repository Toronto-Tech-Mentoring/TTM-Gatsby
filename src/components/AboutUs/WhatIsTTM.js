import React from "react"

import BoldedHeader from '../BoldedHeaderText/BoldedHeader'
import TextBox from '../TextBox/TextBox'
import Content from '../ParagraphedText/ParagraphedContent'
// import styles from "./HeroText.module.css"
import RainbowHeart from "../../images/about-us/rainbowHeart.svg"
import CheetoLeft from "../../images/cheetohs/cheetohLeft.svg"
import CheetoRight from "../../images/cheetohs/cheetohRight.svg"
import { useStyles } from "../Cheetos/cheetohStyle"
import {
  SkylineHeader as SkylineHeaderSVG
} from "../SkylineSVG"

export default function WhatiIsTTM() {
    const classes = useStyles()
    const headerText = "What is Toronto Tech Mentoring?"
    const content = "We aim to empower homeless and underhoused individuals in Toronto through technology skills, mentorship and other learning supports to achieve professional, entrepreneurial or personal goals. Our core program delivers mentorship for marginalized young people (including LGBTQ+)."

  return (
    <div>
        <TextBox style={{'margin-top':'135px', 'margin-right':'20vw'}}>
            <CheetoLeft className={classes.cheetohLeftMirrored} style={{'margin-top':'-1.6em'}} alt="cheetohLeft" />
            <BoldedHeader headerText={headerText} style={{'font-size':'36px'}}/>
            <CheetoRight className={classes.cheetohRightMirrored} style={{'margin-top':'200px'}} alt="cheetohRight"/>
            <Content content={content} extra={<RainbowHeart/>} style={{'font-size':'18px', 'line-height':'1.8'}} hideCheetohs={["sm","xs","lg","md","xl"]}/>
        </TextBox>
        <SkylineHeaderSVG />
    </div>
  )
}
