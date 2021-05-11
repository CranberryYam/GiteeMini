const getIssues = params => {
    // setTimeout(()=>{
  
    // }, 2000)
    const fakeIssues = require('../utils/fakeIssues')
    return fakeIssues.createArraysOf(fakeIssues.issues, 20)
  }

  module.exports = {
      getIssues
  }