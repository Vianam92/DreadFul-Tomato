import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent , screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer/>", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Footer>
        <div className="testDiv">testDivContain</div>
      </Footer>
    );
  });
  test("render its children", () => {
    expect(component.container.querySelector(".testDiv"));
  });
  
  test("Should have foo and bar", () => {
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(component.container.querySelector('.footer')).toBeInTheDocument();
  });
});
