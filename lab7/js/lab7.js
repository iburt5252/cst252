function sortUserName() {
  var userName = window.prompt(Hey there, whats your name? Can I fix it?);
  console.log("userName =", userName);
  var nameArray = "userName =", userName.split('');
  console.log("nameArray -", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

document.writeln("Oh look, its all better now: ",
    sortUserName(), "</br>");
