const getIssues = params => {
    const fakeIssues = require('../utils/fakeIssues')
    const issues = fakeIssues.createArraysOf(fakeIssues.issues, 20)

    // return new Promise( (resovle, reject) => {
    //     resovle(issues)
    // })

    const delay = require('../utils/util').delay
    return delay(5000).then(() => issues);


  }

  module.exports = {
      getIssues
  }