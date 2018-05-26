function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector("#nested .target")
};

function increaseRankBy(n) {
  let nums = document.querySelectorAll("ul.ranked-list li")
  for (let i = 0; i < nums.length; i++) {
    let li = nums[i].innerHTML
    nums[i].innerHTML = (parseInt(li) + n)
  }
};

function deepestChild() {
  let nodes = document.querySelectorAll("div#grand-node div")
  let arr = []
  for (let i = 0; i < nodes.length; i++) {
    arr.push(nodes[i])
  }
  return arr[arr.length-1]
};
