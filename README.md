[Español](./README_ES.md) 🚀️

<p align="center">
<img align="center" height="150" src="https://user-images.githubusercontent.com/43678736/118854376-49f1f480-b89a-11eb-91f6-a0f59c30c6c4.png" alt="Unlimited React components logologo">

<h1 align="center"> React Highlight</h1>
</p>

![npm latest package](https://img.shields.io/badge/npm%40LTS-1.2.0-cyan)

If you have any issue or suggestion, or wanna improve the repo adding other languages highlights, let me know it on the github section: "[issues](https://github.com/unlimited-react-components/react-drop-zone/issues)", or make a pull request.

## Description

Highlight your JSX code with a react Highlight component.

Sample result:

<img align="center" width="70%" src="https://user-images.githubusercontent.com/43678736/118860426-fdf67e00-b8a0-11eb-8601-395cde889cbc.png" alt="Unlimited React components logologo">

## Installation

React-drop-zone is available as an [npm package](https://www.npmjs.com/package/react-highlight).

```sh
// with npm
npm i @unlimited-react-components/react-highlight
```
## Usage

Here is a quick example to get you started, **it's all you need**:

Interactive and live demo:

````jsx
import "./styles.css";
import { Highligther } from "@unlimited-react-components/react-highlight";

const App = (props) => {
const makeCode = () => {
  return `
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
}
  return (
    <Highligther 
        code={makeCode()}>
    </Highligther>
  );
};
export default App;
````

## Props

| Name       | Description                                        | Default                          |
| ------------ | ---------------------------------------------------- | ---------------------------------- |
| `code`     | The JSX code to be highlighted.                    | ""                               |
| `language` | The programming language                           | `JSX`: the only language supported for now |
| `style`    | The in-line CSS object. Only affects the container | { }                              |

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

