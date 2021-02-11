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
        font-size: 37px;
        letter-spacing: -.02em;`,
    XL: `
        ${defaultStyles}
        font-size: 33px;
        letter-spacing: -.01em;`,
    L: `
        ${defaultStyles}
        font-size: 29px;
        letter-spacing: 0;`,
    M: `
        ${defaultStyles}
        font-size: 25px;
        letter-spacing: .01em;`,
    S: `
        ${defaultStyles};
        font-size: 21px;
        letter-spacing: .01em;`,
    bold: {
      XXL: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 37px;
          letter-spacing: -.02em;`,
      XL: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 33px;
          letter-spacing: -.01em;`,
      L: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 29px;
          letter-spacing: 0;`,
      M: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 25px;
          letter-spacing: .01em;`,
      S: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 21px;
          letter-spacing: .01em;`,
    },
  },
  body: {
    L: `
        ${defaultStyles}
        font-size: 17px;
        letter-spacing: 0;`,
    M: `
        ${defaultStyles}
        font-size: 15px;
        letter-spacing: .01em;`,
    S: `
        ${defaultStyles}
        font-size: 13px;
        letter-spacing: .02em;`,
    XS: `
        ${defaultStyles};
        font-size: 11px;
        letter-spacing: .03em;
    `,
    bold: {
      L: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 17px;
          letter-spacing: 0;`,
      M: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 15px;
          letter-spacing: .01em;`,
      S: `
          ${defaultStyles}
          font-weight: bold;
          font-size: 13px;
          letter-spacing: .02em;`,
      XS: `
          ${defaultStyles};
          font-size: 11px;
          font-weight: bold;
          letter-spacing: .03em;
        `,
    },
  },
};

export default typography;
