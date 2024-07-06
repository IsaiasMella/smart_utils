import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      // Best practices
      eqeqeq: ["error", "always"], // Requiere el uso de === y !== en lugar de == y !=
      "no-eval": "error", // Prohíbe el uso de eval()
      curly: ["error", "all"], // Requiere el uso de llaves para todas las estructuras de control

      // Variables
      "no-undef": "error", // Prohíbe el uso de variables no definidas
      "no-unused-vars": ["error", { args: "none" }], // Prohíbe las variables no usadas, excepto los argumentos de funciones

      // Estilo de código
      indent: ["error", 2], // Requiere una indentación de 2 espacios
      quotes: ["error", "single"], // Requiere el uso de comillas simples para strings
      semi: ["error", "always"], // Requiere el uso de punto y coma al final de las declaraciones

      // ES6+
      "no-var": "error", // Prohíbe el uso de var
      "prefer-const": "error", // Prefiere el uso de const sobre let cuando la variable no se reasigna
      "arrow-parens": ["error", "always"], // Requiere paréntesis alrededor de los parámetros de las funciones flecha
      curly: "off",
      "no-prototype-builtins": "off",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
