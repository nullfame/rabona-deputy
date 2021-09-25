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

    const unblockLambda = lambda(this, "unblock", {
      environment: {
        HIVE_USERNAME: process.env.HIVE_USERNAME,
        HIVE_POSTING_KEY: process.env.HIVE_POSTING_KEY,
      },
    });

    //
    //
    // Exports
    //
  } // END constructor
} // END class

module.exports = Template;
