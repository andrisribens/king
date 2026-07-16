import { useState, useEffect } from 'react';

/**
 * Persist React state in localStorage. Corrupt JSON falls back to defaultValue.
 */
export default function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    try {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    } catch {
      try {
        window.localStorage.removeItem(key);
      } catch {
        // ignore storage errors
      }
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore quota / private-mode errors
    }
  }, [key, value]);

  return [value, setValue];
}
