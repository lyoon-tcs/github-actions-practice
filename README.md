# github-actions-practice
Purpose: Focus is learning the set up for GitHub Actions. Project itself is fairly simple, using vanilla JavaScript. Answer thought/questions below as I experiment. Will be utilizing auto-package-test as a dependency, to familiarize myself with the process of adding & using external packages.

## auto-package-test
- simple package written in vanilla JS to console log ```Hello, my name is ${name}. Please run npx auto shipit.`;```

## Questions:
- Why do we need our GitHub name before the package? In ```package.json``` => ```"name": "@lyoon-tcs/auto-package-test"```, not simply ```auto-package-test```?
  - Creating package under scope of our username (scoped package). For e
