interface props {
  hamburgerRef: React.RefObject<HTMLButtonElement | null>;
  navRef: React.RefObject<HTMLInputElement | null>;
}
const HamburgerButton: React.FC<props> = ({ hamburgerRef, navRef }) => {
  function handleClick() {
    hamburgerRef.current?.classList.toggle("hamburger-active");
    navRef.current?.classList.toggle("hidden");
  }

  return (
    <button
      ref={hamburgerRef}
      name="hamburger"
      type="button"
      className="block absolute right-6 md:right-12 lg:hidden"
      onClick={handleClick}>
      <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
      <span className="hamburger-line transition duration-300 ease-in-out"></span>
      <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
    </button>
  );
};

export default HamburgerButton;
