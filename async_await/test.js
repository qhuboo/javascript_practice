Promise.race([Promise.resolve(1), Promise.reject(2), 3]).then((result) =>
  console.log(result)
);
