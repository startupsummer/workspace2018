const Builder = require('./staff.builder');

exports.admin = async () => {
    const builder = new Builder();
    const staff = await builder.admin().build();
    staff.password = 'qwerty';
    return staff;
};

exports.client = async () => {
    const builder = new Builder();
    const staff = await builder.client().build();
    staff.password = 'qwerty';
    return staff;
};