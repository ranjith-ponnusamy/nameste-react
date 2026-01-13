import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header className="header-container">
      {/* Left: Logo */}
      <div className="header-left">
        <img 
          src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Company Logo" 
          className="logo" 
        />
      </div>

      {/* Middle: Search Bar */}
      <div className="header-middle">
        <input 
          type="text" 
          placeholder="Search items..." 
          className="search-input" 
        />
        <button className="search-button">🔍</button>
      </div>

      {/* Right: User Icon */}
      <div className="header-right">
        <div className="user-icon">
          👤
        </div>
      </div>
    </header>
  );
};

export default Header;


// const header = (
//   <div className="container" >
//     <h1 id="title" className="header">header1</h1>
//     <h2 id="title" className="header">header2</h2>
//     <h3 id="title" className="header">header3</h3>
//   </div>
// );

// const Header = () => (
//   <div className="Header">
//     <img src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_hybrid&w=740&q=80" alt="Logo" />
//     <form action="/search_results.html" method="get" role="search">
//       <input type="search" id="site-search" name="q" placeholder="Enter search terms..." />
//     </form>
//     <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="User Icon" />
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(Header());
// root.render(<Header />);