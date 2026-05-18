import fs from 'fs';
import path from 'path';

const distPath = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');

// Define SEO data for each route
const seoData = {
  'ready-mix-concrete-delivery-ajax': {
    title: 'Ready Mix Concrete Delivery in Ajax | Wilches Ready Mix Concrete Inc',
    description: 'Looking for ready mix concrete delivery in Ajax? Wilches Ready Mix serves Ajax contractors and homeowners with residential, commercial & industrial concrete. 20+ years GTA experience. Call 647-891-4740.',
    url: 'https://wilchesreadymix.com/ready-mix-concrete-delivery-ajax/'
  },
  'ready-mix-concrete-delivery-whitby': {
    title: 'Ready Mix Concrete Whitby | Concrete Delivery',
    description: 'Need ready mix concrete in Whitby? Wilches Ready Mix delivers residential, commercial & industrial concrete across Whitby and Durham Region. 20+ years GTA experience. Call 647-891-4740.',
    url: 'https://wilchesreadymix.com/ready-mix-concrete-delivery-whitby/'
  },
  'ready-mix-concrete-pickering': {
    title: 'Ready Mix Concrete Delivery in Pickering | Wilches Ready Mix Concrete Inc',
    description: 'Looking for ready mix concrete delivery in Pickering? Wilches Ready Mix serves Pickering contractors and homeowners with residential, commercial & industrial concrete. 20+ years GTA experience. Call 647-891-4740.',
    url: 'https://wilchesreadymix.com/ready-mix-concrete-pickering/'
  },
  'ready-mix-concrete-scarborough': {
    title: 'Ready Mix Concrete Scarborough | Wilches Ready Mix Concrete Inc',
    description: 'Wilches Ready Mix has delivered quality concrete across Scarborough for 20+ years. Residential, commercial & industrial. 1,500+ GTA projects. Call 647-891-4740.',
    url: 'https://wilchesreadymix.com/ready-mix-concrete-scarborough/'
  }
};

// These are all the specific routes we want GitHub Pages to serve with a 200 OK status
const routes = [
  'about',
  'services',
  'gallery',
  'contact',
  'ready-mix-concrete-delivery-ajax',
  'ready-mix-concrete-delivery-whitby',
  'ready-mix-concrete-pickering',
  'ready-mix-concrete-scarborough'
];

if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  
  routes.forEach(route => {
    const routeDir = path.join(distPath, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    let customizedContent = indexContent;
    
    // Inject custom SEO tags for specific routes
    if (seoData[route]) {
      const data = seoData[route];
      
      // Replace title
      customizedContent = customizedContent.replace(
        /<title>.*?<\/title>/,
        `<title>${data.title}</title>`
      );
      
      // Replace description
      customizedContent = customizedContent.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${data.description}" />`
      );
      
      // Replace OG tags
      customizedContent = customizedContent.replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${data.title}" />`
      );
      customizedContent = customizedContent.replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${data.description}" />`
      );
      customizedContent = customizedContent.replace(
        /<meta property="og:url" content=".*?" \/>/,
        `<meta property="og:url" content="${data.url}" />`
      );
    }
    
    // Copy the main index.html into the route folder so the static server finds it
    fs.writeFileSync(path.join(routeDir, 'index.html'), customizedContent);
  });
  
  // Also create a 404.html to handle any other unexpected routes gracefully
  fs.writeFileSync(path.join(distPath, '404.html'), indexContent);
  
  console.log('✅ Postbuild: Copied index.html to route directories for SEO (200 OK).');
} else {
  console.error('❌ Postbuild: dist/index.html not found. Make sure this runs after vite build.');
}
