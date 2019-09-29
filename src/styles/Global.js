import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @keyframes opacity-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: system-ui, sans-serif;
    opacity: 1;
    animation: opacity-in 0.2s ease-in;
    font-size: 16px;
  }

  .container-root {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: steelblue;

    &:hover {
      background: red;
      color: white;
      font-style: italic;
      font-weight: 800;
      text-decoration: none;
      padding: 4px 4px;
    }
  }
`
