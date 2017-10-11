function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild(){
  const DeepList = document.querySelectorAll('#grand-node div')

  var current = DeepList

    for (let i = 0; i < DeepList.length; i++){
      current = DeepList[i]
    }
  return current
}

function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}
