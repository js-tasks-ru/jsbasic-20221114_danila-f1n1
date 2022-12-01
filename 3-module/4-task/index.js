function showSalary(users, age) {
  let newArr = users.filter(user => user.age <= age).map(user => `${user.name}, ${user.balance}`)
  for(let i = 0 ; i <= newArr.length ; i++) {
    return ((i !== newArr.length) ? newArr.join('\n') : newArr.join('') )
  }
}