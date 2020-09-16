const defaultStyles = `
font-family: Lato;
font-style: normal;
font-weight: normal;
color: #000000;
line-height: 135%;`;

const typography = {
  globalStyles: defaultStyles,
  header: {
    XXL: `
        ${defaultStyles}
        font-size: 37px;`,
    XL: `
        ${defaultStyles}
        font-size: 33px;`,
    L: `
        ${defaultStyles}
        font-size: 29px;`,
    M: `
        ${defaultStyles}
        font-size: 25px;`,
    S: `
        ${defaultStyles};
        font-size: 21px;`,
    bold: {
      XXL: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 37px;`,
      XL: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 33px;`,
      L: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 29px;`,
      M: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 25px;`,
      S: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 21px;`,
    },
  },
  body: {
    L: `
        ${defaultStyles}
        font-size: 17px;`,
    M: `
        ${defaultStyles}
        font-size: 15px;`,
    S: `
        ${defaultStyles}
        font-size: 13px;`,
    bold: {
      L: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 17px;`,
      M: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 15px;`,
      S: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 13px;`,
    },
  },
};

export default typography;
