import React, {FormEvent, useRef} from "react";

import Close from "@/components/svg/Close";

export default function SearchBar({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (search: string, e: FormEvent<HTMLFormElement>) => void;
}) {
  const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);

  function toggleSearchBar() {
    setIsSearchBarOpen((isOpen) => !isOpen);
  }
  React.useEffect(() => {
    setSearch("");
    if (isSearchBarOpen) inputRef?.current?.focus();
  }, [isSearchBarOpen]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(search, e);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div onClick={toggleSearchBar}> {children}</div>
      <div className={`search-bar ${isSearchBarOpen ? "search-bar--open" : ""}`}>
        <form className="form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className="form__input"
            placeholder="Search blog"
            type="search"
            value={search}
            onChange={handleSearch}
          />
        </form>

        <button aria-label="toggle search bar" className="bottom" onClick={toggleSearchBar}>
          <Close />
        </button>
        <style jsx={true}>{`
          .search-bar {
            position: absolute;
            top: 0;
            left: 0;
            background: #fff;

            z-index: 1000;
            align-items: center;
            height: 57px;
            width: 100%;
            opacity: 0;
            display: none;
            transition: opacity 0.5s ease;
          }
          .search-bar--open {
            opacity: 1;
            display: flex;
          }
          .form {
            height: 100%;
            width: 100%;
            margin-left: var(--padding);
          }
          .form__input {
            border: none;
            height: 100%;
            width: 100%;
            padding: 1rem;
            border-bottom: 2px solid transparent;
            background: transparent;
          }
          .form__input:focus {
            outline: none;
            border-bottom: 2px solid var(--primary-main);
          }

          .bottom {
            border: transparent;
            background: transparent;
            border: transparent;
            background: transparent;
            height: 100%;
            width: 58px;
          }
          @media (min-width: 1024px) {
            .form {
              margin: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}
