import('./src/app/App.tsx').catch(err => {
  console.error('Import error:', err.message);
  console.error('Stack:', err.stack);
});
