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
