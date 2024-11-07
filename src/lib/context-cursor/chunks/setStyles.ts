const styles = `
:root {
  --main-cursor-clr: rgb(255, 255, 255, 0.1);
  --main-cursor-hover-clr: rgb(255, 255, 255, 0.05);
  --ghost-shadow: 0 2px 15px rgba(255, 255, 255, 0.05);
}

body {
  margin: 0;
  padding: 0; }

.c-cursor {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  border-radius: 200px;
  background-color: var(--main-cursor-clr);
  transition: background-color 0.2s ease-in-out;
}

.c-cursor_active {
  background-color: var(--main-cursor-hover-clr);
}

.c-cursor-lift_active {
  background-color: rgba(0,0,0,0);
}
`;

const setStyles = () => {
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
};

export default setStyles;
