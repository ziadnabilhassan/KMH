const fs = require('fs');

const pathMap = {
  'home': 'index.html',
  'services': 'services.html',
  'tax-consulting-and-planning': 'tax-consulting-and-planning.html',
  'accounting-and-bookkeeping': 'accounting-and-bookkeeping.html',
  'tax-returns-and-filing': 'tax-returns-and-filing.html',
  'vat-services': 'vat-services.html',
  'auditing-and-assurance': 'auditing-and-assurance.html',
  'payroll-solutions': 'payroll-solutions.html',
  'company-formation': 'company-formation.html',
  'financial-advisory': 'financial-advisory.html',
  'about-us': 'about-us.html',
  'industries': 'industries.html',
  'resources': 'resources.html',
  'contact-us': 'contact-us.html',
  'book-a-consultation': 'book-a-consultation.html',
  'client-portal-login': 'client-portal-login.html',
  'privacy-policy': 'privacy-policy.html',
  'terms-of-service': 'terms-of-service.html',
  'cookie-preferences': 'cookie-preferences.html',
  'security-architecture': 'security-architecture.html'
};

function fixLinks(html, currentPathKey) {
  // Replace href="#" with mapped file when data-path is present
  let updated = html.replace(/<a\s+([^>]*?)data-path="([^"]+)"([^>]*?)href="#"([^>]*?)>/g, (match, before, pathKey, mid, after) => {
    const target = pathMap[pathKey] || '#';
    return `<a ${before}data-path="${pathKey}"${mid}href="${target}"${after}>`;
  });

  updated = updated.replace(/<a\s+([^>]*?)href="#"([^>]*?)data-path="([^"]+)"([^>]*?)>/g, (match, before, mid, pathKey, after) => {
    const target = pathMap[pathKey] || '#';
    return `<a ${before}href="${target}"${mid}data-path="${pathKey}"${after}>`;
  });

  return updated;
}

// Mobile nav bar injection into header
function enhanceHeader(html) {
  // Find where the Book a Consultation button is in the main nav row
  // <div class="flex items-center gap-4"><a class="inline-flex items-center justify-center px-5 py-2.5 rounded bg-primary-container text-on-primary font-label-lg text-label-lg tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_4px_18px_rgba(197,160,89,0.3)] hover:bg-primary transition-all duration-200" ...
  const mobileBtnHtml = `
    <button id="mobileMenuToggle" type="button" class="xl:hidden flex items-center justify-center p-2 rounded text-primary hover:text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none" aria-label="Toggle Navigation Menu">
      <span class="material-symbols-outlined text-[26px]" id="mobileMenuIcon">menu</span>
    </button>
  `;

  // Insert before </header> a mobile dropdown menu
  const mobileMenuDrawer = `
  <div id="mobileMenuDrawer" class="hidden xl:hidden w-full bg-surface-container-lowest border-b border-primary-container/20 px-6 py-6 transition-all duration-300">
    <div class="flex flex-col space-y-4">
      <a href="index.html" class="text-on-surface hover:text-primary font-label-lg py-2 border-b border-outline-variant/20 flex items-center justify-between">
        <span>Home</span>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      <a href="about-us.html" class="text-on-surface hover:text-primary font-label-lg py-2 border-b border-outline-variant/20 flex items-center justify-between">
        <span>About Us</span>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      <div>
        <div class="text-primary font-label-mono text-[11px] uppercase tracking-wider py-1 font-bold">Services & Practices</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pl-2">
          <a href="services.html" class="text-on-surface hover:text-primary text-body-sm py-1 font-semibold flex items-center gap-1.5"><span class="text-primary">•</span> All Services Overview</a>
          <a href="tax-consulting-and-planning.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Tax Consulting & Planning</a>
          <a href="accounting-and-bookkeeping.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Accounting & Bookkeeping</a>
          <a href="tax-returns-and-filing.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Tax Returns & Filing</a>
          <a href="vat-services.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> VAT & Indirect Tax</a>
          <a href="auditing-and-assurance.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Auditing & Assurance</a>
          <a href="payroll-solutions.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Executive Payroll</a>
          <a href="company-formation.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Company Formation</a>
          <a href="financial-advisory.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Financial Advisory & M&A</a>
        </div>
      </div>
      <a href="industries.html" class="text-on-surface hover:text-primary font-label-lg py-2 border-b border-outline-variant/20 flex items-center justify-between">
        <span>Industries</span>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      <a href="resources.html" class="text-on-surface hover:text-primary font-label-lg py-2 border-b border-outline-variant/20 flex items-center justify-between">
        <span>Resources & Memos</span>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      <a href="contact-us.html" class="text-on-surface hover:text-primary font-label-lg py-2 border-b border-outline-variant/20 flex items-center justify-between">
        <span>Contact Us</span>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      <div class="pt-2 flex flex-col gap-3">
        <a href="book-a-consultation.html" class="w-full text-center py-3 rounded bg-primary text-on-primary font-label-lg font-bold shadow-md">
          Book a Consultation
        </a>
        <a href="client-portal-login.html" class="w-full text-center py-2.5 rounded bg-surface-container-high text-primary font-label-lg flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[16px]">lock</span> Client Portal Login
        </a>
      </div>
    </div>
  </div>
  `;

  // Add mobile toggle inside `<div class="flex items-center gap-4"><a ... Book a Consultation</a></div>`
  let processed = html.replace(/(<div class="flex items-center gap-4">\s*<a[^>]*data-path="book-a-consultation"[^>]*>[\s\S]*?<\/a>)(\s*<\/div>\s*<\/div>\s*<\/header>)/, (m, btnGroup, headerEnd) => {
    return btnGroup + mobileBtnHtml + '</div></div>' + mobileMenuDrawer + '</header>';
  });

  return processed;
}

