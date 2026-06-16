import { getAllByAlapadatok } from './services/vizsgaeredmenyek.service.js';

async function test() {
  try {
    const data = await getAllByAlapadatok('b89f7abf-6e74-4ca2-aa29-7096a581f36a', '2024');
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}
test();
