import React, { Component } from "react";
import { HighLighterProps } from "./HighLighterProps";
import "./Highligther.scss";
import { Line, Token, superHighlighter } from "./utils.highlight";
const tokens = [
  "keyword",
  "className",
  "punctuation",
  "function",
  "parameter",
  "operator",
  "number",
  "attributeName",
  "default",
];
const punctuation = [
  ".",
  ",",
  ";",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  ":",
  "<",
  ">",
  "!=",
  "<=",
  ">=",
  "===",
  "!==",
  ">=",
];
const keywords = [
  "import",
  "from",
  "class",
  "extends",
  "return",
  "this",
  "super",
  "function",
  "null",
  "var",
  "let",
  "const",
  "if",
  "else",
  "switch",
  "default",
  "export",
  "typeof",
];
/* const isKeyword = (word) => {
  return keywords.includes(word);
};
const isPunctuation = (word) => {
  return punctuation.includes(word);
};
function isOther(word, before, after) {
  if (after === "(") {
    return "function";
  }
  if (before === "class" || /[A-Z]/.test(word[0])) {
    return "className";
  } else if (before === "<") {
    if (/[A-Z]/.test(word[0])) {
      return "className";
    } else {
      return "tag";
    }
  }
}
function isNumber(word) {
  if (Number.isInteger(word)) {
    return true;
  } else {
    //check decimal
    if (word.includes(".")) {
      const words = word.split(".");
      if (words.length > 2) {
        return false;
      } else {
        return Number.isInteger(words[0]) && Number.isInteger(words[1]);
      }
    } else {
      return false;
    }
  }
}
function isString(word) {
  const charIni = word.charAt(0);
  return charIni === '"' || charIni === "`" || charIni === "'";
}
function isTagReactNode(word) {
  const charIni = word.charAt(0);
  const charIni2 = word.charAt(1);
  return charIni === "<" && /[A-Z]/.test(charIni2);
}
function isTag(word) {
  const charIni = word.charAt(0);
  const charIni2 = word.charAt(1);
  return charIni === "<" && /[a-z]/.test(charIni2);
}
function isTagClose(word) {
  const charIni = word.charAt(0);
  const charIni2 = word.charAt(1);
  if (charIni === "<" && charIni2 === "/") {
    if (word.charAt(3).toLowerCase() === word.charAt(3)) {
      return "tag";
    } else if (word.charAt(3).toUpperCase() === word.charAt(3)) {
      return "className";
    } else {
      return true;
    }
  } else {
    return false;
  }
}
function getClassName(word, before, after) {
  if (word.includes("//")) {
    return "comment";
  }
  if (typeof isTagClose(word) === "string") {
    return isTagClose(word);
  } else if (isTagClose(word)) {
    return "punctuation";
  }
  if (isString(word)) {
    return "string";
  }
  if (isTagReactNode(word)) {
    return "node";
  }
  if (isTag(word)) {
    return "taghtml";
  }
  if (isKeyword(word)) {
    return "keyword";
  } else if (isPunctuation(word)) {
    return "punctuation";
  } else if (isNumber(word)) {
    return "number";
  } else {
    return isOther(word, before, after);
  }
} */

const Highligther = (props: HighLighterProps) => {
  const { code, language } = props;
  /* const tokenize2 = (code) => {
    const lines = code.split("\n");
    let spanTokens = [];
    for (let i = 0; i < lines.length; i++) {
      spanTokens.push(<div className={"token "}>{tokenize(lines[i])}</div>);
    }

    return <code>{spanTokens.map((element) => element)}</code>;
  };
  const tokenize = (code) => {
    // por whitespaces
    console.log("==>", code);

    let pretokens = [];
    //  let prepretokens = [];

    pretokens = code.split(" ");
    
    pretokens.forEach((element) => {
      prepretokens = [...prepretokens, ...element.split(" ")];
    });
    console.log("==>", prepretokens);
    const spanTokens = [];
    let before = "";
    for (let i = 0; i < pretokens.length; i++) {
      let pretoken = pretokens[i];
      const tokenkind = getClassName(pretoken, before, pretokens[i + 1]);
      console.log("======>", tokenkind);
      if (tokenkind === "node") {
        spanTokens.push(
          <span className={"token " + "punctuation"}>{` ${pretoken.charAt(
            0
          )}`}</span>
        );

        spanTokens.push(
          <span className={"token " + "className"}>{`${
            pretoken.split("<")[1]
          }`}</span>
        );
      } else if (tokenkind === "taghtml" || tokenkind === "closetag") {
        spanTokens.push(
          <span className={"token " + "punctuation"}>{` ${pretoken.charAt(
            0
          )}`}</span>
        );

        spanTokens.push(
          <span className={"token " + "tag"}>{`${
            pretoken.split("<")[1]
          }`}</span>
        );
      } else {
        //Line
        spanTokens.push(
          <span className={"token " + tokenkind}>{` ${pretoken}`}</span>
        );
      }
      before = tokenkind;
    }
    return <span>{spanTokens.map((element) => element)}</span>;
  }; */
  const tokenize2 = (code: string): React.ReactNode => {
    let listOfLines: Line[] = superHighlighter(code);

    let listOfCode: React.ReactNode[] = [];
    for (let i = 0; i < listOfLines.length; i++) {
      let tokenList: Token[] = listOfLines[i];
      let lineSpan: React.ReactNode = tokenizeSpan(tokenList);
      listOfCode.push(lineSpan);
    }

    return <code> {listOfCode.map((codeLine)=>(codeLine))}</code>;
  };
  const tokenizeSpan = (tokenList: Token[]): React.ReactNode => {
    let result: React.ReactNode;
    //for each line I create a div
    //for each token create a span
    let listOfSpans: React.ReactNode[] = [];

    for (let j = 0; j < tokenList.length; j++) {
      let spanClassName = "token";
      let token: Token = tokenList[j];
      if (token.category !== "") {
        spanClassName += ` ${token.category}`;
      }
      listOfSpans.push(<span className={spanClassName}>{token.token}</span>);
    }

    result = <div>{listOfSpans.map((spanToken) => spanToken)}</div>;
    return result;
  };
  return (
    <div className="highlighter-container">
      <div>{tokenize2(props.code || "")}</div>
    </div>
  );
};

export default Highligther;
