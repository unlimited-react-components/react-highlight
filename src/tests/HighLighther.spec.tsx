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
  expect(screen.getByText("creating")).toBeInTheDocument();
});

it("background-color must be equal to #0d1117; by default", () => {
  const { getByTestId } = render(<HighLigther code={code_test1} />);
  const HLcontainer = getByTestId("highlighter-container");

  expect(HLcontainer).toHaveStyle(`background-color : 0d1117`);
});

it("background-color must be equal to white in style object prop", () => {
  const { getByTestId } = render(
    <HighLigther code={code_test1} style={{ backgroundColor: "white" }} />,
  );
  const HLcontainer = getByTestId("highlighter-container");

  expect(HLcontainer).toHaveStyle(`background-color : white`);
});
