# github-actions-practice
Purpose: Focus is learning the set up for GitHub Actions. Project itself is fairly simple, using vanilla JavaScript. Answer thought/questions below as I experiment. Will be utilizing auto-package-test as a dependency, to familiarize myself with the process of adding & using external packages.

## auto-package-test
- simple package written in vanilla JS to console log ```Hello, my name is ${name}. Please run npx auto shipit.`;```

## Questions:
- auto-package-test => Why do we need our GitHub name before the package? In ```package.json``` => ```"name": "@lyoon-tcs/auto-package-test"```, not simply ```auto-package-test```?
  - FOR NPM REGISTRY: Creating package under scope of our username (scoped package). For example, lets say there's already a package called auto-package-test in npm registry. Would not be allowed to publish, since there's already an existing package with the same name. Hence why we scope - https://docs.npmjs.com/cli/v8/using-npm/scope
  - FOR GITHUB REGISTRY: Reason is different than NPM Registry (above). Here: https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages - Inherits permissions & visibility of repo that owns the package. This is how I'm able to authenticate using our PAT, since it contains all permissions (read, write, etc) and visibility (private, public?). 
