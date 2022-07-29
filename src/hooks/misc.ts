import { useEffect, useState } from 'react';

export const useCountdown = (duration: number, callback?: () => void) => {
  const [interval, updateInterval] = useState<undefined | number>(undefined);
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  const countDown = () => setTimeLeft((timeLeft) => timeLeft - 1);
  const restart = () => {
    stop();
    setTimeLeft(duration);
    start();
  };
  const start = () => {
    updateInterval(setInterval(countDown, 1000));
  };
  const stop = () => {
    window.clearInterval(interval);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      stop();
      callback?.();
    }
  }, [interval, timeLeft]);

  return { duration, timeLeft, countDown, restart, start, stop };
};
