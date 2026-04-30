import footerBanner from "@/assets/footer-banner-dulcehana.webp";

const SimpleFooter = () => {
  return (
    <footer className="bg-background" role="contentinfo">
      <img
        src={footerBanner}
        alt=""
        aria-hidden="true"
        className="w-full h-auto block select-none"
      />
    </footer>
  );
};

export default SimpleFooter;
