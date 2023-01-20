import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --color-white-primary: #fff;
    --color-white-secondary: #f7fafb
    --color-blue-primary:  #219ebc
    --color-black-primary: #000000
    --color-black-light: #383838
    --color-gray: #d3d3d3
}

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    }
`;
