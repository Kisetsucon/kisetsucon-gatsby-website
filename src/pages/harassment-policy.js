import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))

const HarassmentPolicy = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title='Harassment Policy' />
      <div className={classes.root}>
        <Typography>
          Harassment of any kind will not be tolerated at Kisetsucon. This policy applies to all attendees, 
          guests, volunteers, security, and staff.
        </Typography>

        <Typography variant='h4'>HARASSMENT</Typography>
        <Typography>
          Harassment is generally defined as unwanted behavior that creates an intimidating, offensive, 
          and/or hostile environment for the person being targeted. It can be physical or psychological. 
          If someone tells you that your comments or behavior are unwelcome, you need to stop immediately. 
          If that person tells you to leave them alone, you need to cease contact. 
          It doesn’t matter if you don’t think your behavior was harassing; harassment is defined by the victim.
        </Typography>

        <Typography>Examples of harassment include, but are not limited to:</Typography>

        <ul>
          <li>Making comments about a person’s appearance, sexual and/or vulgar statements, offensive jokes, or anything disparaging a person’s gender, race, religion, sexuality, identity, et cetera.</li>
          <li>Bulling and discrimination.</li>
          <li>Whistling, catcalling, and any kind of non-consensual flirting or sexual advances.</li>
          <li>Following someone or impeding their path.</li>
          <li>Attending a person’s panels solely to heckle them.</li>
          <li>Photographing or recording someone without their permission.</li>
          <li>Exposing oneself or miming sexual acts.</li>
          <li>Bathroom policing (harassing someone because of the bathroom they feel most comfortable using).</li>
          <li>Touching someone without their permission.</li>
          <li>Repeated texting, phone calls, or emails, after being told to stop.</li>
          <li>Any persistent action that creates a hostile environment for the person or persons being targeted – harassment is when a person is feeling harassed, period.</li>
        </ul>

        <Typography>
          If a person is in cosplay, that does not give you consent to photograph or touch them without their permission. 
          Remember that underneath the costume and make-up is a real person; they are not the character they are portraying 
          and you do not have the right to treat them as you would the fictional character.
        </Typography>

        <Typography>
          Excessively loud noises/music and disruptive behavior is prohibited unless noted otherwise. 
          Please refrain from screaming, blasting music, or using noisemakers such as vuvuzelas and 
          air horns, especially in hallways.
        </Typography>

        <Typography variant='h4'>EXPLICIT CONTENT</Typography>
        <Typography>
        Costumes must cover any area usually hidden by a bathing suit (genitalia, buttocks, nipples unless otherwise specified). Flashing/mooning other people is considered harassment and will not be tolerated. Please be aware that businesses and other venues in the area may have stricter dress codes (e.g. shirts required before entry).

        Any clothing, signs, props, or other materials containing explicit content must NOT be visible inside our convention space. Explicit content is prohibited from sale in the Artist/Vendor area. Anyone caught selling explicit content will be warned and potentially ejected from the event.

        Ahegao shirts are prohibited.
        </Typography>

        <Typography variant='h4'>REPORTING</Typography>
        Please report any incidents of harassment as soon as possible. We take all reports very seriously, regardless of who is involved. You can report harassment even if you are not the directly involved, and no retaliation for filing a report will be tolerated.

        Harassment by any individual (attendees, guests, volunteers, security, or staff) should be reported to the Convention Head (Joe). If you are not comfortable reporting to the Convention Head, you can report to our Harassment Contact at [to be determined].

        <Typography variant='h4'>CONSEQUENCES</Typography>
        Any violations of our harassment policy will result in immediate penalties dependent upon the severity of the action. Such penalties include:

        Verbal warnings. (You will only be warned once.)
        Confiscation of your badge and ejection from the event, with no refunds.
        Banning from any and all future events put on by Kisetsucon, Inc.
        Contacting law enforcement when appropriate.
      </div>
    </Layout>
  )
}

export default HarassmentPolicy
