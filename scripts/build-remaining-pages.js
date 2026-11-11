const fs = require('fs');
const { getHead, getHeader, getFooter } = require('./template-helpers');

const pages = [
  {
    key: 'accounting-and-bookkeeping',
    title: 'Accounting & Corporate Bookkeeping',
    subtitle: 'Full-Cycle Institutional General Ledger & T+5 Close Cadence',
    badge: 'Foundation Control',
    icon: 'analytics',
    description: 'Clean, audit-ready General Ledgers engineered under US GAAP and IFRS framework standards to empower high-stakes decisions and board presentations.',
    stat1: { num: 'T+5', label: 'Average Close Time', desc: 'Accelerated month-end reconciliation and partner-reviewed balance signoff.' },
    stat2: { num: '$1.4B+', label: 'Reconciled Monthly', desc: 'Multi-currency corporate ledger volume across 34 currencies.' },
    pills: ['US GAAP & IFRS', 'ERP Synchronization', 'Two-Tier Authorization', 'Bank-Grade Vault'],
    sections: [
      {
        title: 'Full-Cycle Daily Bookkeeping & Ledger Maintenance',
        desc: 'Continuous bank transaction ingestion, accounts payable (AP) automation with two-tier partner authorization, and aged accounts receivable (AR) recovery governance.',
        bullets: ['Automated daily feeds for NetSuite, QuickBooks Online Advanced, and Xero', 'Rigorous separation of financial duties ensuring internal control compliance', 'Real-time multi-currency reconciliations and foreign exchange variance tracking']
      },
      {
        title: 'GAAP & IFRS Compliant Financial Reporting Packs',
        desc: 'Monthly and quarterly board decks, trial balance schedules, cash burn forecasts, and debt covenant compliance certificates formatted for institutional lenders.',
        bullets: ['Standardized P&L, Balance Sheet, and Statement of Cash Flows', 'Revenue recognition under ASC 606 & IFRS 15 for subscription and recurring models', 'Segment reporting for multi-entity and international subsidiary structures']
      },
      {
        title: 'Fractional CFO Leadership & Board Representation',
        desc: 'Senior financial leadership for Series A through D ventures and mid-market enterprises navigating capital raises, bank covenants, and liquidity stress-testing.',
        bullets: ['13-Week rolling cash flow forecasting and runway optimization', 'Board meeting preparation and direct investor presentation participation', 'Unit economic benchmarking and pricing sensitivity modeling']
      }
    ]
  },
  {
    key: 'tax-returns-and-filing',
    title: 'Tax Returns & Multi-Jurisdictional Filing',
    subtitle: 'Certified Federal, 50-State & Cross-Border Statutory Filing',
    badge: 'Compliance & Filings',
    icon: 'description',
    description: 'Certified preparation of Forms 1120, 1065, 5471, and 5472. Multi-state apportionment audits to defend against state nexus overreach and eliminate duplicate state taxation.',
    stat1: { num: '99.8%', label: 'Clean Clearance Rate', desc: 'Statutory scrutiny clearance across IRS and 50 state tax authorities.' },
    stat2: { num: '10 Days', label: 'Expedited Filing SLA', desc: 'Fast-track compilation of complex multi-tier entity tax submissions.' },
    pills: ['IRC §351 & §965', 'Forms 5471 & 5472', 'Multi-State Apportionment', '100% Circular 230'],
    sections: [
      {
        title: 'Federal Corporate & Partnership Returns',
        desc: 'Preparation of Form 1120 (C-Corporations), Form 1120-S (S-Corporations), and Form 1065 (Partnerships and LLCs) with forensic balance-to-tax reconciliations.',
        bullets: ['Schedule M-1 / M-3 book-tax timing adjustments and permanent differences', 'Section 174 R&D expenditure amortization and Section 163(j) interest capping', 'Qualified Small Business Stock (QSBS §1202) exclusion optimization']
      },
      {
        title: 'Multi-State Apportionment & Nexus Audits',
        desc: 'Defending enterprises with remote workforces and distributed sales channels against aggressive state revenue department nexus claims and double taxation.',
        bullets: ['Wayfair economic nexus sales threshold analysis across all 50 states', 'Payroll and property factor apportionment optimization', 'State Pass-Through Entity Tax (PTET) elections to bypass federal SALT caps']
      },
      {
        title: 'International Information Returns (5471 / 5472)',
        desc: 'Mandatory foreign reporting for US entities with 25%+ foreign ownership and US shareholders of Controlled Foreign Corporations (CFCs).',
        bullets: ['GILTI (Global Intangible Low-Taxed Income) calculation and Form 8992', 'FDII (Foreign-Derived Intangible Income) deductions under §250', 'FBAR (FinCEN 114) and FATCA (Form 8938) annual asset disclosures']
      }
    ]
  },
  {
    key: 'vat-services',
    title: 'VAT & Global Indirect Tax Advisory',
    subtitle: 'Navigating EU OSS, UK HMRC & GCC Cross-Border Tax Regimes',
    badge: 'Cross-Border Indirect',
    icon: 'globe',
    description: 'Specialized indirect tax compliance, automated cross-border sales tax calculation, and fiscal representation for SaaS, digital marketplaces, and international trade.',
    stat1: { num: '42', label: 'Jurisdictions Managed', desc: 'Active indirect tax registrations spanning EU, UK, GCC, and APAC.' },
    stat2: { num: '100%', label: 'OSS/IOSS Precision', desc: 'Automated digital service VAT routing under single-point registrations.' },
    pills: ['EU One-Stop-Shop (OSS)', 'UK HMRC Digital Tax', 'GCC 5-15% VAT', 'Reverse-Charge Optimization'],
    sections: [
      {
        title: 'EU One-Stop Shop (OSS) & IOSS Architecture',
        desc: 'Single-point electronic registration and quarterly VAT reporting for business-to-consumer digital services and distance sales throughout the 27 EU member states.',
        bullets: ['Elimination of localized VAT registrations across individual European countries', 'Automated destination-based rate determination engines', 'Import One-Stop Shop (IOSS) for physical goods under €150 consignment values']
      },
      {
        title: 'UK VAT & HMRC Making Tax Digital (MTD)',
        desc: 'Direct corporate VAT registration, quarterly electronic submissions, and reverse-charge accounting for cross-border software agreements and professional services.',
        bullets: ['Full compliance with UK Making Tax Digital (MTD) digital links mandates', 'Partial exemption calculations for financial institutions and exempt supplies', 'Place of supply determination for intellectual property and advisory services']
      },
      {
        title: 'UAE & Saudi Arabian (GCC) Indirect Tax Systems',
        desc: 'Value-added tax structuring for holding entities, free zones, and mainland companies operating in Dubai, Abu Dhabi, and Riyadh.',
        bullets: ['Qualifying Free Zone Person (QFZP) 0% corporate and VAT status validation', 'Zakat, Tax and Customs Authority (ZATCA) phase 2 e-invoicing integration', 'Designated Zone intercompany transfer relief and customs reconciliation']
      }
    ]
  },
  {
    key: 'auditing-and-assurance',
    title: 'Auditing & Statutory Assurance',
    subtitle: 'Rigorous Independent Verification & SOC Attestation Readiness',
    badge: 'Assurance & Governance',
    icon: 'fact_check',
    description: 'Rigorous independent examinations, review opinions, and agreed-upon procedures (AUP) tailored to satisfy venture capital boards, commercial credit lines, and regulatory watchdogs.',
    stat1: { num: 'AICPA', label: 'Peer Reviewed', desc: 'Adhering to US GAAS and International Standards on Auditing (ISA).' },
    stat2: { num: 'Zero', label: 'Material Variances', desc: 'Proven track record of defensible audit workpapers across Tier-1 institutions.' },
    pills: ['Statutory US GAAS', 'ISA International Audits', 'SOC 1 & SOC 2 Readiness', 'Forensic Fraud Investigation'],
    sections: [
      {
        title: 'Independent Statutory Financial Statement Audits',
        desc: 'Rigorous examination of financial statements, balance confirmations, and notes to provide an unqualified audit opinion for lenders, investors, and regulators.',
        bullets: ['Full compliance with US GAAS and International Standards on Auditing (ISA)', 'Substantive testing, analytical review procedures, and internal control scrutiny', 'Formal Management Letter highlighting operational risk improvements']
      },
      {
        title: 'SOC 1 & SOC 2 Attestation Readiness',
        desc: 'Preparing high-growth technology, FinTech, and cloud platforms for successful System and Organization Controls (SOC) type I and II examinations.',
        bullets: ['Control gap assessments against AICPA Trust Services Criteria', 'Remediation of segregation of duties, change management, and security controls', 'Liaison with accredited external SOC service auditors to streamline testing']
      },
      {
        title: 'Internal Controls & Forensic Examination',
        desc: 'Specialized fraud risk mitigation, COSO framework implementations, transaction discrepancy audits, and pre-IPO Sarbanes-Oxley (SOX 404) preparedness.',
        bullets: ['Independent tracing of disputed capital flows and vendor disbursements', 'Whistleblower allegation investigations and digital forensic analysis', 'Design and implementation of anti-fraud control matrices']
      }
    ]
  },
  {
    key: 'payroll-solutions',
    title: 'Executive Payroll & Global Mobility',
    subtitle: 'Multijurisdictional Executive Compensation & Tax Withholding',
    badge: 'Human Capital',
    icon: 'badge',
    description: 'Multi-state nexus compliance, automated state tax registration, equity compensation withholding (ISOs, NSOs, RSUs), and foreign contractor remittance management.',
    stat1: { num: '50 States', label: 'Domestic Coverage', desc: 'Automated state withholding registrations and local payroll tax filings.' },
    stat2: { num: '$280M+', label: 'Annual Payroll Volume', desc: 'Disbursed accurately with automated executive equalization schedules.' },
    pills: ['Section 83(b) Tracking', 'RSU & ISO Withholding', 'Shadow Payrolls', 'Expatriate Equalization'],
    sections: [
      {
        title: 'Executive & Equity Incentive Payroll Architecture',
        desc: 'Structuring complex compensation packages including non-qualified stock options (NSOs), incentive stock options (ISOs), restricted stock units (RSUs), and profits interests.',
        bullets: ['Section 83(b) timely election substantiation and taxable event tracking', 'Supplemental wage tax rate withholding optimization to prevent underpayment penalties', 'Deferred compensation compliance under IRC Section 409A']
      },
      {
        title: 'Multi-State Employee Tax Withholding & Registration',
        desc: 'Managing remote workforce compliance across multiple state tax departments, state unemployment insurance (SUI), and municipal payroll taxes.',
        bullets: ['Automated state tax account registration upon hiring in new jurisdictions', 'Reciprocity agreement utilization between adjacent states', 'Year-end Form W-2 / 1099-NEC consolidation and multi-state filing']
      },
      {
        title: 'Global Mobility & Expatriate Shadow Payrolls',
        desc: 'Cross-border assignments, tax equalization agreements, and shadow payroll execution for executives operating between the US, UK, Switzerland, and UAE.',
        bullets: ['Coordination of foreign social security totalization agreements', 'Bilateral tax treaty treaty claims reducing host country withholding tax', 'Dual-country tax return preparation and foreign tax credit balancing']
      }
    ]
  },
  {
    key: 'company-formation',
    title: 'Company Formation & Structuring',
    subtitle: 'Optimal Multi-Jurisdiction Legal & Tax Architecture',
    badge: 'Entity Architecture',
    icon: 'corporate_fare',
    description: 'Precision incorporation across Delaware C-Corps, statutory holding vehicles, UAE Free Zones, and European parent-subsidiary structures including registered agent and banking setup.',
    stat1: { num: '3-7 Days', label: 'Incorporation Speed', desc: 'Rapid expedited corporate formation with complete statutory register.' },
    stat2: { num: '4 Hubs', label: 'Direct Registration', desc: 'Dedicated corporate secretarial desks in DE, London, Zurich, and Dubai.' },
    pills: ['Delaware C-Corp', 'UK Holdings PLC', 'DIFC / ADGM SPVs', 'Swiss Sàrl / SA'],
    sections: [
      {
        title: 'Delaware C-Corporation & Multi-Tier Entity Formation',
        desc: 'The gold standard for venture-backed startups and multinational expansion. Structured to meet VC standards and maximize future tax-free exit benefits.',
        bullets: ['Bespoke Certificate of Incorporation with authorized preferred stock series', 'Drafting of Bylaws, Initial Board Consents, and Action of Incorporator', 'Expedited Federal Employer Identification Number (EIN) acquisition for foreign principals']
      },
      {
        title: 'Holding Company & Intellectual Property (IP) Structuring',
        desc: 'Isolating operational commercial liabilities from core corporate assets, trademarks, software patents, and retained earnings through holding company overlays.',
        bullets: ['Parent-subsidiary dividend optimization avoiding double state or federal taxation', 'Transfer pricing license agreements aligned with arm’s length principles', 'Tax-free Section 351 contributions and asset transfer documentation']
      },
      {
        title: 'Cross-Border Entity Expansion (UK, Switzerland, UAE)',
        desc: 'Turnkey foreign corporate branches, Special Purpose Vehicles (SPVs), and free-zone subsidiaries across London, Zurich, and Dubai financial centers.',
        bullets: ['UK Companies House incorporation and registered office service', 'Dubai International Financial Centre (DIFC) and ADGM commercial licenses', 'Swiss AG/GmbH formation with statutory local director representation']
      }
    ]
  },
  {
    key: 'financial-advisory',
    title: 'Financial Advisory & Transaction Diligence',
    subtitle: 'M&A Diligence, Quality of Earnings (QoE) & Enterprise Valuation',
    badge: 'Strategic Corporate Finance',
    icon: 'query_stats',
    description: 'Strategic capital allocation, forward run-rate modeling, enterprise valuation analysis, and representation during Series A-D capital raising and investor due diligence.',
    stat1: { num: '$2.1B+', label: 'Transaction Value', desc: 'Advised on buy-side and sell-side institutional M&A transactions.' },
    stat2: { num: 'QoE', label: 'Rigorous Verification', desc: 'Comprehensive Quality of Earnings reports identifying EBITDA leakage.' },
    pills: ['Buy/Sell Side Due Diligence', 'Quality of Earnings (QoE)', 'IRC §382 NOL Preservations', '409A Valuations'],
    sections: [
      {
        title: 'Buy-Side & Sell-Side M&A Due Diligence',
        desc: 'Pre-acquisition financial and tax investigations uncovering hidden liabilities, unsustainable revenue recognition practices, and unrecorded balance sheet debt.',
        bullets: ['Comprehensive Quality of Earnings (QoE) analytical reports', 'Working capital target negotiation and closing balance adjustment mechanisms', 'Section 382 Net Operating Loss (NOL) limitation and preservation modeling']
      },
      {
        title: 'Corporate Valuation & Section 409A Reports',
        desc: 'Audit-defensible independent valuations of equity, intellectual property, and minority interests for compliance with tax authorities and audit boards.',
        bullets: ['Section 409A common stock valuations for equity incentive option grants', 'ASC 805 purchase price allocations (PPA) and intangible asset valuation', 'Gift and estate tax valuations supporting generational family wealth transfers']
      },
      {
        title: 'Capital Raising & Debt Covenant Modeling',
        desc: 'Institutional financial modeling for enterprise clients securing venture debt, mezzanine financing, or syndicated bank credit lines.',
        bullets: ['Dynamic multi-scenario 3-statement financial models with sensitivity tables', 'Debt service coverage ratio (DSCR) and liquidity covenant monitoring', 'Direct board representation and capital committee strategic guidance']
      }
    ]
  },
  {
    key: 'about-us',
    title: 'About KMH Advisory & Tax Consulting',
    subtitle: 'Institutional Rigor. Private Client Discretion. Sovereign Precision.',
    badge: 'Our Fiduciary Heritage',
    icon: 'account_balance',
    description: 'Founded by former Big-4 partners and Treasury advisors, KMH delivers sovereign-grade accounting, proactive tax architecture, and independent assurance to multinational enterprises and high-asset families worldwide.',
    stat1: { num: '25+ Yrs', label: 'Senior Experience', desc: 'Decades of continuous leadership in international wealth and corporate finance.' },
    stat2: { num: '$4.2B+', label: 'Regulated Assets', desc: 'Overseen under institutional auditing and tier-1 domestic & global tax advisory.' },
    pills: ['AICPA Peer Reviewed', 'ACCA Registered', 'IRS Circular 230', 'ISO 27001 Certified'],
    sections: [
      {
        title: 'The KMH Benchmark: 100% Partner-Led Oversight',
        desc: 'Conventional accounting firms delegate complex corporate files to junior associates. At KMH, every client mandate is directly managed by equity partners with extensive track records in statutory tax and financial architecture.',
        bullets: ['Direct communication with lead partners, never buffered through junior coordinators', 'Bespoke tactical blueprints designed for your exact organizational and jurisdictional scope', 'Unflinching fiduciary dedication to capital preservation and legal tax optimization']
      },
      {
        title: 'Institutional Credentials & Global Regulatory Mastery',
        desc: 'Our chartered practitioners are dually qualified across the United States, United Kingdom, and European regulatory boards, providing seamless multinational command.',
        bullets: ['Licensed CPAs (Certified Public Accountants) and CTAs (Chartered Tax Advisers)', 'AICPA peer-reviewed firm adhering to US GAAS and PCAOB auditing standards', 'Full Circular 230 authorization for formal administrative defense before the IRS']
      },
      {
        title: 'Global Presence Across Premier Financial Capitals',
        desc: 'Strategic physical offices in New York, London, Zurich, and Dubai enable 24-hour synchronized operational execution for cross-border holding structures.',
        bullets: ['New York HQ: Midtown Manhattan corporate finance and federal tax chambers', 'London Office: UK Companies House and HMRC international indirect tax hub', 'Zurich & Dubai: European private wealth, trust structuring, and GCC holding advisory']
      }
    ]
  },
  {
    key: 'industries',
    title: 'Industries We Serve',
    subtitle: 'Specialized Accounting Architecture for High-Asset Complexity',
    badge: 'Sector Mastery',
    icon: 'domain',
    description: 'Generic accounting fails when applied to specialized sectors. We engineer custom statutory accounting and tax frameworks tailored to the unique economic rhythms of complex industries.',
    stat1: { num: '6 Sectors', label: 'Dedicated Practices', desc: 'Bespoke teams with deep domain expertise in private equity, tech, and wealth.' },
    stat2: { num: '1,400+', label: 'Corporate Retainers', desc: 'Active mandates spanning 34 jurisdictions across high-stakes industries.' },
    pills: ['Private Equity & VC', 'Real Estate & REITs', 'SaaS & E-Commerce', 'Family Offices & UHNW', 'Biotech', 'Cross-Border'],
    sections: [
      {
        title: 'Private Equity, Venture Capital & Asset Managers',
        desc: 'Waterfall distribution tracking, carried interest tax minimization, LP capital call accounting, and portfolio company audit coordination under SEC scrutiny.',
        bullets: ['Fund-level tax returns (Form 1065) and Schedule K-1 electronic generation', 'Qualified Small Business Stock (QSBS §1202) strategy for fund principals', 'Side-car investment vehicles and management company structuring']
      },
      {
        title: 'Real Estate Holdings, Syndications & REITs',
        desc: 'Section 1031 like-kind exchange coordination, cost segregation studies, multi-property syndication taxation, and institutional depreciation schedules.',
        bullets: ['Accelerated bonus depreciation on qualified improvement property (QIP)', 'FIRPTA (Foreign Investment in Real Property Tax Act) withholding clearance', 'Pass-through entity tax deductions and debt allocation tracking (§752)']
      },
      {
        title: 'SaaS, Technology & Cross-Border E-Commerce',
        desc: 'ASC 606 revenue recognition for recurring subscriptions, multi-jurisdiction sales tax nexus automation, and international transfer pricing for software IP.',
        bullets: ['Software development cost capitalization under IRC Section 174', 'R&D tax credits monetization under Section 41 across state and federal levels', 'EU One-Stop-Shop (OSS) digital VAT registration and automated reporting']
      }
    ]
  },
  {
    key: 'resources',
    title: 'Executive Briefings & Tax Research',
    subtitle: 'Proprietary Fiduciary Intelligence, Calculators & Regulatory Alerts',
    badge: 'Research & Intelligence',
    icon: 'menu_book',
    description: 'Actionable statutory analysis, tax reform memorandums, and empirical white papers published quarterly by KMH senior partners for enterprise CFOs and family office principals.',
    stat1: { num: 'Quarterly', label: 'Executive Memo', desc: 'Comprehensive regulatory breakdown sent directly to 5,000+ C-level subscribers.' },
    stat2: { num: '100% Free', label: 'Client Whitepapers', desc: 'Authoritative guidance on CAMT, Pillar Two, transfer pricing, and R&D rules.' },
    pills: ['Corporate Alternative Min Tax', 'OECD Pillar Two', 'BEPS 2.0 Compliance', 'Section 174 Amortization'],
    sections: [
      {
        title: 'Quarterly Executive Tax Memo: FY26 Regulatory Outlook',
        desc: 'Deep-dive analysis of upcoming Treasury regulations, state nexus law tightening, and international minimum tax thresholds affecting mid-market corporations.',
        bullets: ['Navigating adjusted financial statement income calculations under CAMT', 'State-by-state Pass-Through Entity Tax (PTET) election deadlines', 'OECD Pillar Two implementation timelines across UK and European subsidiaries']
      },
      {
        title: 'White Paper: Cross-Border Transfer Pricing Benchmarking',
        desc: 'A comprehensive playbook for enterprise scale-ups expanding engineering and sales subsidiaries across the US, UK, and European Union.',
        bullets: ['Establishing defensible arm’s-length IP licensing royalty ranges', 'Master File and Local File statutory documentation requirements', 'Mitigating double taxation risks under bilateral mutual agreement procedures (MAP)']
      },
      {
        title: 'Research Dossier: Section 41 R&D Credit Audit Substantiation',
        desc: 'Empirical methodologies for substantiating software engineering hours, contractor expenses, and cloud server costs to survive IRS examination with zero clawbacks.',
        bullets: ['The 4-part test for qualified research activities (QRA)', 'Contemporaneous tracking protocols that eliminate retrospective audit scrutiny', 'Maximizing state-level piggyback credits across California, New York, and Massachusetts']
      }
    ]
  },
  {
    key: 'contact-us',
    title: 'Contact Our Partner Chambers',
    subtitle: 'Direct Lines to Senior Partners Across New York, London, Zurich & Dubai',
    badge: 'Global Headquarters',
    icon: 'call',
    description: 'Whether you require an urgent audit defense consultation, a multi-jurisdiction corporate restructuring review, or ongoing institutional bookkeeping, our senior partners are available under strict confidentiality.',
    stat1: { num: '4 Offices', label: 'Global Presence', desc: 'Direct partner chambers in the world’s leading financial centers.' },
    stat2: { num: '< 4 Hours', label: 'Response Guarantee', desc: 'Priority turnaround for all qualified corporate and family office inquiries.' },
    pills: ['New York Desk', 'London Office', 'Zurich Chamber', 'Dubai DIFC'],
    sections: [
      {
        title: 'New York Headquarters (US Corporate & Federal Tax)',
        desc: '450 Lexington Ave, 38th Floor, New York, NY 10017\nDirect Telephone: +1 (800) 842-7900\nManaging Partner: Julian Vance, CPA, CTA\nEmail: newyork@kmhadvisory.com',
        bullets: ['Federal & 50-State Corporate Filings', 'Institutional GAAP Bookkeeping & Fractional CFO', 'IRS Circular 230 Audit Representation']
      },
      {
        title: 'London Desk (UK & European Advisory)',
        desc: '1 St. Mary Axe, The City, London EC3A 8EP\nDirect Telephone: +44 20 7946 0912\nPractice Lead: Eleanor Sterling, FCA\nEmail: london@kmhadvisory.com',
        bullets: ['HMRC Corporate Tax & Digital VAT Compliance', 'Statutory UK GAAS & International ISA Audits', 'US-UK Double Tax Treaty Structuring']
      },
      {
        title: 'Zurich & Dubai Chambers (Private Wealth & GCC Expansion)',
        desc: 'Zurich: Bahnhofstrasse 45, 8001 Zürich, Switzerland | +41 44 668 1800\nDubai: DIFC Gate Precinct 4, Level 6, Dubai, UAE | +971 4 312 8800\nEmail: global@kmhadvisory.com',
        bullets: ['Multinational Trust & Family Office Fiduciary Services', 'UAE Free Zone 0% Corporate Tax Architecture', 'Cross-Border Real Estate & Succession Defense']
      }
    ]
  },
  {
    key: 'client-portal-login',
    title: 'KMH Institutional Client Portal',
    subtitle: 'AES-256 Air-Gapped Document Vault & Real-Time Financial Ledger Feeds',
    badge: 'Secure Access Protocol',
    icon: 'lock',
    description: 'Encrypted, multi-factor authenticated client portal providing secure access to audit workpapers, filed tax returns, general ledgers, and partner communications.',
    stat1: { num: 'SOC-2', label: 'Type II Certified', desc: 'Continuous compliance monitoring ensuring enterprise-grade data security.' },
    stat2: { num: '256-Bit', label: 'Hardware Encryption', desc: 'Zero-knowledge encrypted client vaults with biometric and FIDO2 MFA.' },
    pills: ['End-to-End Encrypted', 'FIDO2 MFA Protected', 'Audit Log Trail', 'ISO 27001 Validated'],
    sections: [
      {
        title: 'Authorized Client Portal Sign-In',
        desc: 'Enter your credentials below to access your secure client repository:',
        bullets: [
          'Direct access to signed tax filings (Forms 1120, 1065, 5471)',
          'Live synchronization with NetSuite, Xero, and corporate bank feeds',
          'Encrypted document dropzone for confidential corporate disclosures'
        ]
      }
    ]
  },
  {
    key: 'privacy-policy',
    title: 'Privacy Policy & Fiduciary Data Governance',
    subtitle: 'Commitment to Absolute Client Confidentiality and Data Protection',
    badge: 'Legal & Compliance',
    icon: 'policy',
    description: 'KMH Advisory LLP is committed to protecting client data under strict professional secrecy, attorney-client privilege frameworks, AICPA Code of Conduct, and global data privacy standards (GDPR, CCPA, SOC-2).',
    stat1: { num: '100%', label: 'Confidentiality', desc: 'Zero data monetization or third-party marketing disclosure.' },
    stat2: { num: 'GDPR / CCPA', label: 'Compliant Architecture', desc: 'Strict data residency and right-to-erasure protocols.' },
    pills: ['AICPA Rule 301', 'IRS Section 7216', 'GDPR Article 28', 'SOC-2 Type II'],
    sections: [
      {
        title: '1. Professional Secrecy & Statutory Privilege',
        desc: 'As licensed Certified Public Accountants and Chartered Tax Advisers, our partners and associates are bound by statutory confidentiality duties under IRC Section 7525, Circular 230, and AICPA Code of Professional Conduct Rule 301.',
        bullets: ['Non-disclosure of any client tax or financial data without written consent', 'Strict physical and digital air-gapping of client workpapers', 'Legal defense against unauthorized civil subpoenas targeting confidential client files']
      },
      {
        title: '2. Data Collection, Encryption & Retention',
        desc: 'We collect only financial, corporate, and identifying data strictly necessary to fulfill statutory tax, accounting, and consulting engagements.',
        bullets: ['All data encrypted in transit (TLS 1.3) and at rest (AES-256)', 'Multi-factor authentication required for all team and client repository access', 'Mandatory 7-year statutory archive retention followed by certified cryptographical shredding']
      }
    ]
  },
  {
    key: 'terms-of-service',
    title: 'Terms of Professional Engagement',
    subtitle: 'Institutional Governance Framework & Statements of Work',
    badge: 'Engagement Standards',
    icon: 'gavel',
    description: 'Terms governing professional advisory, accounting retainers, tax return preparation, and independent assurance provided by KMH Advisory LLP.',
    stat1: { num: 'Fixed Retainer', label: 'Predictable Terms', desc: 'Transparent fixed monthly scopes without unannounced billable hours.' },
    stat2: { num: 'SOW Backed', label: 'Clear Deliverables', desc: 'Formal Statement of Work defining milestones, timelines, and partner signoffs.' },
    pills: ['AICPA Engagement Standard', 'Circular 230 Accord', 'Mutual NDA', 'Dispute Arbitration'],
    sections: [
      {
        title: '1. Scope of Engagement & Partner Supervision',
        desc: 'All professional services are governed by an executed Engagement Letter and itemized Statement of Work (SOW). Every client assignment is conducted under the direct supervision of an equity partner.',
        bullets: ['Deliverables provided on agreed calendar milestones with formal partner signoff', 'Clients agree to provide accurate, timely financial records and trial balances', 'Scope adjustments require written mutual addendums before initiation']
      },
      {
        title: '2. Limitation of Liability & Professional Indemnity',
        desc: 'KMH Advisory LLP maintains comprehensive institutional professional indemnity insurance covering statutory tax and assurance engagements across all licensed jurisdictions.',
        bullets: ['Services provided in strict conformity with professional standards and tax regulations', 'Tax advice reflects interpretations supported by judicial precedent and code at time of issuance', 'Binding commercial arbitration in New York or London for contract disputes']
      }
    ]
  },
  {
    key: 'cookie-preferences',
    title: 'Cookie Preferences & Tracking Governance',
    subtitle: 'Transparent, Minimalist Digital Footprint',
    badge: 'Privacy Controls',
    icon: 'cookie',
    description: 'We believe privacy is a fundamental sovereign right. Our web architecture utilizes only strictly necessary functional cookies required for session security and portal authentication.',
    stat1: { num: 'Zero', label: 'Third-Party Ad Trackers', desc: 'No tracking pixels, third-party remarketing, or ad network cookies.' },
    stat2: { num: 'Minimal', label: 'Session Storage Only', desc: 'Cookies used solely to secure portal logins and remember UI preferences.' },
    pills: ['No Ad Networks', 'No Data Brokering', 'GDPR Compliant', 'Local Storage Preference'],
    sections: [
      {
        title: 'Strictly Necessary Functional Cookies',
        desc: 'These cookies are required for the website to function securely, including CSRF token protection, dark mode theme preferences, and client portal authentication.',
        bullets: ['Session persistence for client portal authenticated sessions', 'Security tokens preventing cross-site request forgery attacks', 'Can be toggled or disabled directly in your browser settings']
      }
    ]
  },
  {
    key: 'security-architecture',
    title: 'Security Architecture & Data Vaults',
    subtitle: 'SOC-2 Type II Certified, Air-Gapped Infrastructure for High-Asset Records',
    badge: 'Enterprise Security',
    icon: 'enhanced_encryption',
    description: 'Detailed technical overview of KMH physical, network, and cryptographical infrastructure safeguarding confidential client ledgers and tax records against nation-state and cyber threats.',
    stat1: { num: 'AES-256', label: 'Encryption Standard', desc: 'Military-grade hardware encryption applied to all files and databases.' },
    stat2: { num: '99.99%', label: 'Uptime SLA', desc: 'High-availability redundant data centers in US, EU, and Switzerland.' },
    pills: ['SOC-2 Type II', 'ISO/IEC 27001', 'Air-Gapped Backups', 'Zero-Trust Architecture'],
    sections: [
      {
        title: 'Zero-Trust Network Architecture',
        desc: 'Every access request is authenticated, authorized, and continuously validated against strict identity policies before granting access to confidential workpapers.',
        bullets: ['Mandatory hardware-backed FIDO2 WebAuthn authentication for all partners', 'Strict role-based access control (RBAC) limiting client data access to assigned staff', 'Automated session termination after 15 minutes of inactivity']
      },
      {
        title: 'Cryptographical Vaults & Air-Gapped Backups',
        desc: 'Client documentation is stored in zero-knowledge encrypted vaults with daily immutable backups stored across geographically separated, air-gapped data centers.',
        bullets: ['AES-256 encryption at rest with customer-managed encryption key options', 'TLS 1.3 encryption in transit with HTTP Strict Transport Security (HSTS)', 'Annual third-party penetration testing and independent SOC-2 Type II audits']
      }
    ]
  }
];

