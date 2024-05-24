// module Test.Main

export function getCounter() {
  return global.counter || 0;
}

export function setCounter(x) {
  return function() {
    global.counter = x;
    return {};
  }
}
