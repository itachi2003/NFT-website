import { createGlobalStyle } from "styled-components";
import "@fontsource/creepster"
import "@fontsource/coiny"
import "@fontsource/sail"
import "@fontsource/sora"





const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: 'sora',sans-serif;
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    color: inherit; 
}
// .img-hid{
//     position:absolute;
//     width:6rem;
//     height:6rem;
//     bottom:2rem;
//     right:90%;
//     border-radius:50%;
// }

`

export default GlobalStyles;