module.exports = {
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|ts)x?$": "babel-jest",
  },
  testMatch: ["**/*.test.(js|jsx|ts|tsx)"],
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  },
  clearMocks: true,
};
