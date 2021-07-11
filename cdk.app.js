const Construct = require("@knowdev/cdk");
const Template = require("./template.cdk");
const packageJson = require("./package.json");

Construct.stack(Template, packageJson, {});
