module.exports = {
  verbose: true,
  runner: "jest-runner-tsc",
  roots: ["<rootDir>/test/"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  testMatch: ["<rootDir>/test/**/*.ts"]
};
