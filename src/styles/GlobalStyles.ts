import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --neon-primary: #00ff9d;
    --neon-secondary: #00b8ff;
    --neon-accent: #ff00ff;
    --background-dark: #0a0a0a;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-dark);
    color: var(--text-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: var(--neon-primary);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: var(--neon-secondary);
      text-shadow: 0 0 8px var(--neon-secondary);
    }
  }

  .neon-text {
    color: var(--neon-primary);
    text-shadow: 0 0 5px var(--neon-primary),
                 0 0 10px var(--neon-primary),
                 0 0 20px var(--neon-primary);
  }

  .neon-border {
    border: 2px solid var(--neon-primary);
    box-shadow: 0 0 5px var(--neon-primary),
                inset 0 0 5px var(--neon-primary);
  }
`;

export default GlobalStyles; 