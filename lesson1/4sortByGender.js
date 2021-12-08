const users = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'female',
      ip_address: '26.58.193.2',
    },
    {
      id: 2,
      first_name: 'Petr',
      last_name: 'Jackson',
      email: 'gfrediani1@senate.gov',
      gender: 'male',
      ip_address: '229.179.4.212',
    },
  ];
  
const sortByGender = (users) => {
    let sortedUsers = {
        men: [],
        women: []
    }
    let usersCopy = [...users]
    usersCopy.map(user => {
        user.full_name = `${user.first_name} ${user.last_name}`
        delete user.first_name
        delete user.last_name
    })
    usersCopy.forEach(user => user.gender === 'male' ? sortedUsers.men.push(user) : sortedUsers.women.push(user))

    return sortedUsers
}