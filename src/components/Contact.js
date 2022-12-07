import React from "react";
import { ContactBanner, ContactDetails, ContactMoreInfo } from "./ContactPageContent"
import { Coupon } from "./MenWearsContent";

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactDetails />
      <ContactMoreInfo />
      <Coupon />
    </>
  );
};

export default Contact;
