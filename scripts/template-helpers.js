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

function getHead(title = 'KMH Advisory & Tax Consulting') {
  return `<!DOCTYPE html>
<html class="dark" lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>${title} | KMH Advisory & Tax Consulting</title>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&amp;family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
  <style>
    @layer base { 
      html, body { margin: 0; padding: 0; } 
      body { overscroll-behavior: none; } 
      main > :first-child { margin-top: 0 !important; } 
      main > :last-child { margin-bottom: 0 !important; } 
    } 
    ::-webkit-scrollbar { display: none; }
  </style>
  <script src="https://cdn.tailwindcss.com"></script>
  <script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "error-container": "#93000a",
            "tertiary-fixed": "#ffdf96",
            "on-tertiary-container": "#4b3900",
            "on-secondary-fixed-variant": "#45474b",
            "secondary-fixed": "#e2e2e8",
            "on-primary-fixed-variant": "#5d4201",
            "tertiary": "#e4c373",
            "on-primary-container": "#4e3700",
            "on-surface": "#e1e2eb",
            "on-secondary-container": "#b7b8be",
            "tertiary-container": "#c1a256",
            "primary-fixed": "#ffdea5",
            "on-error-container": "#ffdad6",
            "on-secondary": "#2f3035",
            "surface-container-highest": "#32353b",
            "secondary-container": "#47494e",
            "secondary-fixed-dim": "#c6c6cc",
            "inverse-primary": "#775a19",
            "surface": "#101319",
            "error": "#ffb4ab",
            "surface-dim": "#101319",
            "on-tertiary": "#3e2e00",
            "surface-container-high": "#272a30",
            "on-background": "#e1e2eb",
            "on-primary-fixed": "#261900",
            "on-primary": "#412d00",
            "secondary": "#c6c6cc",
            "tertiary-fixed-dim": "#e4c373",
            "outline": "#9a8f80",
            "surface-tint": "#e9c176",
            "surface-variant": "#32353b",
            "inverse-surface": "#e1e2eb",
            "on-surface-variant": "#d1c5b4",
            "surface-bright": "#363940",
            "surface-container-low": "#191c22",
            "inverse-on-surface": "#2d3037",
            "background": "#101319",
            "on-tertiary-fixed-variant": "#5a4400",
            "surface-container-lowest": "#0b0e14",
            "outline-variant": "#4e4639",
            "surface-container": "#1d2026",
            "on-tertiary-fixed": "#251a00",
            "primary-fixed-dim": "#e9c176",
            "primary": "#e9c176",
            "on-secondary-fixed": "#1a1c20",
            "primary-container": "#c5a059",
            "on-error": "#690005"
          },
          borderRadius: {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
          },
          spacing: {
            "space-xl": "2.5rem",
            "gutter": "1.5rem",
            "space-sm": "0.5rem",
            "space-lg": "1.5rem",
            "space-3xl": "6rem",
            "margin-tablet": "2rem",
            "gutter-desktop": "2rem",
            "space-xs": "0.25rem",
            "space-2xl": "4rem",
            "space-md": "1rem",
            "margin": "1rem",
            "margin-desktop": "4rem"
          },
          fontFamily: {
            "body-lg": [ "Plus Jakarta Sans" ],
            "display-hero-mobile": [ "Playfair Display" ],
            "body-sm": [ "Plus Jakarta Sans" ],
            "label-mono": [ "Plus Jakarta Sans" ],
            "label-md": [ "Plus Jakarta Sans" ],
            "body-md": [ "Plus Jakarta Sans" ],
            "headline-lg": [ "Playfair Display" ],
            "headline-lg-mobile": [ "Playfair Display" ],
            "display-hero": [ "Playfair Display" ],
            "label-lg": [ "Plus Jakarta Sans" ],
            "title-lg": [ "Plus Jakarta Sans" ],
            "title-md": [ "Plus Jakarta Sans" ],
            "headline-sm": [ "Playfair Display" ],
            "headline-md": [ "Playfair Display" ]
          },
          fontSize: {
            "body-lg": [ "18px", { "lineHeight": "28px", "fontWeight": "400" } ],
            "display-hero-mobile": [ "36px", { "lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600" } ],
            "body-sm": [ "13px", { "lineHeight": "20px", "fontWeight": "400" } ],
            "label-mono": [ "11px", { "lineHeight": "14px", "letterSpacing": "0.12em", "fontWeight": "700" } ],
            "label-md": [ "12px", { "lineHeight": "16px", "letterSpacing": "0.06em", "fontWeight": "500" } ],
            "body-md": [ "15px", { "lineHeight": "24px", "fontWeight": "400" } ],
            "headline-lg": [ "40px", { "lineHeight": "48px", "letterSpacing": "-0.015em", "fontWeight": "600" } ],
            "headline-lg-mobile": [ "28px", { "lineHeight": "36px", "fontWeight": "600" } ],
            "display-hero": [ "56px", { "lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "600" } ],
            "label-lg": [ "14px", { "lineHeight": "20px", "letterSpacing": "0.04em", "fontWeight": "600" } ],
            "title-lg": [ "20px", { "lineHeight": "28px", "fontWeight": "600" } ],
            "title-md": [ "16px", { "lineHeight": "24px", "fontWeight": "600" } ],
            "headline-sm": [ "22px", { "lineHeight": "30px", "fontWeight": "500" } ],
            "headline-md": [ "28px", { "lineHeight": "36px", "fontWeight": "500" } ]
          }
        }
      }
    };
  </script>
</head>
<body class="bg-surface font-body-md text-on-surface antialiased">
`;
}

