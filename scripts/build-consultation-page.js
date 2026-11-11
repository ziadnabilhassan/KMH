const fs = require('fs');
const { getHead, getHeader, getFooter } = require('./template-helpers');

const consultationContent = `
<main class="w-full pt-[116px] bg-surface min-h-[calc(100vh-116px)]">
  <div class="flex flex-col w-full">
    <!-- Ambient ambient glow -->
    <div class="relative w-full overflow-hidden bg-surface-container-lowest py-12 lg:py-20">
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <!-- Breadcrumb & Badge -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-outline-variant/20">
          <nav class="flex items-center gap-2 font-label-mono text-label-mono text-outline uppercase tracking-wider">
            <a class="hover:text-primary transition-colors" data-path="home" href="index.html">Home</a>
            <span class="text-outline-variant">/</span>
            <span class="text-primary font-semibold">Book an Executive Consultation</span>
          </nav>
          <div class="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant">
            <span class="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Chartered Partner Fiduciary Calendar • Direct Booking</span>
          </div>
        </div>

        <!-- Header Title -->
        <div class="pt-8 pb-12 max-w-4xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-primary/20 text-primary font-label-mono text-[11px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-[14px]">lock</span>
            <span>100% Confidential • Mutual NDA Protected</span>
          </div>
          <h1 class="font-headline-lg text-headline-lg lg:text-display-hero text-on-surface font-semibold tracking-tight">
            Schedule a Confidential <span class="text-primary italic font-serif">Diagnostic Consultation</span>
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Direct 30 to 45-minute technical review with a Senior Tax Partner or Practice Lead. We evaluate current exposure, corporate structure efficiency, and multi-jurisdictional compliance before proposing tailored retainer terms.
          </p>
        </div>

        <!-- Booking Layout Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Left Main Booking Form Wizard -->
          <div class="lg:col-span-8 bg-surface-container-low border border-primary/25 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <!-- Step Navigation Tabs -->
            <div class="flex items-center justify-between pb-8 mb-8 border-b border-outline-variant/20">
              <div class="flex items-center gap-3">
                <span id="stepBadge1" class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-mono text-sm font-bold shadow-md">1</span>
                <span class="font-title-md text-title-md text-on-surface font-semibold hidden sm:inline">Advisory Practice</span>
              </div>
              <div class="w-12 h-[1px] bg-outline-variant/40"></div>
              <div class="flex items-center gap-3">
                <span id="stepBadge2" class="w-8 h-8 rounded-full bg-surface-container-high text-outline flex items-center justify-center font-label-mono text-sm font-bold">2</span>
                <span class="font-title-md text-title-md text-outline font-medium hidden sm:inline">Partner &amp; Date</span>
              </div>
              <div class="w-12 h-[1px] bg-outline-variant/40"></div>
              <div class="flex items-center gap-3">
                <span id="stepBadge3" class="w-8 h-8 rounded-full bg-surface-container-high text-outline flex items-center justify-center font-label-mono text-sm font-bold">3</span>
                <span class="font-title-md text-title-md text-outline font-medium hidden sm:inline">Corporate Details</span>
              </div>
            </div>

            <!-- Form -->
            <form id="consultationWizard" onsubmit="submitConsultation(event)" class="space-y-8">
              
              <!-- STEP 1: Practice Selection -->
              <div id="stepSection1" class="space-y-6">
                <div>
                  <h3 class="font-title-lg text-title-lg text-on-surface font-semibold">Select Primary Practice Area</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Specify your core requirement so we assign the appropriate lead specialist.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="practiceSelector">
                  <label class="practice-card p-5 rounded-xl border border-primary/40 bg-surface-container cursor-pointer transition-all hover:border-primary flex items-start gap-4">
                    <input type="radio" name="practice_area" value="tax-consulting" class="mt-1 text-primary focus:ring-primary" checked/>
                    <div>
                      <div class="font-title-md text-title-md text-on-surface font-semibold">Strategic Tax Consulting</div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant mt-1">Restructuring, R&amp;D credits, multi-jurisdiction shelter &amp; treaties.</div>
                    </div>
                  </label>

                  <label class="practice-card p-5 rounded-xl border border-outline-variant/30 bg-surface-container-high cursor-pointer transition-all hover:border-primary flex items-start gap-4">
                    <input type="radio" name="practice_area" value="accounting-cfo" class="mt-1 text-primary focus:ring-primary"/>
                    <div>
                      <div class="font-title-md text-title-md text-on-surface font-semibold">Full-Cycle Accounting &amp; CFO</div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant mt-1">General ledger, T+5 monthly close, GAAP/IFRS board packs.</div>
                    </div>
                  </label>

                  <label class="practice-card p-5 rounded-xl border border-outline-variant/30 bg-surface-container-high cursor-pointer transition-all hover:border-primary flex items-start gap-4">
                    <input type="radio" name="practice_area" value="cross-border-vat" class="mt-1 text-primary focus:ring-primary"/>
                    <div>
                      <div class="font-title-md text-title-md text-on-surface font-semibold">International VAT &amp; Indirect Tax</div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant mt-1">EU OSS/IOSS, UK HMRC, GCC indirect and digital services nexus.</div>
                    </div>
                  </label>

                  <label class="practice-card p-5 rounded-xl border border-outline-variant/30 bg-surface-container-high cursor-pointer transition-all hover:border-primary flex items-start gap-4">
                    <input type="radio" name="practice_area" value="audit-assurance" class="mt-1 text-primary focus:ring-primary"/>
                    <div>
                      <div class="font-title-md text-title-md text-on-surface font-semibold">Assurance &amp; Corporate Formation</div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant mt-1">Statutory audits, Delaware/UK entities, M&amp;A due diligence.</div>
                    </div>
                  </label>
                </div>

                <div class="flex justify-end pt-4">
                  <button type="button" onclick="goToStep(2)" class="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary-container text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary transition-colors">
                    <span>Continue to Partner &amp; Scheduling</span>
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              <!-- STEP 2: Partner & Date -->
              <div id="stepSection2" class="space-y-6 hidden">
                <div>
                  <h3 class="font-title-lg text-title-lg text-on-surface font-semibold">Select Lead Partner &amp; Availability</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Choose a chartered partner to preside over your diagnostic call.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label class="partner-card p-4 rounded-xl border border-primary/40 bg-surface-container cursor-pointer transition-all hover:border-primary flex items-center gap-3">
                    <input type="radio" name="partner_choice" value="julian-vance" checked class="text-primary focus:ring-primary"/>
                    <img class="w-12 h-12 rounded-full object-cover border border-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsUNKtK9Dtn03N1C_JPiduLsBgNy3wuN1E75_Df056XVxL1vsuXHa3ONsQYUd2Uc2sEo_5uLRd2U76PK5vrWMKWUhStJCBjyqXAHXqEzHug5Hibw-uW8Vl6YhD_tMz6CajyPPSDpm1KIIsD5rVbhKEikYLR8PmPPNGZyTanjB6p_IOaGbEfTW083zA9Z8VvycA-O-ga-g2bb8ciUAIuI4FkUeFBIDcrkuyDwm1qYc" alt="Julian Vance"/>
                    <div>
                      <div class="font-title-md text-title-md text-on-surface font-semibold">Julian Vance, CPA, CTA</div>
                      <div class="font-body-sm text-body-sm text-primary">Senior Managing Partner (Global Tax)</div>
                    </div>
                  </label>

                  <label class="partner-card p-4 rounded-xl border border-outline-variant/30 bg-surface-container-high cursor-pointer transition-all hover:border-primary flex items-center gap-3">
                    <input type="radio" name="partner_choice" value="eleanor-sterling" class="text-primary focus:ring-primary"/>
                    <div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold border border-outline-variant/40">
                      ES
                    </div>
                    <div>
                      <div class="font-title-md text-title-md text-on-surface font-semibold">Eleanor Sterling, FCA</div>
                      <div class="font-body-sm text-body-sm text-primary">Head of Assurance &amp; Advisory</div>
                    </div>
                  </label>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div>
                    <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Preferred Session Date *</label>
                    <input id="prefDate" required type="date" class="w-full h-12 px-4 rounded bg-surface-container text-on-surface text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"/>
                  </div>
                  <div>
                    <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Preferred Time Window *</label>
                    <select id="prefTime" class="w-full h-12 px-4 rounded bg-surface-container text-on-surface text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30">
                      <option>10:00 AM – 10:45 AM EST (New York)</option>
                      <option>02:00 PM – 02:45 PM EST (New York)</option>
                      <option>10:00 AM – 10:45 AM GMT (London)</option>
                      <option>03:00 PM – 03:45 PM GST (Dubai)</option>
                    </select>
                  </div>
                </div>

                <div class="flex items-center justify-between pt-4">
                  <button type="button" onclick="goToStep(1)" class="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-surface-container text-outline hover:text-on-surface font-label-lg transition-colors">
                    <span class="material-symbols-outlined text-[18px]">arrow_back</span>
                    <span>Back</span>
                  </button>
                  <button type="button" onclick="goToStep(3)" class="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary-container text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary transition-colors">
                    <span>Continue to Enterprise Information</span>
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              <!-- STEP 3: Corporate Details & Confirmation -->
              <div id="stepSection3" class="space-y-6 hidden">
                <div>
                  <h3 class="font-title-lg text-title-lg text-on-surface font-semibold">Corporate &amp; Contact Credentials</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">All fields are governed by strict mutual non-disclosure and IRS Circular 230.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Executive Full Name *</label>
                    <input required id="execName" type="text" placeholder="e.g. Richard Sterling" class="w-full h-12 px-4 rounded bg-surface-container text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"/>
                  </div>
                  <div>
                    <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Corporate Email Address *</label>
                    <input required id="execEmail" type="email" placeholder="r.sterling@enterprise.com" class="w-full h-12 px-4 rounded bg-surface-container text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"/>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Enterprise / Group Entity Name *</label>
                    <input required id="execCompany" type="text" placeholder="e.g. Sterling Global Ltd" class="w-full h-12 px-4 rounded bg-surface-container text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"/>
                  </div>
                  <div>
                    <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Annual Corporate Turnover / Assets</label>
                    <select id="execRevenue" class="w-full h-12 px-4 rounded bg-surface-container text-on-surface text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30">
                      <option>$5M – $25M ARR</option>
                      <option>$25M – $100M ARR</option>
                      <option>$100M – $500M+ Enterprise</option>
                      <option>Single / Multi-Family Office ($50M+ Liquid)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Scope Briefing &amp; Key Jurisdictions</label>
                  <textarea id="execNotes" rows="3" placeholder="Describe current challenges (e.g. Series C cross-border entity setup, upcoming IRS/state inquiry, or UK-US double taxation)..." class="w-full p-4 rounded bg-surface-container text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"></textarea>
                </div>

                <!-- NDA agreement box -->
                <div class="p-4 rounded-xl bg-surface-container border border-primary/20 flex items-start gap-3">
                  <input type="checkbox" id="ndaCheck" checked required class="mt-1 text-primary focus:ring-primary"/>
                  <label for="ndaCheck" class="font-body-sm text-body-sm text-on-surface-variant cursor-pointer">
                    <span class="text-on-surface font-semibold">Mutual Non-Disclosure Agreement:</span> I acknowledge that all disclosures made during this consultation are strictly confidential, protected under formal mutual NDA and fiduciary privilege.
                  </label>
                </div>

                <div class="flex items-center justify-between pt-4">
                  <button type="button" onclick="goToStep(2)" class="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-surface-container text-outline hover:text-on-surface font-label-lg transition-colors">
                    <span class="material-symbols-outlined text-[18px]">arrow_back</span>
                    <span>Back</span>
                  </button>
                  <button type="submit" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-xl hover:bg-primary-fixed transition-all">
                    <span class="material-symbols-outlined text-[20px]">verified</span>
                    <span>Confirm Consultation Request</span>
                  </button>
                </div>
              </div>
            </form>

            <!-- Success Confirmation State (Hidden initially) -->
            <div id="bookingConfirmation" class="hidden py-10 text-center space-y-6">
              <div class="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto ring-8 ring-primary/10">
                <span class="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <div class="space-y-2">
                <span class="font-label-mono text-label-mono text-primary uppercase tracking-widest">Consultation Confirmed</span>
                <h2 class="font-headline-md text-headline-md text-on-surface font-semibold">Advisory Mandate Received</h2>
                <p id="confirmSummary" class="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                  Thank you. Your diagnostic session has been logged in our partner schedule. An encrypted calendar invite and mutual NDA agreement have been dispatched to your corporate email.
                </p>
              </div>

              <div class="p-6 rounded-xl bg-surface-container max-w-lg mx-auto text-left border border-outline-variant/30 space-y-3 font-body-sm text-body-sm">
                <div class="flex justify-between pb-2 border-b border-outline-variant/20">
                  <span class="text-outline">Assigned Lead:</span>
                  <span class="text-on-surface font-medium" id="confirmPartner">Julian Vance, CPA, CTA</span>
                </div>
                <div class="flex justify-between pb-2 border-b border-outline-variant/20">
                  <span class="text-outline">Session Slot:</span>
                  <span class="text-primary font-medium" id="confirmTime">Scheduled for Next Business Day</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-outline">Security Protocol:</span>
                  <span class="text-on-surface font-medium">AES-256 Zoom / Direct Teleconference</span>
                </div>
              </div>

              <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="index.html" class="inline-flex items-center gap-2 px-6 py-3 rounded bg-surface-container-high text-on-surface font-label-lg hover:bg-surface-bright transition-colors">
                  <span class="material-symbols-outlined text-[18px]">home</span>
                  <span>Return to Homepage</span>
                </a>
                <a href="tel:+18008427900" class="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary-container text-on-primary font-label-lg font-bold hover:bg-primary transition-colors">
                  <span class="material-symbols-outlined text-[18px]">call</span>
                  <span>Direct Partner Line: +1 (800) 842-7900</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Information & Fiduciary Guarantee Sidebar -->
          <div class="lg:col-span-4 space-y-6">
            <!-- Trust Card -->
            <div class="p-6 rounded-xl bg-surface-container-low border border-primary-container/20 shadow-xl space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
                <div>
                  <div class="font-title-md text-title-md text-on-surface font-semibold">Institutional Fiduciary</div>
                  <div class="font-body-sm text-body-sm text-outline">AICPA &amp; IRS Circular 230 Compliant</div>
                </div>
              </div>
              <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                KMH adheres to the highest statutory standards of legal confidentiality. Your disclosures and financial records remain strictly within private partner chambers.
              </p>
              <div class="space-y-2.5 pt-2 border-t border-outline-variant/20 font-body-sm text-body-sm text-on-surface">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-[18px]">check</span>
                  <span>Zero-cost exploratory diagnosis</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-[18px]">check</span>
                  <span>Direct equity partner attendance</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-[18px]">check</span>
                  <span>24-Hour response SLA</span>
                </div>
              </div>
            </div>

            <!-- Global Offices Card -->
            <div class="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-md space-y-4">
              <h3 class="font-title-md text-title-md text-on-surface font-semibold">Immediate Partner Access</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">For urgent statutory filings or impending audit deadlines, contact our executive desks directly:</p>
              
              <div class="space-y-3 font-body-sm text-body-sm pt-2">
                <div class="p-3 rounded bg-surface-container flex items-center justify-between">
                  <div>
                    <span class="text-on-surface font-medium block">New York Desk</span>
                    <span class="text-outline text-[12px]">450 Lexington Ave</span>
                  </div>
                  <a href="tel:+18008427900" class="text-primary font-label-mono text-[12px] hover:underline">+1 (800) 842-7900</a>
                </div>

                <div class="p-3 rounded bg-surface-container flex items-center justify-between">
                  <div>
                    <span class="text-on-surface font-medium block">London Desk</span>
                    <span class="text-outline text-[12px]">1 St. Mary Axe</span>
                  </div>
                  <a href="tel:+442079460912" class="text-primary font-label-mono text-[12px] hover:underline">+44 20 7946 0912</a>
                </div>

                <div class="p-3 rounded bg-surface-container flex items-center justify-between">
                  <div>
                    <span class="text-on-surface font-medium block">Zurich Desk</span>
                    <span class="text-outline text-[12px]">Bahnhofstrasse 45</span>
                  </div>
                  <a href="tel:+41446681800" class="text-primary font-label-mono text-[12px] hover:underline">+41 44 668 1800</a>
                </div>
              </div>
            </div>

            <!-- Preparation Checklist -->
            <div class="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/20 space-y-3">
              <span class="font-label-mono text-[10px] uppercase text-outline tracking-wider block">Recommended Preparation</span>
              <div class="font-title-md text-title-md text-on-surface font-medium">What to Bring to the Session:</div>
              <ul class="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">•</span>
                  <span>Prior 2-3 years of corporate tax returns (1120 / 1065 / statutory accounts)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">•</span>
                  <span>Most recent unadjusted trial balance or P&amp;L summary</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">•</span>
                  <span>Corporate entity organization chart (if multi-jurisdiction)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<script>
  function goToStep(step) {
    const s1 = document.getElementById('stepSection1');
    const s2 = document.getElementById('stepSection2');
    const s3 = document.getElementById('stepSection3');

    const b1 = document.getElementById('stepBadge1');
    const b2 = document.getElementById('stepBadge2');
    const b3 = document.getElementById('stepBadge3');

    s1.classList.add('hidden');
    s2.classList.add('hidden');
    s3.classList.add('hidden');

    // Reset badges
    [b1, b2, b3].forEach(b => {
      b.className = 'w-8 h-8 rounded-full bg-surface-container-high text-outline flex items-center justify-center font-label-mono text-sm font-bold';
    });

    if (step === 1) {
      s1.classList.remove('hidden');
      b1.className = 'w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-mono text-sm font-bold shadow-md';
    } else if (step === 2) {
      s2.classList.remove('hidden');
      b1.className = 'w-8 h-8 rounded-full bg-primary/40 text-on-primary flex items-center justify-center font-label-mono text-sm font-bold';
      b2.className = 'w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-mono text-sm font-bold shadow-md';
      
      // Auto set date to tomorrow if empty
      const dInput = document.getElementById('prefDate');
      if (!dInput.value) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dInput.value = tomorrow.toISOString().split('T')[0];
      }
    } else if (step === 3) {
      s3.classList.remove('hidden');
      b1.className = 'w-8 h-8 rounded-full bg-primary/40 text-on-primary flex items-center justify-center font-label-mono text-sm font-bold';
      b2.className = 'w-8 h-8 rounded-full bg-primary/40 text-on-primary flex items-center justify-center font-label-mono text-sm font-bold';
      b3.className = 'w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-mono text-sm font-bold shadow-md';
    }
  }

  function submitConsultation(event) {
    event.preventDefault();
    const name = document.getElementById('execName').value;
    const email = document.getElementById('execEmail').value;
    const company = document.getElementById('execCompany').value;
    const date = document.getElementById('prefDate').value || 'Upcoming Business Day';
    const time = document.getElementById('prefTime').value;

    const wizard = document.getElementById('consultationWizard');
    const confirmation = document.getElementById('bookingConfirmation');

    wizard.classList.add('hidden');
    confirmation.classList.remove('hidden');

    document.getElementById('confirmSummary').textContent = 
      'Mandate received for ' + name + ' representing ' + company + '. A formal confirmation and encrypted teleconference dossier have been dispatched to ' + email + '.';
    document.getElementById('confirmTime').textContent = date + ' at ' + time;
  }
</script>
`;

const fullHtml = getHead('Book an Executive Consultation') + getHeader('book-a-consultation') + consultationContent + getFooter();
fs.writeFileSync('book-a-consultation.html', fullHtml, 'utf8');
console.log('Successfully generated book-a-consultation.html!');
