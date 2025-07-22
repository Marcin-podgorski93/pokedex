function Header() {
  return (
    <header className="relative text-white text-center p-4 mt-3">
      <img
        src="logo.png"
        alt="Pokedex"
        style={{
          width: "223px",
          height: "63px",
          flexShrink: 0,
          margin: "0 auto",
          zIndex: 1,
        }}
      />
    </header>
  );
}

export default Header;
