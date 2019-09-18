var faker = require('faker');
const name = faker.fake("{{name.firstName}} {{name.lastName}}");
const age = faker.fake("{{random.number}}");
const job = faker.fake("{{name.title}}")
console.log(job);