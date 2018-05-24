






test('the data is peanut butter', async (done) => {

  function callback(data) {
    expect(data).toBe('peanut butter');
    done()
  }


  await fetchData(callback);
});

function fetchData(cb) {
  return cb("peanut butter")
}
