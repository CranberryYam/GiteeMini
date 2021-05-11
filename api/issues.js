const getIssues = params => {
    // setTimeout(()=>{
  
    // }, 2000)
    const fakeIssues = require('../utils/fakeIssues')
    return fakeIssues.createArraysOf(fakeIssues.issues, 0)
  }

  module.exports = {
      getIssues
  }