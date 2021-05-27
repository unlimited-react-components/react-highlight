import React from "react";
export interface HighLighterProps {
    /**
     * The JSX code to highlight
     */
    code: string;
    /**
     * at the moment only JSX and JS is supported
     */
    /**
     * style properties that affects only the container
     */
    style?: React.CSSProperties;
    /**
    * style properties that affects only the container
    */
    children?: string;
}
