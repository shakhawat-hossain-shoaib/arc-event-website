import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useResolvedTheme() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or before mounting, default to dark theme classes
  const isDark = !mounted || resolvedTheme !== 'light';

  return {
    theme,
    resolvedTheme,
    setTheme,
    isDark,
    mounted
  };
}
