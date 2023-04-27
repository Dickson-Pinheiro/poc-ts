import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ['node_modules', 'src', 'tests'],
  modulePaths: ["<rootDir>/src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["<rootDir>/tests/*.(test|spec).ts"],
};

export default config;