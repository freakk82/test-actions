module.exports = {
  git: {
    commitMessage: 'Release ${version}',
    tagName: 'v${version}',
    // requireCommits: true,
    requireCleanWorkingDir: false,
  },
  github: {
    release: false,
    releaseName: 'v${version}'
  },
  npm: {
    publish: false
  }
}