// Add script for mobile menu toggle & notifications
function addSharedScripts(html) {
  const script = `
  <script>
    // Mobile menu toggle
    document.addEventListener('DOMContentLoaded', function() {
      const toggle = document.getElementById('mobileMenuToggle');
      const drawer = document.getElementById('mobileMenuDrawer');
      const icon = document.getElementById('mobileMenuIcon');
      if (toggle && drawer) {
        toggle.addEventListener('click', function() {
          const isOpen = !drawer.classList.contains('hidden');
          if (isOpen) {
            drawer.classList.add('hidden');
            if (icon) icon.textContent = 'menu';
          } else {
            drawer.classList.remove('hidden');
            if (icon) icon.textContent = 'close';
          }
        });
      }

      // Newsletter signup feedback
      document.querySelectorAll('footer form, footer div.flex.items-center.gap-1\\\\.5').forEach(container => {
        const input = container.querySelector('input[type=\"email\"]');
        const btn = container.querySelector('button');
        if (input && btn) {
          btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (input.value && input.value.includes('@')) {
              alert('Thank you for subscribing to the KMH Executive Tax Memo. A confirmation link has been sent to ' + input.value);
              input.value = '';
            } else {
              alert('Please enter a valid corporate email address.');
            }
          });
        }
      });
    });
  <\/script>
  `;

  return html.replace('</body>', `${script}\n</body>`);
}

// Process 3 existing pages
const servicesRaw = fs.readFileSync('services.raw.html', 'utf8');
const homeRaw = fs.readFileSync('home.raw.html', 'utf8');
const taxRaw = fs.readFileSync('tax.raw.html', 'utf8');

const servicesProcessed = addSharedScripts(enhanceHeader(fixLinks(servicesRaw, 'services')));
const homeProcessed = addSharedScripts(enhanceHeader(fixLinks(homeRaw, 'home')));
const taxProcessed = addSharedScripts(enhanceHeader(fixLinks(taxRaw, 'tax-consulting-and-planning')));

fs.writeFileSync('index.html', homeProcessed, 'utf8');
fs.writeFileSync('services.html', servicesProcessed, 'utf8');
fs.writeFileSync('tax-consulting-and-planning.html', taxProcessed, 'utf8');

console.log('Successfully generated index.html, services.html, and tax-consulting-and-planning.html!');
