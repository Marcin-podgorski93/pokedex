// components/Layout.jsx
import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#dc0a2d] text-white">
      {/* Pokeball tło */}
      <img
        src="/pokeball-icon.png"
        alt=""
        className="absolute left-0 top-0 w-[172px] h-[173px] md:w-[400px] md:h-[400px] opacity-30 pointer-events-none select-none translate-x-[-50%] md:translate-x-[400px]"
        style={{ zIndex: 0 }}
      />
      <img
        src="/pokeball-icon.png"
        alt=""
        className="absolute left-0 top-0 w-[172px] h-[173px] md:w-[400px] md:h-[400px] opacity-30 pointer-events-none select-none translate-y-[-55%] translate-x-[250px] md:translate-x-[1300px]"
        style={{ zIndex: 0 }}
      />
      <img
        src="/pokeball-icon.png"
        alt=""
        className="absolute left-0 top-0 w-[172px] h-[173px] opacity-30 pointer-events-none select-none translate-x-[350px] md:translate-x-[1800px] translate-y-[500px] md:w-[400px] md:h-[400px]"
        style={{ zIndex: 0 }}
      />
      <Header />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default Layout;
