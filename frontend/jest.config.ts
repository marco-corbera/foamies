import nextJest from "next/jest.js";

import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  reporters: ["default", "jest-junit"],
  preset: "ts-jest",
  coverageProvider: "babel",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx,js,jsx}",
    "!<rootDir>/src/**/types.ts",
    // '!<rootDir>/src/middleware.ts',
    // '!<rootDir>/src/app/**/*.{ts,tsx,js,jsx}',
    // '!<rootDir>/src/types/**/*.{ts,tsx,js,jsx}',
    // '!<rootDir>/src/constants/**/*.{ts,tsx,js,jsx}',
    "!<rootDir>/src/components/**/*.ts",
    // '!<rootDir>/src/components/index.ts',
    // '!<rootDir>/src/components/atoms/icon/iconsImport.tsx',
    // '!<rootDir>/src/components/atoms/index.ts',
    // '!<rootDir>/src/components/layout/index.ts',
    // '!<rootDir>/src/components/molecules/index.ts',
    // '!<rootDir>/src/context/global/index.ts',
    // '!<rootDir>/src/context/global/index.ts',
    // '!<rootDir>/src/context/global/context.tsx',
    // '!<rootDir>/src/modules/**/*.{ts,tsx,js,jsx}',
    // '!<rootDir>/src/services/**/*.{ts,tsx,js,jsx}'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(config)();

  return {
    ...nextJestConfig,
    moduleNameMapper: {
      "\\.svg": "<rootDir>/__mocks__/svg.js",
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default jestConfig;
