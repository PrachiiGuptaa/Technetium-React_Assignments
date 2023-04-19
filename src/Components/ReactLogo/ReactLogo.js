import React from "react";
import logo from '../logo.svg';
import './ReactLogo.css'

export default function ReactLogo() {
  return (
    <div className="Logo">
      <header className="ReactLogo-header">
        <img src={logo} className="ReactLogo-logo" alt="logo" />
      </header>
    </div>
  );
}
