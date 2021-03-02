module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "indent": ["error","tab"],
        "node/no-unpublished-require": 0
    },
    "ignorePatterns": ["logs","*.html", "*.png","src/bin/**","views", ".nyc_output", "node_modules/", "package-lock.json", "package.json", "README.md", "jasmine.json", "swagger.json", "spec/", "server.js", "config/" ]
};
