# github-actions-practice

Purpose: Focus is learning the set up for GitHub Actions. Project itself is fairly simple, using vanilla JavaScript. Answer thought/questions below as I experiment. Will be utilizing auto-package-test as a dependency, to familiarize myself with the process of adding & using external packages.

## auto-package-test

- simple package written in vanilla JS to console log `` Hello, my name is ${name}. Please run npx auto shipit.`; ``

## Questions:

- auto-package-test => Why do we need our GitHub name before the package? In `package.json` => `"name": "@lyoon-tcs/auto-package-test"`, not simply `auto-package-test`?
  - FOR NPM REGISTRY: Creating package under scope of our username (scoped package). For example, lets say there's already a package called auto-package-test in npm registry. Would not be allowed to publish, since there's already an existing package with the same name. Hence why we scope - https://docs.npmjs.com/cli/v8/using-npm/scope
  - FOR GITHUB REGISTRY: Reason is different than NPM Registry (above). Here: https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages - Inherits permissions & visibility of repo that owns the package. This is how I'm able to authenticate using our PAT, since it contains all permissions (read, write, etc) and visibility (private, public?).
    Using .npmrc in this repo to install GH packages (auto-test-package).

Starting to understand =>

.npmrc is used to authenticate to GH registry (for installing in our case)

LOCAL
When we install locally, can simply replace ${my-pat} with PAT (make sure to change back, don't PAT to be avaiable on remote repo).

REMOTE
When we run `npm ci` on CI workflow, was noticing authentication warning. Since we are running the workflow on a virtual machine, need some way to authenticate - using secrets.

- Created a secret for this repository named GH_TOKEN and stored PAT there.
- In workflow - set key to my-pat: ${{ secrets.GH_TOKEN }}
  - What this does => in `.npmrc` file, sets my-pat to the PAT stored in GH_TOKEN (secret) to authenticate

Next steps:
Learn about environment variables, read and experiment: https://docs.github.com/en/actions/learn-github-actions/environment-variables. How are they created? How do we reference them? Don't think I fully understand yet how my-pat from ci.yml is referencing my-pat from .npmrc (is the syntax ${}?
