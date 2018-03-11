

const users = [
    {
      id: '1',
      name: 'Pavel',
      email: 'p.orsich@paralect.com',
    },
    {
      id: '2',
      name: 'Vova',
      age: 'top@kek.lol',
    },
];

getAll = async () => {
    return users;
};

getById = async (id) => {
    const user = users.find(user => (user.id === id));

    return user;
};

create = async (data) => {
    users.push(data);

    return data;
}

module.exports = {
    create,
    getAll,
    getById,
}