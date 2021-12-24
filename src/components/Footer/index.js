import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { 
    FooterContainer,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink
 } from './FooterElements'

const Footer = () => {


    return (
        <FooterContainer>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href='https://github.com/ShreyasPatel031' target="_blank" aria_label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/contact-shreyas-patel/' target="_blank" aria_label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/shreyas____patel/' target="_blank" aria_label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
        </FooterContainer>
    )
}

export default Footer
