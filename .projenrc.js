const { cdk } = require('projen');
const { JobPermission } = require('projen/lib/github/workflows-model');

const RELEASE_EVERY_HOURS = 3;

const project = new cdk.JsiiProject({
  author: 'Amazon Web Services, Inc.',
  authorAddress: 'construct-ecosystem-team@amazon.com',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  defaultReleaseBranch: 'main',
  name: 'construct-hub-probe',
  releaseToNpm: true,
  minNodeVersion: '14.18.0',
  repositoryUrl: 'https://github.com/cdklabs/construct-hub-probe.git',
  peerDeps: [
    'constructs',
    'aws-cdk-lib',
  ],
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  keywords: [
    'construct-hub',
    'probe',
    'dummy',
    'construct-hub/hide-from-search',
  ],
});

const bump = project.github.addWorkflow('auto-commit');
bump.on({ schedule: [{ cron: `0 */${RELEASE_EVERY_HOURS} * * *` }], workflowDispatch: {} });
bump.addJobs({
  bump: {
    runsOn: 'ubuntu-latest',
    permissions: {
      contents: JobPermission.READ,
    },
    steps: [
      {
        name: 'Checkout',
        uses: 'actions/checkout@v2',
      },
      {
        name: 'Bump',
        run: 'echo $(date -Is) > commit.date',
      },
      {
        name: 'Create Pull Request',
        uses: 'peter-evans/create-pull-request@v3',
        with: {
          token: '${{ secrets.PROJEN_GITHUB_TOKEN }}',
          branch: 'github-actions/auto-commit',
          title: 'chore: auto commit to trigger new release',
          labels: 'auto-approve',
        },
      },
    ],
  },
});

project.synth();
