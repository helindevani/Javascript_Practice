var users = [{ name: "jill" }, { name: "harsh" }];
var user;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "harsh") {
    user = users[i];
    break;
  }
}
console.log(user);
