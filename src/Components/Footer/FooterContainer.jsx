import React from "react";


import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function FooterContainer() {
  return (
    <Footer className="foot bg-blue-700 mt-48" container>
      <FooterCopyright href="#" by="BMW™" />
      <FooterLinkGroup className="foo">
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Buy  </FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}

export default FooterContainer;