function getHeader(activeKey = 'home') {
  const isServicesActive = [
    'services',
    'accounting-and-bookkeeping',
    'tax-consulting-and-planning',
    'tax-returns-and-filing',
    'vat-services',
    'auditing-and-assurance',
    'payroll-solutions',
    'company-formation',
    'financial-advisory'
  ].includes(activeKey);

  const navClass = (key) => {
    if (key === activeKey) {
      return 'h-full flex items-center transition-colors text-primary border-b border-primary font-semibold';
    }
    return 'h-full flex items-center font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors';
  };

  const servicesClass = isServicesActive
    ? 'h-full flex items-center group-hover:text-primary transition-colors gap-1 text-primary border-b border-primary font-semibold'
    : 'h-full flex items-center font-label-lg text-label-lg text-on-surface-variant group-hover:text-primary transition-colors gap-1';

  return `
<header class="fixed top-0 w-full z-50 bg-[#0D0F14]/95 backdrop-blur-xl border-b border-[#C5A059]/25">
  <div class="bg-surface-container-lowest border-b border-outline-variant/30 text-on-surface-variant font-label-mono text-label-mono uppercase">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 h-9 flex items-center justify-between">
      <div class="flex items-center gap-space-lg">
        <span class="flex items-center gap-1.5"><span class="text-primary">Phone:</span> <a class="hover:text-primary transition-colors" href="tel:+18008427900">+1 (800) 842-7900</a></span>
        <span class="hidden md:inline-block text-outline-variant">|</span>
        <span class="hidden md:flex items-center gap-1.5"><span class="text-primary">Office:</span> 450 Lexington Ave, New York</span>
      </div>
      <div class="flex items-center gap-4">
        <a class="flex items-center gap-1 text-primary hover:text-primary-fixed transition-colors" data-path="client-portal-login" href="client-portal-login.html">
          <span class="material-symbols-outlined text-[14px]">lock</span>
          <span>Client Portal Login</span>
        </a>
      </div>
    </div>
  </div>
  <div class="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-lg">
    <a href="index.html" class="flex items-center gap-3">
      <img alt="KMH Logo" class="w-8 h-8 rounded-full object-cover border border-[#C5A059]/40 ring-1 ring-primary/20" src="https://lh3.googleusercontent.com/aida/ALJJyrA2c8HVipTBNfAmlovRk05qC4paQX_6sEaQBoxnMBV94Mt_Yn0FFwjktNrVF8zDVnCOo-2s1RIS5ykj9tNGML0cLwfA9aSMjhn2_iPXjcXXuhGrJf9b5qsHeSM2eXcxnd6McGH6WnOeqL7LxuV1TOjgTelEcKww78tDFTWJ-krsLoXIl5NNqQcUAdAeUw6xVmMJaxyXrNUaJTg-9gRjlOvORY99e5X_Ar1qf0a4YPOK2sFz_Z_zogAAt7Y"/>
      <div class="flex flex-col">
        <span class="font-headline-sm text-headline-sm font-semibold tracking-wider text-on-surface">KMH</span>
        <span class="font-label-mono text-label-mono tracking-widest text-primary text-[10px] -mt-1">ADVISORY &amp; TAX CONSULTING</span>
      </div>
    </a>
    <nav class="hidden xl:flex items-center gap-8 h-full" data-active-classes="text-primary border-b border-primary font-semibold">
      <a class="${navClass('home')}" data-path="home" href="index.html">Home</a>
      <a class="${navClass('about-us')}" data-path="about-us" href="about-us.html">About Us</a>
      <div class="relative group h-full flex items-center">
        <a class="${servicesClass}" data-path="services" href="services.html">
          <span>Services</span>
          <span class="material-symbols-outlined text-[16px] text-outline group-hover:text-primary transition-transform group-hover:rotate-180">expand_more</span>
        </a>
        <div class="absolute top-20 left-0 w-[580px] p-6 bg-surface-container-low border border-primary-container/20 rounded shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_20px_-5px_rgba(197,160,89,0.08)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto grid grid-cols-2 gap-4 z-50">
          <a class="p-2.5 rounded hover:bg-surface-container-high transition-colors ${activeKey === 'accounting-and-bookkeeping' ? 'text-primary border-b border-primary font-semibold' : ''}" data-path="accounting-and-bookkeeping" href="accounting-and-bookkeeping.html">
            <div class="font-title-md text-title-md text-on-surface font-medium">Accounting &amp; Bookkeeping</div>
            <div class="font-body-sm text-body-sm text-on-surface-variant">Institutional balance and statutory books</div>
          </a>
          <a class="p-2.5 rounded hover:bg-surface-container-high transition-colors ${activeKey === 'tax-consulting-and-planning' ? 'text-primary border-b border-primary font-semibold' : ''}" data-path="tax-consulting-and-planning" href="tax-consulting-and-planning.html">
            <div class="font-title-md text-title-md text-on-surface font-medium">Tax Consulting &amp; Planning</div>
            <div class="font-body-sm text-body-sm text-on-surface-variant">Strategic domestic and foreign optimization</div>
          </a>
          <a class="p-2.5 rounded hover:bg-surface-container-high transition-colors ${activeKey === 'tax-returns-and-filing' ? 'text-primary border-b border-primary font-semibold' : ''}" data-path="tax-returns-and-filing" href="tax-returns-and-filing.html">
            <div class="font-title-md text-title-md text-on-surface font-medium">Tax Returns &amp; Filing</div>
            <div class="font-body-sm text-body-sm text-on-surface-variant">Federal, multi-state, and cross-border returns</div>
          </a>
          <a class="p-2.5 rounded hover:bg-surface-container-high transition-colors ${activeKey === 'vat-services' ? 'text-primary border-b border-primary font-semibold' : ''}" data-path="vat-services" href="vat-services.html">
            <div class="font-title-md text-title-md text-on-surface font-medium">VAT Services</div>
            <div class="font-body-sm text-body-sm text-on-surface-variant">Global indirect tax and cross-border regimes</div>
          </a>
          <a class="p-2.5 rounded hover:bg-surface-container-high transition-colors ${activeKey === 'auditing-and-assurance' ? 'text-primary border-b border-primary font-semibold' : ''}" data-path="auditing-and-assurance" href="auditing-and-assurance.html">
            <div class="font-title-md text-title-md text-on-surface font-medium">Auditing &amp; Assurance</div>
            <div class="font-body-sm text-body-sm text-on-surface-variant">Rigorous independent audits and SOC compliance</div>
          </a>
          <a class="p-2.5 rounded hover:bg-surface-container-high transition-colors ${activeKey === 'payroll-solutions' ? 'text-primary border-b border-primary font-semibold' : ''}" data-path="payroll-solutions" href="payroll-solutions.html">
            <div class="font-title-md text-title-md text-on-surface font-medium">Payroll Solutions</div>
            <div class="font-body-sm text-body-sm text-on-surface-variant">Multijurisdictional executive compensation</div>
          </a>
          <a class="p-2.5 rounded hover:bg-surface-container-high transition-colors ${activeKey === 'company-formation' ? 'text-primary border-b border-primary font-semibold' : ''}" data-path="company-formation" href="company-formation.html">
            <div class="font-title-md text-title-md text-on-surface font-medium">Company Formation</div>
            <div class="font-body-sm text-body-sm text-on-surface-variant">Corporate structuring and foreign entities</div>
          </a>
          <a class="p-2.5 rounded hover:bg-surface-container-high transition-colors ${activeKey === 'financial-advisory' ? 'text-primary border-b border-primary font-semibold' : ''}" data-path="financial-advisory" href="financial-advisory.html">
            <div class="font-title-md text-title-md text-on-surface font-medium">Financial Advisory</div>
            <div class="font-body-sm text-body-sm text-on-surface-variant">M&amp;A transaction diligence and valuation</div>
          </a>
        </div>
      </div>
      <a class="${navClass('industries')}" data-path="industries" href="industries.html">Industries</a>
      <a class="${navClass('resources')}" data-path="resources" href="resources.html">Resources</a>
      <a class="${navClass('contact-us')}" data-path="contact-us" href="contact-us.html">Contact Us</a>
    </nav>
    <div class="flex items-center gap-4">
      <a class="inline-flex items-center justify-center px-5 py-2.5 rounded bg-primary-container text-on-primary font-label-lg text-label-lg tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_4px_18px_rgba(197,160,89,0.3)] hover:bg-primary transition-all duration-200" data-path="book-a-consultation" href="book-a-consultation.html">Book a Consultation</a>
      <button id="mobileMenuToggle" type="button" class="xl:hidden flex items-center justify-center p-2 rounded text-primary hover:text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none" aria-label="Toggle Navigation Menu">
        <span class="material-symbols-outlined text-[26px]" id="mobileMenuIcon">menu</span>
      </button>
    </div>
  </div>
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
        <div class="text-primary font-label-mono text-[11px] uppercase tracking-wider py-1 font-bold">Services &amp; Practices</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pl-2">
          <a href="services.html" class="text-on-surface hover:text-primary text-body-sm py-1 font-semibold flex items-center gap-1.5"><span class="text-primary">•</span> All Services Overview</a>
          <a href="tax-consulting-and-planning.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Tax Consulting &amp; Planning</a>
          <a href="accounting-and-bookkeeping.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Accounting &amp; Bookkeeping</a>
          <a href="tax-returns-and-filing.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Tax Returns &amp; Filing</a>
          <a href="vat-services.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> VAT &amp; Indirect Tax</a>
          <a href="auditing-and-assurance.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Auditing &amp; Assurance</a>
          <a href="payroll-solutions.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Executive Payroll</a>
          <a href="company-formation.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Company Formation</a>
          <a href="financial-advisory.html" class="text-on-surface hover:text-primary text-body-sm py-1 flex items-center gap-1.5"><span class="text-primary">•</span> Financial Advisory &amp; M&amp;A</a>
        </div>
      </div>
      <a href="industries.html" class="text-on-surface hover:text-primary font-label-lg py-2 border-b border-outline-variant/20 flex items-center justify-between">
        <span>Industries</span>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      <a href="resources.html" class="text-on-surface hover:text-primary font-label-lg py-2 border-b border-outline-variant/20 flex items-center justify-between">
        <span>Resources &amp; Memos</span>
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
</header>
`;
}

