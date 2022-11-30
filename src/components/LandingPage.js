import {
  Banner,
  BannerBottom,
  BannerTop,
  IndexDiscount,
  IndexDiscountBottom,
  NewArrivals,
  Offers,
} from "./LandingPageContent";

const LandingPage = () => {
  return (
    <>
      <BannerTop />
      <Banner />
      <BannerBottom />
      <IndexDiscount />
      <IndexDiscountBottom />
      <NewArrivals />
      <Offers />
    </>
  );
};

export default LandingPage;
