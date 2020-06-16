module.exports = {
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules/"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.test.(js|jsx|ts|tsx)"],
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy",
    "\\.module.(scss|css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  },
  clearMocks: true,
};
