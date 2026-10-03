"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

const navigation = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function subscribeToTheme(callback: () => void) {
  window.addEventListener("themechange", callback);
  return () => window.removeEventListener("themechange", callback);
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

function getServerThemeSnapshot() {
  return false;
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const nextTheme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      nextTheme === "dark" ? "#11120f" : "#f2eee6",
    );
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      aria-pressed={dark}
      title={`Switch to ${dark ? "light" : "dark"} theme`}
      onClick={toggleTheme}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">
          {dark ? (
            <svg viewBox="0 0 16 16">
              <path d="M13.2 10.1A5.4 5.4 0 0 1 5.9 2.8a5.5 5.5 0 1 0 7.3 7.3Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="3" />
              <path d="M8 1.5v1.3m0 10.4v1.3m6.5-6.5h-1.3M2.8 8H1.5m11.1-4.6-.9.9M4.3 11.7l-.9.9m9.2 0-.9-.9M4.3 4.3l-.9-.9" />
            </svg>
          )}
        </span>
      </span>
      <span className="theme-toggle__label">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeMenuOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeMenuOnEscape);
    return () => window.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="page-container site-header__inner">
        <a className="wordmark" href="#top" aria-label="Response Iranzi, home">
          <Image
            className="wordmark__mark"
            src="/images/response-closeup.webp"
            alt=""
            width={40}
            height={40}
            sizes="40px"
          />
          <span>Response Iranzi</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="site-header__tools">
          <ThemeToggle />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`menu-toggle__icon${menuOpen ? " is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
