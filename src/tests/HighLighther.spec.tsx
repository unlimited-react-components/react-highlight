import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import HighLigther from "../Components/Highligther";
//import {HighLight} from "src/"
const code_test1 = `
//creating themes
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
  };
    /*    this is a 
  comment */
  .
  .
  .
  function ThemedButton() {
    const theme = useContext(ThemeContext);  
    return (    
        <button style={{ 
            background: theme.background, 
            color: theme.foreground 
          }}>      
            I am styled by theme context!    
        </button>
    );
  }
`;

it('displays a "ThemedButton" message', () => {
  render(<HighLigther code={code_test1} />);
  expect(screen.getByText("ThemedButton")).toBeInTheDocument();
  expect(screen.getByText("comment")).toBeInTheDocument();
  expect(screen.getByText("function")).toBeInTheDocument();
  expect(screen.getAllByText("themes").length).toEqual(2);
  expect(screen.getAllByText("background").length).toEqual(3);
 //expect(screen.getByText("background")).toBeInTheDocument();
//expect(screen.getByText("}")).toBeInTheDocument();
});



it("background-color must be equal to rgb(40, 44, 52) none repeat scroll 0% 0%; by default", () => {
  const { getByTestId } = render(<HighLigther code={code_test1} />);
  const HLcontainer = getByTestId("highlighter-container");

  expect(HLcontainer).toHaveStyle(
    `background-color : rgb(40, 44, 52) none repeat scroll 0% 0%`,
  );
});
