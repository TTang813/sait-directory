// Test if the agreement page can be imported
const path = require('path');
try {
  const m = require('/tmp/sait-dev/src/app/opt-in/agreement/page.tsx');
  console.log('OK');
} catch(e) {
  console.log('ERROR:', e.message);
}
