export default function throttle(callback, delay = 1000) {
  let isWait = false;
  let latestArgs = null;
  const runThrottle = () => {
    if (latestArgs === null) {
      isWait = false;
    } else {
      callback(...latestArgs);
      latestArgs = null;
      setTimeout(runThrottle, delay);
    }
  };

  return (...args) => {
    if (isWait) {
      latestArgs = args;
      return;
    }

    callback(...args);
    isWait = true;

    setTimeout(runThrottle, delay);
  };
}
