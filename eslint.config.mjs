import styleGuide from "eslint-config-standard";


export default [
  {
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "error",
        "semi": "error"
    }
},
  ...[].concat(styleGuide),
];