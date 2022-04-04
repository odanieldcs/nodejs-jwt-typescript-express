export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
    "@tests/(.*)$": "<rootDir>/tests/$1",
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**/*.(test|spec).ts"],
};
