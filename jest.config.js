module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: ["**/__tests__/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};
