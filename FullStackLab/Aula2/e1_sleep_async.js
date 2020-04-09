const asyncSleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  console.log("Oi amigor")
  asyncSleep(2000).then(
      resolve => console.log('Depois de 2 segundos')
  );

  