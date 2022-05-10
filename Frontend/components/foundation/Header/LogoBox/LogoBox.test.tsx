import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import LogoBox from "./LogoBox";
import theme from "../../../../styles/theme";

describe("LogoBox", () => {
  it("renders our logo and name", () => {
    render(
      <ThemeProvider theme={theme}>
        <LogoBox />
      </ThemeProvider>
    );

    const logo = screen.getByTitle("Ouryou");
    expect(logo).toBeInTheDocument();

    // This should get both the title text from the logo and the link text from the name link.
    const name = screen.getAllByText("Ouryou");
    expect(name).toHaveLength(2);
  });
});
