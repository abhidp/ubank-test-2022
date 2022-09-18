const Mocha = require('mocha'),
  fs = require('fs'),
  path = require('path')

const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'api/report',
    reportFilename: 'api-report',
    reportTitle: 'API UBANK Test 2022',
    quiet: true
  },
  timeout: 10000
})

const testDir = 'api/test'

fs.readdirSync(testDir)
  .filter(function (file) {
    return file.substr(-3) === '.ts'
  })
  .forEach(function (file) {
    mocha.addFile(path.join(testDir, file))
  })

// Run the tests.
mocha.run(function (failures) {
  process.exitCode = failures ? 1 : 0 // exit with non-zero status if there were failures
})
