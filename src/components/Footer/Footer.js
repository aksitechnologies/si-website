import React from "react"
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa"
import {
  FooterContainer,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
} from "./FooterElement"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">AKSI Technologies</SocialLogo>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/aksitechnologies/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
