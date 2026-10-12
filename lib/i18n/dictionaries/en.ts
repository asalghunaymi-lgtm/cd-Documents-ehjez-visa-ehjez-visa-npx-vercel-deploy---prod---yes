// English UI strings. Must mirror the keys of ar.ts (enforced by the Dictionary type).
// Style: clear, professional international English with British spelling
// (centre, organise, licence) — which also matches UK Visas and Immigration usage.
// Official names (UKVI, IRCC, VFS Global, DS-160, ImmiAccount…) are never translated.

import type { Dictionary } from "./ar";

export const en: Dictionary = {
  meta: {
    siteName: "Munfadh Alsaada Travel & Tourism",
    defaultTitleSuffix: "Your Visa Starts Here",
    description:
      "A Saudi platform that helps you prepare your visa application — from choosing your destination and understanding the requirements to uploading documents and reaching the official application and appointment channels.",
    keywords: [
      "Schengen visa from Saudi Arabia",
      "UK visa from Saudi Arabia",
      "US visa from Saudi Arabia",
      "Canada visa from Saudi Arabia",
      "Australia visa from Saudi Arabia",
      "Munfadh Alsaada",
      "online visa application Saudi Arabia",
    ],
    ogLocale: "en_GB",
  },

  brand: {
    name: "Munfadh Alsaada",
    agencyName: "Munfadh Alsaada Travel & Tourism Agency",
    agencySubtitle: "وكالة منفذ السعادة للسفر والسياحة",
  },

  disclaimer:
    "Munfadh Alsaada is an independent visa assistance service. It is not an embassy or a government authority and does not guarantee that a visa will be issued. The decision to grant or refuse a visa rests solely with the competent authority.",

  nav: {
    home: "Home",
    visas: "Countries & Visas",
    services: "Our Services",
    about: "About Us",
    faq: "FAQs",
    myFile: "My Account",
    startApplication: "Start Your Visa Application",
    startApplicationShort: "Apply Now",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  languageSwitch: {
    label: "العربية",
    ariaLabel: "التبديل إلى العربية",
  },

  footer: {
    quickLinks: "Quick Links",
    bookAppointment: "Book an Appointment",
    topDestinations: "Popular Destinations",
    visaFor: (country: string) => `${country} Visa`,
    contactUs: "Contact Us",
    location: "Riyadh, Saudi Arabia",
    rights: (year: number) => `© ${year} Munfadh Alsaada. All rights reserved.`,
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },

  whatsapp: {
    label: (phone: string) => `Contact us on WhatsApp: ${phone}`,
  },

  common: {
    close: "Close",
    popular: "Most popular",
    learnRequirements: "View requirements",
    chooseCountry: "Choose a country",
    currency: "SAR",
    lastUpdated: "Last updated",
    required: "Required",
  },

  home: {
    hero: {
      kicker: "Saudi Visa Services",
      titleStart: "Your visa",
      titleHighlight: "starts here",
      lead: "Choose your destination, upload your documents and let us help you prepare your visa application and book your appointment through the official channels — in plain language, with clear steps from start to finish.",
      primaryCta: "Start Your Visa Application",
      secondaryCta: "View visa requirements",
      highlights: [
        { value: "12+", label: "Countries and destinations covered" },
        { value: "100%", label: "With you from application to visa decision" },
        { value: "24/7", label: "Application status tracking" },
      ],
    },
    routePanel: {
      origin: "Riyadh · Starting point",
      intro: "Destinations whose requirements we cover in detail, with ongoing monitoring of official updates.",
      destinations: [
        { city: "London", region: "United Kingdom" },
        { city: "Paris", region: "Schengen" },
        { city: "Dubai", region: "UAE" },
        { city: "Toronto", region: "Canada" },
      ],
    },
    search: {
      placeholder: "Where would you like to travel? (e.g. London, Paris, USA…)",
      submit: "Search",
    },
    destinations: {
      kicker: "Our destinations",
      title: "Choose your destination with confidence",
      lead: "We cover the most popular destinations for travellers from Saudi Arabia, with a clear guide to each country's requirements.",
      regions: {
        schengen: "🇪🇺 Schengen",
        uk: "🇬🇧 United Kingdom",
        usa: "🇺🇸 United States",
        australia: "🇦🇺 Australia",
        canada: "🇨🇦 Canada",
      },
    },
    schengenHelper: {
      title: "What is your main destination in the Schengen Area?",
      introStart:
        "You cannot apply through just any Schengen country. If you are visiting more than one country, you must apply through",
      introLongest: " the country where you will spend the longest time",
      introMiddle: ". If your stays are of equal length, you apply through",
      introFirstEntry: " your country of first entry",
      introEnd: ".",
      longestStayLabel: "Country where you will stay longest",
      equalStayLabel: "Equal stays in more than one country?",
      firstEntryPlaceholder: "Country of first entry",
      resultTitle: "Where you should apply",
      resultPrefix: "Based on your answers, you should apply through",
      continue: "Continue to the country page",
    },
    howItWorks: {
      kicker: "How it works",
      title: "Your journey in four simple steps",
      steps: [
        {
          title: "Choose your destination and visa type",
          desc: "Select the country and the purpose of your trip, and we will show you the exact requirements straight away.",
        },
        {
          title: "Create your profile and upload documents",
          desc: "Enter your details and upload your documents easily from your phone, with an instant initial check.",
        },
        {
          title: "We review and prepare your application",
          desc: "Our team reviews your file and prepares the official application form according to the country's requirements.",
        },
        {
          title: "Official submission and status tracking",
          desc: "We direct you to the official application or booking link, and you can track your application step by step.",
        },
      ],
    },
    trust: {
      kicker: "Why Munfadh Alsaada",
      title: "A far simpler experience than dealing with complex visa websites on your own",
      lead: "Everything you need in one place: requirements, document uploads, form preparation and status tracking — without the complexity or the jargon.",
      points: [
        {
          title: "Fully bilingual platform",
          desc: "A clear interface in Arabic and English, designed for travellers rather than specialists.",
        },
        {
          title: "Strong data protection",
          desc: "Encrypted, secure storage for all your documents and your personal and financial information.",
        },
        {
          title: "Support throughout your journey",
          desc: "A dedicated team guides you from choosing your destination to completing your application.",
        },
        {
          title: "Reliable, up-to-date information",
          desc: "Every requirement and fee is linked to an official source with a clear last-updated date.",
        },
      ],
    },
    cta: {
      title: "Ready to start your journey?",
      lead: "Start your visa application now, with every step clearly laid out from beginning to end.",
      primary: "Start Your Visa Application Now",
      faqLink: "Have a question? Browse our FAQs",
    },
  },

  visaIndex: {
    metaTitle: "Countries & Visas",
    metaDescription: "Browse all available countries and the visa requirements for each one on Munfadh Alsaada.",
    title: "Countries & Visas",
    lead: "Choose a country to see its visa types, requirements, documents, fees and the full application process.",
    notFoundStart: "Can't find your destination?",
    notFoundLink: "Contact us",
    notFoundEnd: "and we will help.",
  },

  country: {
    metaTitle: (name: string) => `${name} Visa from Saudi Arabia | Requirements, Documents and Fees`,
    metaDescription: (name: string, summary: string) =>
      `A complete guide to the ${name} visa from Saudi Arabia: visa types, documents, fees, application steps and the authorised application centre. ${summary}`,
    allCountries: "← All countries",
    title: (name: string) => `${name} Visa`,
    lastUpdated: (date: string) => `Last updated: ${date}`,
    startApplication: (name: string) => `Start your ${name} visa application`,
    bookAppointment: "Book an Appointment",
    info: {
      processingTime: "Estimated processing time",
      governmentFee: "Government visa fee",
      serviceFee: "Our service fee",
      serviceFeeValue: (fee: string) => `From ${fee}`,
      applicationCentre: "Application centre",
    },
    visaTypes: "Available visa types",
    requirements: "Requirements",
    documents: "Required documents",
    documentsNoteStart: "You can upload all your documents as soon as you start your application, on the",
    documentsNoteLink: "document upload page",
    documentsNoteEnd: ".",
    steps: "Application steps",
    faqTitle: (name: string) => `Frequently asked questions about the ${name} visa`,
    officialSource: "Official source",
    goToOfficial: "Go to the official website",
    officialDisclaimer:
      "Munfadh Alsaada is not the authority that issues visas. All information here is provided for guidance and assistance only.",
    importantNotes: "Important notes",
  },

  apply: {
    metaTitle: "Start Your Visa Application",
    metaDescription:
      "Start your visa application step by step: nationality, destination, visa type and your personal details.",
    title: "Start Your Visa Application",
    lead: "Simple, clear steps — it only takes a few minutes to create your application.",
  },

  wizard: {
    steps: {
      nationality: "Nationality",
      country: "Destination",
      visaType: "Visa type",
      traveler: "Traveller details",
      family: "Family",
      review: "Review",
    },
    nationality: {
      title: "Select your nationality",
      desc: "We use this to determine the requirements that apply to you.",
    },
    country: {
      title: "Select your destination",
      desc: "Choose the country whose visa you would like to apply for.",
      schengenReminderStart:
        "Reminder: you must apply through the country where you will spend the longest part of your trip, or your country of first entry if the stays are equal. See the",
      schengenReminderLink: "Schengen country helper",
      schengenReminderEnd: "on the home page if you are unsure.",
    },
    visaType: {
      title: "Select the visa type",
      desc: (country: string) => `Visa types available for ${country}.`,
    },
    traveler: {
      title: "Traveller details",
      desc: "Enter your details exactly as they appear in your passport to ensure your application is accurate.",
    },
    family: {
      title: "Family members (optional)",
      desc: "You can add your spouse or children to the same family application — each person will have their own details and documents later.",
      relations: { spouse: "Spouse", son: "Son", daughter: "Daughter", other: "Other" },
      nameAr: "Name in Arabic",
      nameEn: "Name in English",
      add: "Add a family member",
      remove: "Remove this family member",
    },
    review: {
      title: "Review your application",
      desc: "Please check that your details are correct before creating your application.",
      nationality: "Nationality",
      country: "Destination",
      visaType: "Visa type",
      travelerName: "Traveller's name",
      passportNumber: "Passport number",
      phone: "Mobile number",
      familyMembers: "Family members",
      familyCount: (count: number) => (count === 1 ? "1 member added" : `${count} members added`),
      ready: "Ready to submit",
    },
    fields: {
      fullNameAr: "Full name in Arabic",
      fullNameEn: "Full name in English",
      birthDate: "Date of birth",
      birthPlace: "Place of birth",
      passportNumber: "Passport number",
      passportIssueDate: "Passport issue date",
      passportExpiryDate: "Passport expiry date",
      gender: "Gender",
      genders: { male: "Male", female: "Female" },
      maritalStatus: "Marital status",
      maritalStatuses: { single: "Single", married: "Married", divorced: "Divorced", widowed: "Widowed" },
      phone: "Mobile number",
      email: "Email address",
      city: "City",
      address: "Address",
      occupation: "Occupation",
      employer: "Employer",
    },
    validation: {
      requiredHint: "Fields marked * are required to continue.",
    },
    back: "Back",
    next: "Next",
    submit: "Confirm and create application",
    success: {
      title: "Your application has been created",
      body: "The next step is to upload your documents so our team can review and prepare your application. You can track its status at any time from \"My Account\".",
      uploadDocuments: "Upload documents now",
      goToDashboard: "Go to My Account",
    },
  },

  documents: {
    metaTitle: "Upload Your Documents",
    metaDescription:
      "Upload your documents easily from your phone or computer, and track the status of each one step by step.",
    title: "Upload Your Documents",
    lead: "The list below covers the core documents that are usually required. The exact list may vary by country and visa type once it is linked to your application.",
    completeness: "Core documents completed",
    progress: (done: number, total: number) => `${done} of ${total} core documents uploaded`,
    checkTitle: "How are your documents checked?",
    checkBody:
      "When you upload a file, the system runs an initial check of its type, size and legibility, and our team then reviews it manually. This check does not guarantee that the embassy will accept the document.",
    securityStart:
      "All your documents are stored securely and encrypted, and no other customer can access them. See our",
    securityLink: "Privacy Policy",
    securityEnd: ".",
    errors: {
      unsupportedType: "This file type is not supported. Please upload an image (JPG/PNG) or a PDF.",
      tooLarge: (mb: number) => `The file is larger than the ${mb} MB limit.`,
      unclear: "The document appears to be incomplete or unclear. Please upload a clearer copy.",
    },
    status: {
      missing: "Not uploaded",
      uploaded: "Uploaded",
      needs_review: "Needs review",
      approved: "Accepted",
      rejected: "Rejected – please re-upload",
    },
    uploadedOn: (date: string) => `Uploaded on ${date}`,
    employeeNote: "Staff note:",
    upload: "Upload a file or drag it here",
    replace: "Replace",
    remove: "Delete",
  },

  dashboard: {
    metaTitle: "My Account",
    metaDescription: "Track the status of your visa application step by step from My Account.",
    title: "My Account",
    applicationTitle: (country: string, visaType: string) => `${country} visa application — ${visaType}`,
    reference: "Reference number:",
    createdAt: "Created on:",
    quickActions: "Quick actions",
    actions: {
      uploadDocuments: "Upload documents",
      fillForm: "Complete the visa form",
      bookAppointment: "Book an appointment",
      addFamilyMember: "Add a family member",
    },
    notifications: "Latest notifications",
    notificationMissing: "A document is missing — please upload your bank statement to complete your application.",
    notificationReviewed: "Your documents have passed the initial review. You can move on to the next step.",
    helpTitle: "Need help?",
    helpBody: "Our support team is available to help with any question about your application.",
    contactSupport: "Contact support",
    currentStep: "This step is in progress",
  },

  applicationStatus: {
    new: "New",
    awaiting_documents: "Awaiting documents",
    under_review: "Under review",
    documents_missing: "Documents missing",
    preparing_form: "Preparing form",
    awaiting_customer: "Awaiting customer",
    ready_for_appointment: "Ready for appointment",
    appointment_booked: "Appointment booked",
    submitted: "Application submitted",
    awaiting_decision: "Awaiting decision",
    approved: "Approved",
    rejected: "Refused",
    closed: "Closed",
  },

  appointments: {
    metaTitle: "Book an Appointment",
    metaDescription:
      "Find the authorised application centre for your destination and go straight to the official booking platform.",
    title: "Book an Appointment",
    lead: "We show you the authorised application centre and the official booking link directly — we never invent appointments or bypass official booking systems.",
    chooseCountry: "Choose a country",
    centre: "Authorised application centre",
    noInventedTitle: "We don't invent appointments",
    noInventedBody:
      "We do not currently receive live data from an official API showing the earliest available appointment. For the latest availability, go directly to the official booking platform below.",
    goToBooking: "Go to the official booking platform",
  },

  pricing: {
    metaTitle: "Our Services",
    metaDescription:
      "Munfadh Alsaada service prices: form completion, document review, full application preparation and appointment assistance.",
    kicker: "Our services",
    title: "Clear pricing for every service",
    lead: "Completely separate from the government fees, which are paid directly to the official authority.",
    from: "from",
    specialPrice: "Special price",
    startNow: "Get started",
    footnote:
      "Embassy and consulate government fees are entirely separate from our service fees and are shown clearly before any payment.",
  },

  about: {
    metaTitle: "About Us",
    metaDescription: "Munfadh Alsaada is a Saudi platform dedicated to simplifying visa and travel procedures.",
    kicker: "About us",
    title: "A Saudi platform for visa services",
    lead: "Munfadh Alsaada is a Saudi platform dedicated to simplifying visa and travel procedures. Our aim is to make the journey easier — from understanding the requirements and preparing your documents to reaching the official application and booking channels.",
    values: [
      { title: "Simpler procedures", desc: "We turn a complicated visa process into clear, straightforward steps." },
      { title: "Transparency and accuracy", desc: "Every piece of information is linked to an official source with a clear last-updated date." },
      { title: "Service you deserve", desc: "Full support in Arabic and English at every step of your journey." },
      { title: "A modern experience", desc: "A fast, easy-to-use platform designed mobile-first." },
    ],
    disclaimerTitle: "Important disclaimer",
    disclaimerBody:
      "Munfadh Alsaada is an independent visa assistance service. It is not an embassy or a government authority and does not guarantee that a visa will be issued. The decision to grant or refuse a visa rests solely with the competent authority of each country.",
  },

  faq: {
    metaTitle: "Frequently Asked Questions",
    metaDescription: "Answers to the most common questions about Munfadh Alsaada's services.",
    kicker: "FAQs",
    title: "Everything you need to know",
    lead: "Straightforward answers about Munfadh Alsaada's services.",
  },

  legal: {
    lastUpdated: "Last updated: August 2026",
    privacy: {
      metaTitle: "Privacy Policy",
      metaDescription: "How Munfadh Alsaada collects, uses and protects your personal data.",
      title: "Privacy Policy",
      sections: (supportEmail: string) => [
        {
          title: "Data we collect",
          body: "We collect only the personal data needed to provide our services, including: identity and passport details, contact details, supporting documents (bank statements, employment letters) and payment details relating to service fees.",
        },
        {
          title: "How we use your data",
          body: "Your data is used solely to prepare your visa application, to contact you about the status of your application and to improve our services. We do not use your data for marketing purposes without your explicit consent.",
        },
        {
          title: "Data storage and protection",
          body: "All documents and files are stored in private, encrypted storage (Supabase Storage) and accessed through time-limited signed URLs. We apply Row Level Security policies so that no customer can access another customer's files, and staff can see only the files they are authorised to view.",
        },
        {
          title: "Data sharing",
          body: "We do not share your data with any third party except to the extent necessary to provide the service (for example, authorised application centres) or where required by law.",
        },
        {
          title: "Data retention and deletion",
          body: "We keep your data for as long as we are providing the service and for a limited additional period for legal purposes. You may then request the complete deletion of your data and documents through your account or by contacting our support team.",
        },
        {
          title: "Access and change logs",
          body: "We keep an audit log of sign-ins and sensitive changes to the system for security and accountability purposes only.",
        },
        {
          title: "Your rights",
          body: `You may at any time request access to, correction of or deletion of your data by contacting our support team at ${supportEmail}.`,
        },
      ],
    },
    terms: {
      metaTitle: "Terms of Use",
      metaDescription: "Terms of use for the Munfadh Alsaada platform.",
      title: "Terms of Use",
      sections: [
        {
          title: "Nature of the service",
          body: "Munfadh Alsaada is an independent visa assistance service. It is not an embassy or a government authority and does not officially represent any country, embassy or consulate.",
        },
        {
          title: "No guarantee of approval",
          body: "The platform does not guarantee the issue or approval of any visa. The decision to grant or refuse a visa rests solely with the competent official authority of each country, and the platform accepts no liability for the decisions of those authorities.",
        },
        {
          title: "Accuracy of information provided",
          body: "Customers must provide accurate and truthful information and documents. The platform is not responsible for any refusal or delay resulting from incorrect information or documents supplied by the customer.",
        },
        {
          title: "Fees",
          body: "The platform clearly distinguishes between the service fees it charges for its assistance and the government fees, which are paid directly to the official authority and are not received by the platform in any way.",
        },
        {
          title: "Appointments and bookings",
          body: "The platform directs customers to the authorised official booking channels and does not book appointments automatically unless an official authorisation or technical integration is available.",
        },
        {
          title: "Use of your account",
          body: "Customers must keep their sign-in details confidential and must not share them with anyone else.",
        },
        {
          title: "Changes to these terms",
          body: "The platform may update these terms from time to time, and users will be notified of any material changes.",
        },
      ],
    },
  },

  auth: {
    login: {
      metaTitle: "Sign In",
      title: "Sign in",
      lead: "Sign in to your account to track your application",
      identifier: "Mobile number or email address",
      password: "Password",
      submit: "Sign in",
      noAccount: "Don't have an account?",
      createAccount: "Create a new account",
      note: "* Secure sign-in will be enabled once the database (Supabase Auth) is connected.",
    },
    signup: {
      metaTitle: "Create an Account",
      title: "Create a new account",
      lead: "Create your account and start your visa application in minutes",
      fullName: "Full name",
      phone: "Mobile number",
      email: "Email address",
      password: "Password",
      submit: "Create account and continue",
      haveAccount: "Already have an account?",
      login: "Sign in",
    },
  },

  admin: {
    metaTitle: "Dashboard",
    badge: "Admin dashboard",
    backToSite: "Back to website",
    nav: {
      overview: "Overview",
      customers: "Customers",
      applications: "Applications",
      documents: "Documents",
      countries: "Countries & Visas",
    },
    overview: {
      title: "Overview",
      demoNote: "* Sample data for display — this will be connected to the live Supabase database.",
      stats: {
        total: "Total applications",
        newThisWeek: "New this week",
        awaitingDocuments: "Awaiting documents",
        approved: "Approved",
        rejected: "Refused",
      },
      latest: "Latest applications",
      viewAll: "View all",
    },
    table: {
      reference: "Reference",
      name: "Name",
      country: "Country",
      date: "Date",
      applicationDate: "Application date",
      status: "Status",
      employee: "Assigned to",
      visaType: "Visa type",
      region: "Region",
      governmentFee: "Government fee",
      serviceFee: "Service fee",
      lastUpdated: "Last updated",
    },
    applications: {
      title: "Applications",
      filterPlaceholder: "Filter by status",
      allStatuses: "All statuses",
      empty: "There are currently no applications with this status.",
    },
    customers: { title: "Customers" },
    countries: {
      title: "Countries & Visas",
      add: "Add a new country",
      noteTitle: "Note",
      noteBody:
        "The data shown here currently comes from a local file (lib/data/countries.ts). Once Supabase is connected, it will be read from the visa_countries table and the \"Edit\" button will let you update requirements, fees and official links directly from here.",
      edit: "Edit",
    },
    documents: {
      title: "Documents awaiting review",
      status: {
        missing: "Not uploaded",
        uploaded: "Uploaded",
        needs_review: "Needs review",
        approved: "Accepted",
        rejected: "Rejected",
      },
      customer: (name: string) => `Customer: ${name}`,
      uploadedOn: (date: string) => `Uploaded on ${date}`,
      preview: "Preview",
      download: "Download",
      approve: "Accept",
      requestReupload: "Request re-upload",
      reject: "Reject",
    },
  },
};
