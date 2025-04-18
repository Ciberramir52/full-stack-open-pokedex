The test steps for CI at python and their tools:
1. Source Code Management
Tools: GitHub, GitLab, Bitbucket, Gitea
2. CI Orchestration
Tools: GitHub Actions, GitLab CI/CD, CircleCI, Jenkins, Travis CI, Buildbot
3. Environment Setup
Tools: Python virtualenv, Docker, Conda.
4. Dependency Installation
Tools: pip, pipenv or poetry
5. Static Code Analysis & Linting
Tools: flake8, pylint, black, isort
6. Unit & Integration Testing
Tools: pytest, unittest, nose2
7. Test Coverage Reporting
Tools: coverage.py, Codecov,
8. Build and Packaging
Tools: setuptools, wheel, twine
9. Artifact Management (Optional)
Tools: GitHub Releases, GitLab Packages, Artifactory
10. Deployment (if CI is part of CI/CD)
Tools: Ansible, Fabric, Docker Compose, Kubernetes, Heroku, AWS Elastic Beanstalk, Azure App Service
11. Monitoring (Post-Deployment)
Tools: Sentry, Prometheus, Datadog

Alternative tools for CI setup:
GitLab CI/CD, CircleCI, Travis CI, Bitbucket Pipelines, TeamCity, AWS CodePipeline, Azure DevOps, Bamboo, Spacelift, Harness, Buildkite, Cloudomation, CodeShip, Devtron.

For a small app, a cloud-based CI setup is almost always the better choice. 
Why Cloud-Based CI is Usually Better for Small Apps
Ease of Setup and Maintenance, Cost-Effectiveness, Scalability and Reliability, Faster Time to Value, Security, Integrations
When Self-Hosted CI Might Make Sense
Full Control & Customization, Security & Privacy, Cost at Scale

Key Information Needed to Decide
Team expertise: Do you have the skills/time to manage servers, security, and CI maintenance?
Budget: Can you afford upfront hardware and ongoing ops, or is a pay-as-you-go model better?
Security/compliance: Do you have requirements that only self-hosting can meet?
Scalability needs: Will your workload change often, or is it stable?
Integration needs: Do you need specific tools or workflows that only one model supports?
Time to deploy: Do you want to be up and running in minutes (cloud) or can you wait for setup (self-hosted)?