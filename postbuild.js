import fs from 'fs';
import path from 'path';

const distPath = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');

// These are all the specific routes we want GitHub Pages to serve with a 200 OK status
const routes = [
  'about',
  'services',
  'gallery',
  'contact',
  'ready-mix-concrete-delivery-ajax',
  'ready-mix-concrete-delivery-whitby',
  'ready-mix-concrete-pickering'
];

if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  
  routes.forEach(route => {
    const routeDir = path.join(distPath, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    // Copy the main index.html into the route folder so the static server finds it
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent);
  });
  
  // Also create a 404.html to handle any other unexpected routes gracefully
  fs.writeFileSync(path.join(distPath, '404.html'), indexContent);
  
  console.log('✅ Postbuild: Copied index.html to route directories for SEO (200 OK).');
} else {
  console.error('❌ Postbuild: dist/index.html not found. Make sure this runs after vite build.');
}
