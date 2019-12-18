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

const PrivacyPolicy = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title='Privacy Policy' />
      <div className={classes.root}>
        <Typography variant='h3'>Privacy Policy for Kisetsucon, Inc.</Typography>
        At Kisetsucon, accessible from https://www.kisetsucon.org/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Kisetsucon and how we use it.

        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at info@kisetsucon.org

        <Typography variant='h4'>General Data Protection Regulation (GDPR)</Typography>
        We are a Data Controller of your information. If you’d like to learn more about GDPR and your rights under GDPR, please read the GDPR guide.

        Kisetsucon, Inc. legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:

        Kisetsucon, Inc. needs to perform a contract with you
        You have given Kisetsucon, Inc. permission to do so
        Processing your personal information is in Kisetsucon, Inc. legitimate interests
        Kisetsucon, Inc. needs to comply with the law
        Kisetsucon, Inc. will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.

        If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.

        In certain circumstances, you have the following data protection rights:

        The right to access, update or to delete the information we have on you.
        The right of rectification.
        The right to object.
        The right of restriction.
        The right to data portability
        The right to withdraw consent
        
        <Typography variant='h4'>Log Files</Typography>
        Kisetsucon follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.

        <Typography variant='h4'>Privacy Policies</Typography>
        You may consult this list to find the Privacy Policy for each of the advertising partners of Kisetsucon.

        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Kisetsucon, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

        Note that Kisetsucon has no access to or control over these cookies that are used by third-party advertisers.

        <Typography variant='h4'>Third Pary Privacy Policies</Typography>
        Kisetsucon’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.

        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites. What Are Cookies?

        <Typography variant='h4'>Children’s Information</Typography>
        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

        Kisetsucon does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.

        <Typography variant='h4'>Online Privacy Policy Only</Typography>
        Our Privacy Policy created at GDPRPrivacyPolicy.net) applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Kisetsucon. This policy is not applicable to any information collected offline or via channels other than this website. Our GDPR Privacy Policy was generated from the GDPR Privacy Policy Generator.

        <Typography variant='h4'>Consent</Typography>
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