function buildPage(page) {
  const isPortal = page.key === 'client-portal-login';
  const isContact = page.key === 'contact-us';

  let customMainContent = '';

  if (isPortal) {
    customMainContent = `
    <div class="max-w-md mx-auto my-12 p-8 rounded-2xl bg-surface-container-low border border-primary/30 shadow-2xl space-y-6">
      <div class="text-center space-y-2">
        <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
          <span class="material-symbols-outlined text-[26px]">lock</span>
        </div>
        <h2 class="font-headline-md text-headline-md text-on-surface font-semibold">Client Vault Sign-In</h2>
        <p class="font-body-sm text-body-sm text-on-surface-variant">Access your confidential tax returns, audit packages, and ledger reports.</p>
      </div>

      <form onsubmit="handlePortalLogin(event)" class="space-y-4">
        <div>
          <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Corporate Email Address</label>
          <input required type="email" placeholder="cfo@enterprise.com" class="w-full h-11 px-3.5 rounded bg-surface-container text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"/>
        </div>
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label class="font-label-mono text-label-mono uppercase text-outline">Password</label>
            <a href="#" onclick="alert('Password reset link sent to registered email.')" class="text-primary font-label-mono text-[11px] hover:underline">Forgot?</a>
          </div>
          <input required type="password" placeholder="••••••••••••" class="w-full h-11 px-3.5 rounded bg-surface-container text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"/>
        </div>
        <div class="flex items-center justify-between text-body-sm text-on-surface-variant">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked class="text-primary focus:ring-primary"/>
            <span>Remember terminal</span>
          </label>
          <span class="font-label-mono text-[10px] text-outline">FIDO2 MFA Ready</span>
        </div>
        <button type="submit" class="w-full py-3.5 rounded bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-fixed transition-colors shadow-lg flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[18px]">verified_user</span>
          <span>Authenticate to Vault</span>
        </button>
      </form>

      <div class="p-3 rounded bg-surface-container border border-outline-variant/20 text-center font-label-mono text-[11px] text-outline">
        Protected by 256-Bit SSL • SOC-2 Type II Certified
      </div>
    </div>
    <script>
      function handlePortalLogin(e) {
        e.preventDefault();
        alert('Authentication initialized. A 6-digit MFA verification code has been dispatched to your corporate device.');
      }
    </script>
    `;
  } else if (isContact) {
    customMainContent = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">
      <div class="lg:col-span-7 bg-surface-container-low p-8 rounded-2xl border border-primary/20 shadow-xl space-y-6">
        <div>
          <span class="font-label-mono text-label-mono text-primary uppercase tracking-widest">Confidential Dispatch</span>
          <h2 class="font-headline-md text-headline-md text-on-surface font-semibold mt-1">Direct Partner Inquiry</h2>
          <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Submit your corporate inquiry directly to the Senior Partner desk. All inquiries reviewed under mutual NDA.</p>
        </div>

        <form onsubmit="handleContactSubmit(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Executive Full Name *</label>
              <input required type="text" placeholder="Richard Sterling" class="w-full h-11 px-3.5 rounded bg-surface-container text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"/>
            </div>
            <div>
              <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Corporate Email Address *</label>
              <input required type="email" placeholder="sterling@vancecap.com" class="w-full h-11 px-3.5 rounded bg-surface-container text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"/>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Target Office Desk</label>
              <select class="w-full h-11 px-3 rounded bg-surface-container text-on-surface text-body-sm focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30">
                <option>New York (US &amp; Federal Tax)</option>
                <option>London (UK &amp; Indirect VAT)</option>
                <option>Zurich (Private Wealth &amp; Treaties)</option>
                <option>Dubai (GCC &amp; Free Zone)</option>
              </select>
            </div>
            <div>
              <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Urgency SLA</label>
              <select class="w-full h-11 px-3 rounded bg-surface-container text-on-surface text-body-sm focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30">
                <option>Standard Review (24-Hour SLA)</option>
                <option>Urgent Impending Audit / Filing Deadline (&lt; 4 Hours)</option>
                <option>Pre-Closing M&amp;A Transaction Diligence</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-label-mono text-label-mono uppercase text-outline mb-1.5">Confidential Inquiry Details</label>
            <textarea rows="4" placeholder="Briefly specify your corporate scope, jurisdictions involved, or technical tax concerns..." class="w-full p-4 rounded bg-surface-container text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30"></textarea>
          </div>

          <button type="submit" class="w-full py-4 rounded bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-fixed transition-colors shadow-lg flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">send</span>
            <span>Dispatch to Partner Office</span>
          </button>
        </form>
      </div>

      <div class="lg:col-span-5 space-y-6">
        <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-4">
          <h3 class="font-title-lg text-title-lg text-on-surface font-semibold">Immediate Partner Access</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">Our senior partners operate across major financial timezones to ensure seamless multinational responsiveness.</p>
          
          <div class="space-y-3 pt-2">
            <div class="p-4 rounded-xl bg-surface-container border border-outline-variant/20">
              <div class="flex items-center justify-between pb-1">
                <span class="font-title-md text-on-surface font-semibold">New York HQ</span>
                <span class="text-primary font-label-mono text-[11px]">EASTERN TIME</span>
              </div>
              <p class="text-outline text-body-sm">450 Lexington Ave, 38th Floor, New York, NY 10017</p>
              <a href="tel:+18008427900" class="text-primary font-label-mono text-[13px] font-bold mt-2 block hover:underline">+1 (800) 842-7900</a>
            </div>

            <div class="p-4 rounded-xl bg-surface-container border border-outline-variant/20">
              <div class="flex items-center justify-between pb-1">
                <span class="font-title-md text-on-surface font-semibold">London Office</span>
                <span class="text-primary font-label-mono text-[11px]">GMT</span>
              </div>
              <p class="text-outline text-body-sm">1 St. Mary Axe, The City, London EC3A 8EP</p>
              <a href="tel:+442079460912" class="text-primary font-label-mono text-[13px] font-bold mt-2 block hover:underline">+44 20 7946 0912</a>
            </div>

            <div class="p-4 rounded-xl bg-surface-container border border-outline-variant/20">
              <div class="flex items-center justify-between pb-1">
                <span class="font-title-md text-on-surface font-semibold">Zurich &amp; Dubai</span>
                <span class="text-primary font-label-mono text-[11px]">CET / GST</span>
              </div>
              <p class="text-outline text-body-sm">Bahnhofstrasse 45, Zürich • DIFC Gate Precinct 4, Dubai</p>
              <div class="flex items-center gap-4 mt-2">
                <a href="tel:+41446681800" class="text-primary font-label-mono text-[12px] font-bold hover:underline">CH: +41 44 668 1800</a>
                <a href="tel:+97143128800" class="text-primary font-label-mono text-[12px] font-bold hover:underline">UAE: +971 4 312 8800</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      function handleContactSubmit(e) {
        e.preventDefault();
        alert('Thank you for contacting KMH Advisory. A Senior Partner will review your inquiry and respond within 4 business hours.');
      }
    </script>
    `;
  }

  const sectionsHtml = page.sections.map((s, idx) => `
    <div class="p-8 rounded-2xl bg-surface-container-low border border-primary/20 shadow-md flex flex-col justify-between hover:border-primary/50 transition-all">
      <div class="space-y-4">
        <div class="flex items-center gap-2 font-label-mono text-label-mono text-primary uppercase tracking-widest">
          <span>0${idx + 1}</span>
          <span class="w-6 h-[1px] bg-primary/40"></span>
          <span>Core Capability</span>
        </div>
        <h3 class="font-headline-md text-headline-md text-on-surface font-semibold">${s.title}</h3>
        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">${s.desc}</p>
        <ul class="space-y-2.5 pt-4 border-t border-outline-variant/20 font-body-sm text-body-sm text-on-surface">
          ${s.bullets.map(b => `<li class="flex items-start gap-2.5"><span class="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>${b}</span></li>`).join('')}
        </ul>
      </div>
      <div class="pt-6">
        <a href="book-a-consultation.html" class="inline-flex items-center gap-2 text-primary font-label-lg hover:underline underline-offset-4">
          <span>Schedule Specialist Review →</span>
        </a>
      </div>
    </div>
  `).join('');

  const content = `
<main class="w-full pt-[116px] bg-surface min-h-[calc(100vh-116px)]">
  <div class="flex flex-col w-full">
    <!-- Ambient ambient glow -->
    <div class="relative w-full overflow-hidden bg-surface-container-lowest py-12 lg:py-20 border-b border-outline-variant/20">
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <!-- Breadcrumb & Badge -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-outline-variant/20">
          <nav class="flex items-center gap-2 font-label-mono text-label-mono text-outline uppercase tracking-wider">
            <a class="hover:text-primary transition-colors" data-path="home" href="index.html">Home</a>
            <span class="text-outline-variant">/</span>
            <a class="hover:text-primary transition-colors" data-path="services" href="services.html">Services</a>
            <span class="text-outline-variant">/</span>
            <span class="text-primary font-semibold">${page.title}</span>
          </nav>
          <div class="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant">
            <span class="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>FY 2026 Sovereign Fiduciary Catalog</span>
          </div>
        </div>

        <!-- Main Title Block -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 items-end">
          <div class="lg:col-span-8 space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-primary/20 text-primary font-label-mono text-[11px] uppercase tracking-widest">
              <span class="material-symbols-outlined text-[14px]">${page.icon}</span>
              <span>${page.badge}</span>
            </div>
            <h1 class="font-headline-lg text-headline-lg lg:text-display-hero text-on-surface tracking-tight leading-tight">
              ${page.title}
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              ${page.description}
            </p>
            <div class="flex flex-wrap items-center gap-2 pt-2">
              ${page.pills.map(p => `<span class="px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface text-[11px] font-label-mono">${p}</span>`).join('')}
            </div>
          </div>

          <!-- Quick Partner Stat Pill -->
          <div class="lg:col-span-4 flex flex-col justify-end">
            <div class="p-6 rounded-xl bg-surface-container-low border border-primary-container/20 shadow-xl relative overflow-hidden">
              <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
              <div class="flex items-center justify-between pb-3">
                <span class="font-label-mono text-label-mono text-outline uppercase">${page.stat1.label}</span>
                <span class="font-label-mono text-label-mono text-primary font-bold">${page.stat1.num}</span>
              </div>
              <div class="font-headline-sm text-headline-sm text-on-surface pb-1">${page.stat2.num} ${page.stat2.label}</div>
              <p class="font-body-sm text-body-sm text-on-surface-variant">${page.stat2.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Page Specific or General Content Sections -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
      ${customMainContent}
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        ${sectionsHtml}
      </div>

      <!-- Bottom Direct Partner Consultation Banner -->
      <div class="mt-20 p-10 lg:p-14 rounded-2xl bg-surface-container border border-primary/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-mono text-[10px] uppercase">
            <span class="material-symbols-outlined text-[14px]">verified</span>
            <span>Direct Partner Engagement</span>
          </div>
          <h2 class="font-headline-lg text-headline-lg text-on-surface font-semibold">
            Ready to implement ${page.title}?
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Request a confidential 30-minute diagnostic session with our Senior Chartered Partners. We review your entity posture and provide customized terms under formal mutual NDA.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <a href="book-a-consultation.html" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-lg hover:bg-primary transition-colors">
            Book Fiduciary Consultation
          </a>
          <a href="contact-us.html" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded bg-surface-container-high border border-outline-variant text-on-surface font-label-lg hover:border-primary transition-colors">
            Contact Partner Office
          </a>
        </div>
      </div>
    </div>
  </div>
</main>
`;

  return getHead(page.title) + getHeader(page.key) + content + getFooter();
}

pages.forEach(p => {
  const html = buildPage(p);
  fs.writeFileSync(`${p.key}.html`, html, 'utf8');
  console.log(`Generated ${p.key}.html`);
});

console.log('All remaining practice and company pages created successfully!');
