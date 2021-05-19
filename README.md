[Español](./README_ES.md) 🚀️

<p align="center">
<img align="center" height="18

<h1 align="center"> React Drop Zone</h1>
</p>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JinSSJ3/react-drop-zone-responsive/blob/HEAD/LICENSE) ![npm latest package](https://img.shields.io/badge/npm%40LTS-1.2.0-cyan) [![npm latest package](https://img.shields.io/badge/npm%40latest-1.2.x-magenta)](https://www.npmjs.com/package/@unlimited-react-components/react-drop-zone) [![dependencies](https://david-dm.org/unlimited-react-components/react-drop-zone.svg)](https://david-dm.org/unlimited-react-components/react-drop-zone) [![tests](https://api.travis-ci.org/unlimited-react-components/react-drop-zone.svg?branch=master)](https://travis-ci.org/github/unlimited-react-components/react-drop-zone) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mui-org/material-ui)](https://dependabot.com)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/unlimited-react-components/react-drop-zone.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/unlimited-react-components/react-drop-zone/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/unlimited-react-components/react-drop-zone.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/unlimited-react-components/react-drop-zone/context:javascript) [![Known Vulnerabilities](https://snyk.io/test/github/unlimited-react-components/react-drop-zone/badge.svg)](https://snyk.io/test/github/unlimited-react-components/react-drop-zone)

If you have any issue or suggestion, or wanna improve the repo let me know it on the github section: "[issues](https://github.com/unlimited-react-components/react-drop-zone/issues)", or make a pull request.

## Description

Highlight your JSX code with a react Highlight component.

eact-highlight<p align="center">
<img width="100%" src="https://user-images.githubusercontent.com/43678736/118760215-09618f00-b838-11eb-8aff-1c38c02c8bea.png

## Installation

React-drop-zone is available as an [npm package](https://www.npmjs.com/package/react-drop-zone-responsive).

```sh
// with npm
npm i @unlimited-react-components/react-drop-zone
```

## Main Features:

- Input File Button included by props.
- Free handling: You are free to handle the loaded files because this component returns an array of files (FILE objects) each of them has 2 properties (the own file and an array of errors according to the limits you set).
- Usable: It will fit the parent container. So make sure you give it an appropiate container to it.
- Customizable: you can change the theme color to combine correctly with the rest of the page.
- Localization: English and Spanish versions.

## Usage (basic example)

Here is a quick example to get you started, **it's all you need**:

Interactive and live demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-drop-zone-demo1-o7izp)

<details><summary> Basic Example Code (click the label or the arrow to collapse)</summary>

````jsx
import "./styles.css";

import { useState } from "react";
import { DropZone } from "@unlimited-react-components/react-drop-zone";

const App = (props) => {
 
  const handleFileSelect = (files) => {
    ...
  };
  return (
    <div className="App">
     ...

      <DropZone
        handleFileSelect={handleFileSelect}
        //localization={"es-ES"}
      />

      ...
    </div>
  );
};
export default App;

```
````

</details>

## Usage 2 (example with styles and validations)

Interactive and live demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-drop-zone-demo2-zuwr8?file=/src/App.js)

Here is an example to customize styles and behaviour:

<details><summary> Styling and validations Example (click the label or the arrow to collapse)</summary>

In this example we are telling the drop zone:

<details><summary> Validation</summary>

- to admit up to 4 files (if you select or drop more, it will take the first 4 files).
- to admit files size up to 50 mb.- to admit fies with extensions`"json", "exe", "pdf", "png"`
- to admit files wich mimetype is included in the list:`"application/json", "image/png"`

</details>

<details><summary> Styling </summary>

You can personalize the style of the component by giving a color theme and a nice background image got from internet.

- themeColor:`#5500ff`
- backgroundImage: `"https://miro.medium.com/max/670/1*wPqqYFfNreXF4INrNhYkeQ.jpeg"`

You can also change the text style ( in this example I am using fonts from [Google fonts](https://fonts.google.com/)).It is necessary to add the corresponding **link tag** on the `index.html` file.

</details>

<details><summary> Code</summary>

````html
<!DOCTYPE html>
<html lang="en">
  <head>
   ...
  <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Long+Cang&display=swap"
      rel="stylesheet"
    />
    ...
</head>

  <body>
      ...
  </body>
</html>
````

````jsx
// App.jsx
import "./styles.css";
import { DropZone } from "react-drop-zone-responsive";
import { useState } from "react";

const useLimits = {
  extensions: ["json", "pdf", "png"], //admited extensions
  mimeType: ["application/json", "application/pdf", "image/png"], //admited mymetypes
  maxSize: 50 // MB
};

const useDropZoneStyles = {
  themeColor: "#0000ff",
  backgroundImage:
    "https://miro.medium.com/max/670/1*wPqqYFfNreXF4INrNhYkeQ.jpeg",
  mainTextStyle: {
    fontFamily: "",
    color: "",
    fontSize: ""
  },
  bottonTextStyle: {
    fontFamily: "",
    color: "",
    fontSize: ""
  }
  //backgroundColor: "#013e62"
};

const numberOfFiles = 4;

const App = (props) => {
  ...
  return (
    <div className="App">
     ...
      <DropZone
        style={useDropZoneStyles}
        amountOfFiles={numberOfFiles}
        limits={useLimits}
        handleFileSelect={handleFileSelect}
        //localization={"es-ES"}
      />
     ...
    </div>
  );
};
export default App;
````

</details>

</details>

## Props (all are optional)


| Name               | Description                                                                                                                                                      | Default                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `style`            | Object that contains the main styles for the component.                                                                                                          | themeColor:#ff6c37, backgroundImage:"https://www.postman.com/assets/use-cases-by-role.svg" |
| `limits`           | Object that contains the criteria to validate files that we want to load and files we don't.                                                                     | `undefined`: allows any kind of file                                                       |
| `amountOfFiles`    | The max number of files that will be loaded.                                                                                                                     | 10                                                                                         |
| `handleFileSelect` | The handler function when files are droped or selected. This function receives the list of files after validation.                                               | `undefined`                                                                                |
| `localization`     | The text label translation in other languages. Supporting now only English`en-EN`  and Spanish `es-ES`.                                                          | `en-EN`: by default                                                                        |
| `inputButton`      | Boolean value that specify whether to include input file butoon or not.                                                                                          | `undefined`: by default                                                                    |
| `multiple`         | Boolean value that, if present or has thurty value, makes the inpput button to filter the files according to the`limits.extensions` and `limits.mimetype` props. | `undefined`: by default                                                                    |
| `cutomLabels`      | Object wich labels to show in the dropzone.                                                                                                                      | `undefined`: by default                                                                    |

### Details

<details>
<summary> Props.style</summary>

- **themeColor**?: Main color for borders and button theme color.
- **mainTextStyle**? and**bottonTextStyle**?: Styles for labels on the top and botton.
  - fontFamily?: string;
  - color?: string;
  - fontSize?: string | number;
- **backgroundImage**?: An url to an image on internet to fit the background of the drop zone.
- **backgroundColor**?: The background color, by default is white.

</details>
<details>
<summary> Props.limits</summary>

* **extensions**?: a string array of extensions
* **mimeType**?: a string array of mimetypes
* **maxSize**?: maximun size in megabytes per file.

</details>

</details>
<details>
<summary> Props.cunstomLabels</summary>

* **mainLabel**?: a string that is the main label to show on the top of the drop zone.
* **mainLabel_or**?: a string label between the main alabel and the input file button
* **buttonLabel**?: a string label to be shwon on the button.
* **bottonLabel**?: a string label to show on the botton before the list with allowed extentions.

👀️  Custom labels example: [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dropzone-customlabels-example-yiq6w)

</details>

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
