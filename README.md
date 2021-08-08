# Rabona Deputy ⚽️

Assistant manager for Rabona, a football manager game on the Hive blockchain

## 📋 Setup

### Installation ⤵️

Clone:

``` bash
git clone git@github.com:nullfame/rabona-deputy.git
```

``` bash
cd rabona-deputy
```

Install dependencies:

``` bash
npm install
```

### Configuration ⚙️

Add Hive account to `.env` using `HIVE_USERNAME` and _either_ `HIVE_POSTING_KEY` (advised) _or_ `HIVE_PASSWORD`:

``` bash
HIVE_USERNAME=
HIVE_POSTING_KEY=
HIVE_PASSWORD=
```

_Optional if publishing to AWS:_ add AWS credentials and configuration options:

``` bash
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=

PROJECT_ACCOUNT=main
PROJECT_ENV=dev
PROJECT_KEY=rabona
```

Definitions:

* `PROJECT_ACCOUNT`: if you have multiple AWS accounts, an identifer for the account you are publishing to
* `PROJECT_ENV`: to run multiple environments, an account identifier (e.g., `dev`, `prod`)
* `PROJECT_KEY`:  an identifer for assets built for this project, recommended to be left as `rabona`

## ⌨ Commands

_(`npm run` followed by command)_

* `scout` scouts a single player, returns transaction id
* `scout [number]` scouts `${number}` players, returns all transaction ids

## 🚀 Deployment

_(`npm run` followed by command)_

* `cdk:deploy` compiles and deploys the CDK stack (may require approval)
* `cdk:deploy:approve` compiles and deploys the CDK stack with automatic approval
* `cdk:destroy` destroys CDK stack and all resources, pending your confirmation
* `cdk:destroy:force` DANGER: destroys CDK stack and all resources without your confirmation
* `clean` removes any CDK and test coverage cruft

## 💻 Developing

Current style is CommonJS (not ES6).

The `hygen` code templating system should be used for most new code:

* `hygen fabric handler` for Lambda handlers
* `hygen fabric new` for generic top-level JavaScript
* `hygen fabric newsub` for generic JavaScript in subfolders
* `hygen fabric test` for generic top-level JavaScript tests

## 📝 Changelog

* v0.1.0 - Scout

## 🛣 Roadmap

* Blocked - who is blocked?
* Unblock - unblock all or select players

### Wishlist 🌠

* Distant Future
  * Web interface

## 📜 License

All rights reserved. Safe for use around pets.
