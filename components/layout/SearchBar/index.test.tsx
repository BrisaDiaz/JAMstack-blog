import React from "react";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Component from "./index";
const onSubmit = jest.fn();
it("it toggles search bar and auto focus input when children is click and triggers submit callback when submit", () => {
  render(
    <Component onSubmit={onSubmit}>
      <button>toggle search bar</button>
    </Component>,
  );

  const button = screen.getByRole("button", { name: "toggle search bar" });
  userEvent.click(button);
  const searchInput = screen.getByPlaceholderText("search blog", {
    exact: false,
  }) as HTMLInputElement;
  expect(document.activeElement).toEqual(searchInput);

  userEvent.type(searchInput, "trends");

  expect(onSubmit.mock.calls.length).toBe(0);
  fireEvent.submit(searchInput);

  expect(onSubmit.mock.calls.length).toBe(1);
  expect(searchInput.value).toBe("trends");
});
