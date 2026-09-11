export function ThemeScript() {
  const scriptContent = `
    (function() {
      try {
        const theme = localStorage.getItem('theme');
        const shouldBeDark = theme === 'dark';
        if (shouldBeDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: scriptContent }}
      suppressHydrationWarning
    />
  );
}

