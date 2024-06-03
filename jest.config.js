const esModules = [
  "bail",
  "ccount",
  "comma-separated-tokens",
  "data-uri-to-buffer",
  "decode-named-character-reference",
  "devlop",
  "escape-string-regexp",
  "estree-util-is-identifier-name",
  "fetch-blob",
  "formdata-polyfill",
  "hast-util-from-parse5",
  "hast-util-parse-selector",
  "hast-util-raw",
  "hast-util-to-jsx-runtime",
  "hast-util-to-parse5",
  "hast-util-whitespace",
  "hastscript",
  "html-url-attributes",
  "html-void-elements",
  "is-plain-obj",
  "longest-streak",
  "markdown-table",
  "mdast-util-definitions",
  "mdast-util-find-and-replace",
  "mdast-util-from-markdown",
  "mdast-util-gfm",
  "mdast-util-phrasing",
  "mdast-util-to-hast",
  "mdast-util-to-markdown",
  "mdast-util-to-string",
  "micromark",
  "node-fetch",
  "property-information",
  "react-markdown",
  "react-syntax-highlighter",
  "rehype-raw",
  "remark-gfm",
  "remark-parse",
  "remark-rehype",
  "space-separated-tokens",
  "thememirror",
  "trim-lines",
  "trough",
  "unified",
  "unist-util-generated",
  "unist-util-is",
  "unist-util-position",
  "unist-util-stringify-position",
  "unist-util-visit",
  "uri-transformer",
  "vfile",
  "vfile-message",
  "web-namespaces",
  "zwitch",
].join("|");

module.exports = {
  modulePaths: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "mjs", "jsx", "tsx"],
  testEnvironment: "./jsdom-env.js",
  testTimeout: 10000,
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  globals: {
    fetch: global.fetch,
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  testMatch: ["**/__tests__/**/*.test.js"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$":
      "<rootDir>/src/__tests__/__setup__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/src/__tests__/__setup__/fileMock.js",
  },
  coveragePathIgnorePatterns: ["<rootDir>/src/__tests__/__setup__/"],
  testPathIgnorePatterns: ["<rootDir>/src/__tests__/__setup__/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
};
