const takeIssuesBy = (arr, max_each, memo_begin) => {
  let end = memo_begin + max_each
  end = end > arr.length ? arr.length : end

  let cur_arr = arr.slice(0, end)
  
  let has_more = end == arr.length ? false : true
  
  return {
    has_more: has_more,
    cur_arr: cur_arr,
    memo_begin: end 
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
  takeIssuesBy,
  delay
}