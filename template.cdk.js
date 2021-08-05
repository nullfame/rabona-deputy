const { cdk, lambda } = require("@knowdev/cdk");

class Template extends cdk.Stack {
  constructor(scope, id, props) {
    //
    //
    // Setup
    //

    //
    //
    // Stack
    //

    /* eslint-disable no-unused-vars */
    super(scope, id, props);

    //
    //
    // Dynamo
    //

    //
    //
    // Lambdas
    //

    const statusLambda = lambda(this, "status");

    //
    //
    // Exports
    //
  } // END constructor
} // END class

module.exports = Template;
