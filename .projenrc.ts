import { CdklabsJsiiProject } from 'cdklabs-projen-project-types';
import { JobPermission } from 'projen/lib/github/workflows-model';

const RELEASE_EVERY_HOURS = 3;

const project = new CdklabsJsiiProject({
  author: 'Amazon Web Services, Inc.',
  projenrcTs: true,
  private: false,
  authorAddress: 'construct-ecosystem-team@amazon.com',
  defaultReleaseBranch: 'main',
  name: 'construct-hub-probe',
  releaseToNpm: true,
  minNodeVersion: '18.12.0',
  workflowNodeVersion: '24.x',
  setNodeEngineVersion: false,
  repositoryUrl: 'https://github.com/cdklabs/construct-hub-probe.git',
  peerDeps: [
    'constructs',
    'aws-cdk-lib',
  ],
  devDeps: [
    'cdklabs-projen-project-types',
  ],
  jsiiTargetLanguages: [],
  enablePRAutoMerge: true,
  keywords: [
    'construct-hub',
    'probe',
    'dummy',
    'construct-hub/hide-from-search',
  ],
});

if (!project.github) {
  throw new Error('project.github is undefined. This would only happen if the project is a subproject, which it shouldn\'t be.');
}

const bump = project.github.addWorkflow('auto-commit');
const commitMessage = 'feat: auto commit to trigger new release';
bump.on({ schedule: [{ cron: `0 */${RELEASE_EVERY_HOURS} * * *` }], workflowDispatch: {} });
bump.addJobs({
  bump: {
    runsOn: ['ubuntu-latest'],
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
          'token': '${{ secrets.PROJEN_GITHUB_TOKEN }}',
          'commit-message': commitMessage,
          'branch': 'github-actions/auto-commit',
          'title': commitMessage,
          'labels': 'auto-approve',
        },
      },
    ],
  },
});

project.synth();
