const issues = require('../../api/issues')
const util = require('../../utils/util')

Page({

  /**
   * Page initial data
   */
  data: {
    full_issues: [],
    memo_begin: 0,
    issues: [],
    hasMore: true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    issues.getIssues().then( data => {
      this.setData({ full_issues: data })
      this.updateIssues()
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    issues.getIssues().then( data => {
      this.setData({ memo_begin: 0, full_issues: data })
      this.updateIssues()
    })
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    this.updateIssues()
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  updateIssues: function() {
    if(!this.data.hasMore) { return }

    let {has_more, cur_arr, memo_begin} = 
          util.takeIssuesBy(this.data.full_issues, 30, this.data.memo_begin)

    this.setData({ 
      memo_begin: memo_begin,
      issues: cur_arr,
      hasMore: has_more
    })
  },

  clickTabs: function(e) {

    this.setData({
      full_issues: [],
      memo_begin: 0,
      issues: [],
      hasMore: true
    })

    issues.getIssues().then( data => {
      this.setData({ full_issues: data })
      this.updateIssues()
    })
  }

  
})