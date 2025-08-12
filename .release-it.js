module.exports = {
  git: {
    commitMessage: 'Release ${version}',
    tagName: 'v${version}',
    // requireBranch: 'master',
    // requireCommits: true,
    requireCleanWorkingDir: false,
  },
  github: {
    release: true,
    releaseName: 'v${version}'
  },
  hooks: {
    'after:bump': `
    yarn build
    `
  },
  npm: {
    publish: false
  }
}
