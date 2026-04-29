const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black" role="banner">
      <div className="px-6 py-3 md:py-4">
        <a href="/" className="inline-block">
          <h1 className="text-white tracking-[0.3em] uppercase font-bold text-sm md:text-base">
            Dulce Hana
          </h1>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
