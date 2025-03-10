import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:tailwindcss/recommended",
  ),
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      tailwindcss,
      prettier,
    },
    ignores: ["node_modules", ".next", "dist", "build", "public", ".turbo"],
    rules: {
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-require-imports": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          "newlines-between": "always",
        },
      ],
      "tailwindcss/enforces-shorthand": "warn",
      "prettier/prettier": "error",
    },
  },
];

export default eslintConfig;
