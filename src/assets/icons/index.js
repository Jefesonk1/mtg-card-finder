const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

Object.entries(cache).map((module) => module[1].default);

const getAssets = () => {
  const array = [];
  {
    Object.entries(cache).map((module) => {
      const image = module[1].default;
      const name = module[0].replace('./', '');
      array.push(image);
      array.push(name);
    });
  }
  const jsonData = {};
  for (let i = 0; i < array.length - 1; i += 2) {
    const keyName = array[i + 1].split('.')[0];
    jsonData[keyName] = array[i];
  }
  return jsonData;
};

export default getAssets;