function getFooter() {
  return `
<footer class="w-full bg-[#090B0E] border-t border-[#C5A059]/20">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-space-2xl pb-space-xl">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-gutter-desktop">
      <div class="lg:col-span-2 space-y-4">
        <div class="flex items-center gap-3">
          <img alt="KMH Emblem" class="w-9 h-9 rounded-full object-cover border border-[#C5A059]/50" src="https://lh3.googleusercontent.com/aida/ALJJyrA2c8HVipTBNfAmlovRk05qC4paQX_6sEaQBoxnMBV94Mt_Yn0FFwjktNrVF8zDVnCOo-2s1RIS5ykj9tNGML0cLwfA9aSMjhn2_iPXjcXXuhGrJf9b5qsHeSM2eXcxnd6McGH6WnOeqL7LxuV1TOjgTelEcKww78tDFTWJ-krsLoXIl5NNqQcUAdAeUw6xVmMJaxyXrNUaJTg-9gRjlOvORY99e5X_Ar1qf0a4YPOK2sFz_Z_zogAAt7Y"/>
          <div class="flex flex-col">
            <span class="font-headline-sm text-headline-sm font-semibold tracking-wider text-on-surface">KMH</span>
            <span class="font-label-mono text-label-mono tracking-widest text-primary text-[10px] -mt-1">ADVISORY &amp; TAX CONSULTING</span>
          </div>
        </div>
        <p class="font-body-sm text-body-sm text-on-surface-variant pr-4 leading-relaxed">Sovereign financial architecture and bespoke tax advisory for private equity, enterprise leadership, and family offices worldwide. Licensed CPA and Chartered Tax Advisors delivering institutional precision.</p>
        <div class="flex items-center gap-3 pt-2">
          <span class="inline-block px-2.5 py-1 rounded border border-outline-variant font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider">AICPA Member</span>
          <span class="inline-block px-2.5 py-1 rounded border border-outline-variant font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider">ISO 27001 Certified</span>
        </div>
      </div>
      <div class="space-y-3">
        <h4 class="font-label-lg text-label-lg uppercase tracking-wider text-primary">Core Advisory</h4>
        <ul class="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
          <li><a class="hover:text-primary transition-colors" data-path="tax-consulting-and-planning" href="tax-consulting-and-planning.html">Tax Planning</a></li>
          <li><a class="hover:text-primary transition-colors" data-path="accounting-and-bookkeeping" href="accounting-and-bookkeeping.html">Corporate Bookkeeping</a></li>
          <li><a class="hover:text-primary transition-colors" data-path="tax-returns-and-filing" href="tax-returns-and-filing.html">International Tax</a></li>
          <li><a class="hover:text-primary transition-colors" data-path="auditing-and-assurance" href="auditing-and-assurance.html">Internal Audit</a></li>
          <li><a class="hover:text-primary transition-colors" data-path="financial-advisory" href="financial-advisory.html">M&amp;A Advisory</a></li>
        </ul>
      </div>
      <div class="space-y-3">
        <h4 class="font-label-lg text-label-lg uppercase tracking-wider text-primary">Practices</h4>
        <ul class="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
          <li><a class="hover:text-primary transition-colors" data-path="industries" href="industries.html">Family Office</a></li>
          <li><a class="hover:text-primary transition-colors" data-path="industries" href="industries.html">High Net Worth</a></li>
          <li><a class="hover:text-primary transition-colors" data-path="industries" href="industries.html">FinTech &amp; SaaS</a></li>
          <li><a class="hover:text-primary transition-colors" data-path="industries" href="industries.html">Cross-Border Enterprise</a></li>
          <li><a class="hover:text-primary transition-colors" data-path="industries" href="industries.html">Real Estate Holdings</a></li>
        </ul>
      </div>
      <div class="space-y-3">
        <h4 class="font-label-lg text-label-lg uppercase tracking-wider text-primary">Global Offices</h4>
        <ul class="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
          <li><span class="text-on-surface font-medium block">New York</span><span class="text-[12px] block">+1 (800) 842-7900</span></li>
          <li><span class="text-on-surface font-medium block">London</span><span class="text-[12px] block">+44 20 7946 0912</span></li>
          <li><span class="text-on-surface font-medium block">Zurich</span><span class="text-[12px] block">+41 44 668 1800</span></li>
          <li><span class="text-on-surface font-medium block">Dubai</span><span class="text-[12px] block">+971 4 312 8800</span></li>
        </ul>
      </div>
      <div class="space-y-3">
        <h4 class="font-label-lg text-label-lg uppercase tracking-wider text-primary">Compliance &amp; Memo</h4>
        <p class="font-body-sm text-body-sm text-on-surface-variant">Licensed under AICPA &amp; IRS Circular 230 regulations.</p>
        <div class="pt-2">
          <label class="font-label-mono text-[10px] uppercase text-outline block mb-1.5">Quarterly Executive Tax Memo</label>
          <div class="flex items-center gap-1.5">
            <input class="w-full h-10 px-3 rounded bg-surface-container-low border border-outline-variant text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:border-primary" placeholder="executive@firm.com" type="email"/>
            <button class="h-10 px-3 rounded bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center justify-center" type="button">
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-space-2xl pt-space-md border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-outline">
      <p>© 2026 KMH Advisory LLP. All rights reserved. Sovereign Precision &amp; Fiduciary Governance.</p>
      <div class="flex flex-wrap items-center gap-6">
        <a class="hover:text-on-surface transition-colors" data-path="privacy-policy" href="privacy-policy.html">Privacy Policy</a>
        <a class="hover:text-on-surface transition-colors" data-path="terms-of-service" href="terms-of-service.html">Terms of Service</a>
        <a class="hover:text-on-surface transition-colors" data-path="cookie-preferences" href="cookie-preferences.html">Cookie Preferences</a>
        <a class="hover:text-on-surface transition-colors" data-path="security-architecture" href="security-architecture.html">Security Architecture</a>
      </div>
    </div>
  </div>
</footer>
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
    document.querySelectorAll('footer div.flex.items-center.gap-1\\\\.5').forEach(container => {
      const input = container.querySelector('input[type="email"]');
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
</script>
</body>
</html>
`;
}

module.exports = {
  pathMap,
  getHead,
  getHeader,
  getFooter
};
