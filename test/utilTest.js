let assert = require('assert')
let fakeIssues = require('../miniprogram/utils/fakeIssues')
let util = require('../miniprogram/utils/util')

describe('takeIssuesBy', function() {
    let arr = []

    beforeEach(function() {
        arr = fakeIssues.createArraysOf(fakeIssues.issues, 10)
    });

    describe('for the long array', function() {
        it('should return  30 items', function() {
            let {has_more, cur_arr, memo_begin} = util.takeIssuesBy(arr, 30, 0)
            assert.strictEqual(cur_arr.length, 30)
            assert.strictEqual(has_more, true)
            assert.strictEqual(memo_begin, 30)
        });

        it('should return 40 items', function() {
            let {has_more, cur_arr, memo_begin} = util.takeIssuesBy(arr, 30, 30)
            assert.strictEqual(cur_arr.length, 40)
            assert.strictEqual(has_more, false)
            assert.strictEqual(memo_begin, 40)
        });

        it('should return 40 when beyond the array', function() {
            let {has_more, cur_arr, memo_begin} = util.takeIssuesBy(arr, 30, 40)
            assert.strictEqual(cur_arr.length, 40)
            assert.strictEqual(has_more, false)
            assert.strictEqual(memo_begin, 40)
        });
    });
    
});