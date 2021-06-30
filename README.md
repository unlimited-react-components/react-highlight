<p align="center">
<img align="center" height="150" src="https://user-images.githubusercontent.com/43678736/118854376-49f1f480-b89a-11eb-91f6-a0f59c30c6c4.png" alt="Unlimited React components logologo">

<h1 align="center">  React Highlight ✨🖍️</h1>


![npm latest package](https://img.shields.io/badge/npm%40last-1.3.1-cyan)
[![install size](https://packagephobia.com/badge?p=@unlimited-react-components/react-highlight)](https://packagephobia.com/result?p=@unlimited-react-components/react-highlight)
[![dependencies Status](https://status.david-dm.org/gh/unlimited-react-components/react-highlight.svg)](https://david-dm.org/unlimited-react-components/react-highlight)
[![Coverage Status](https://coveralls.io/repos/github/unlimited-react-components/react-highlight/badge.svg?branch=master)](https://coveralls.io/github/unlimited-react-components/react-highlight?branch=master)
[![Build Status](https://travis-ci.org/unlimited-react-components/react-highlight.svg?branch=master)](https://travis-ci.org/unlimited-react-components/react-highlight)
[![Known Vulnerabilities](https://snyk.io/test/github/unlimited-react-components/react-highlight/badge.svg)](https://snyk.io/test/github/unlimited-react-components/react-highlight)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/unlimited-react-components/react-highlight.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/unlimited-react-components/react-highlight/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/unlimited-react-components/react-highlight.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/unlimited-react-components/react-highlight/context:javascript)
</p>

If you have any issue or suggestion, or wanna improve the repo adding other languages highlights, let me know it on the github section: "[issues](https://github.com/unlimited-react-components/react-highlight/issues)", or make a pull request.

## Description

Highlight your JSX code with a react Highlight component.

Sample result:

<p align="center">
<img align="center" width="65%" src="https://user-images.githubusercontent.com/43678736/119084603-b74f7380-b9c7-11eb-8ea3-752cf72098e5.png" alt="Sample result image">
</p>

## Installation

react-highlight is available as an [npm package](https://www.npmjs.com/package/@unlimited-react-components/react-highlight).

```sh
// with npm
npm i @unlimited-react-components/react-highlight
```

## Usage

Here is a quick example to get you started, **it's all you need**:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-highlight-demo-7o9pq)

````jsx
import "./styles.css";
import { Highligther } from "@unlimited-react-components/react-highlight";

const App = (props) => {
  return (
      <Highlighter>
        {makeCode} 
      </Highlighter>

  );
};
export default App;
const makeCode = `
    // this is a sample code
    const themes = {
      light: { ... },
      dark:  { ... }
    };
    const ThemeContext = React.createContext(themes.light);
    function App() {
      return (
        <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>
      );
    }
    function Toolbar(props) { ... }
    
    const ThemedButton =() => { ... }
`;


````

## Props


| Name       | Description                                        | Default                                    |
| ------------ | ---------------------------------------------------- | -------------------------------------------- |
| `code`     | The JSX code to be highlighted.                    | ""                                         |
| `style`    | The in-line CSS object. Only affects the container | { }                                        |
| `children`    | The JSX code to be highlighted in string format. | ""                                         |
## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
