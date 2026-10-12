// English content for the country visa guides.
//
// Only the text that readers see is defined here — slugs, flags, fees, images,
// official URLs and dates always come from lib/data/countries.ts, so prices and
// links are maintained in one place for both languages.
//
// Spelling: UK pages use British English (UKVI terminology); all other pages use
// the same clear British-spelling international English as the rest of the site.
// Official names (VFS Global, TLScontact, DS-160, ImmiAccount, IRCC…) are kept as is.

import type { CountryVisaInfo, FaqItem, VisaTypeSummary } from "@/types";

/** Visible text of one country guide, keyed by slug. */
export interface CountryTextEn {
  name: string;
  shortDescription: string;
  visaTypes: Record<string, Pick<VisaTypeSummary, "nameAr" | "descriptionAr">>;
  requirements: string[];
  documents: string[];
  processingTime: string;
  applicationSteps: string[];
  applicationCentre: string;
  officialSourceLabel: string;
  faqs: FaqItem[];
  importantNotes: string[];
}

const SCHENGEN_REQUIREMENTS = [
  "A valid passport, valid for at least 6 months beyond your return date, with at least two blank pages.",
  "A completed Schengen visa application form.",
  "A recent passport photograph meeting Schengen specifications (white background).",
  "Travel medical insurance covering the entire trip, with minimum cover of €30,000.",
  "Proof of hotel or other accommodation for the full length of your stay.",
  "Return flight reservations or booking confirmation.",
  "Bank statements for the last 3 months showing sufficient funds.",
  "A letter from your employer stating your position, salary and approved leave.",
  "A travel itinerary setting out your day-by-day plans.",
];

const BASE_DOCUMENTS = [
  "Passport",
  "Passport photograph",
  "National ID",
  "Salary certificate",
  "Bank statement",
  "Employer letter",
  "Flight reservations",
  "Accommodation bookings",
  "Travel medical insurance",
];

const SCHENGEN_STEPS = [
  "Identify the Schengen country responsible for your application (the country of your longest stay or, if stays are equal, your first point of entry).",
  "Create your profile on Munfadh Alsaada and enter your details.",
  "Upload all the required documents and have them reviewed.",
  "Prepare the official visa application form.",
  "Book an appointment at the authorised application centre (VFS Global, TLScontact or others, depending on the country).",
  "Attend in person to submit your biometrics and documents.",
  "Wait for the embassy's or consulate's decision.",
];

const SCHENGEN_FAQS: FaqItem[] = [
  {
    question: "How long does a Schengen visa take to process?",
    answer:
      "Processing usually takes 10 to 15 working days, and can take up to 30 days in some cases depending on the embassy and the season.",
  },
  {
    question: "Can I apply through any Schengen country I like?",
    answer:
      "No. You must apply through the country where you will spend the longest part of your trip. If your stays are of equal length, you apply through the country where you will first enter the Schengen Area.",
  },
];

const SCHENGEN_VISA_TYPES: CountryTextEn["visaTypes"] = {
  tourism: { nameAr: "Tourist", descriptionAr: "For short tourist visits of up to 90 days." },
  "family-visit": { nameAr: "Family visit", descriptionAr: "To visit relatives or family living in the country." },
  business: { nameAr: "Business", descriptionAr: "For business meetings and trade fairs." },
  transit: { nameAr: "Transit", descriptionAr: "For passing through airports in the Schengen Area." },
};

function schengen(name: string, applicationCentre: string, officialSourceLabel: string): CountryTextEn {
  return {
    name,
    shortDescription: `Your complete guide to applying for a ${name} visa in the Schengen Area — from the requirements to booking your official appointment.`,
    visaTypes: SCHENGEN_VISA_TYPES,
    requirements: SCHENGEN_REQUIREMENTS,
    documents: BASE_DOCUMENTS,
    processingTime: "10–15 working days (estimate)",
    applicationSteps: SCHENGEN_STEPS,
    applicationCentre,
    officialSourceLabel,
    faqs: SCHENGEN_FAQS,
    importantNotes: [
      "Government visa fees are paid directly to the embassy or authorised application centre and are not part of Munfadh Alsaada's service fees.",
      "The decision to grant or refuse a visa rests solely with the competent embassy or consulate.",
      "You must apply through the correct Schengen country under the longest-stay / first-entry rules.",
    ],
  };
}

export const COUNTRY_TEXT_EN: Record<string, CountryTextEn> = {
  france: schengen("France", "TLScontact visa application centres for France in Riyadh and Jeddah", "France-Visas — official website"),
  italy: schengen("Italy", "VFS Global visa application centres for Italy in Riyadh and Jeddah", "Embassy of Italy — official website"),
  spain: schengen("Spain", "BLS International visa application centres for Spain in Riyadh and Jeddah", "BLS International — Spain"),
  germany: schengen("Germany", "VFS Global visa application centres for Germany in Riyadh and Jeddah", "German Embassy — official website"),
  greece: schengen("Greece", "VFS Global visa application centres for Greece in Riyadh and Jeddah", "Hellenic Ministry of Foreign Affairs"),
  austria: schengen("Austria", "VFS Global visa application centre for Austria in Riyadh", "Austrian Federal Ministry for European and International Affairs"),
  switzerland: schengen("Switzerland", "VFS Global visa application centres for Switzerland in Riyadh and Jeddah", "State Secretariat for Migration (SEM), Switzerland"),
  netherlands: schengen("Netherlands", "VFS Global visa application centre for the Netherlands in Riyadh", "Government of the Netherlands — official website"),
  belgium: schengen("Belgium", "VFS Global visa application centre for Belgium in Riyadh", "Belgian Federal Public Service Foreign Affairs"),
  portugal: schengen("Portugal", "VFS Global visa application centre for Portugal in Riyadh", "Portugal's official visa portal"),

  // United Kingdom — British English, UKVI terminology.
  uk: {
    name: "United Kingdom",
    shortDescription:
      "Your guide to UK visas, from visiting to studying, including how to apply through UK Visas and Immigration (UKVI) and TLScontact visa application centres.",
    visaTypes: {
      tourism: { nameAr: "Standard Visitor visa (tourism)", descriptionAr: "For tourist visits of up to 6 months." },
      "family-visit": { nameAr: "Standard Visitor visa (visiting family)", descriptionAr: "To visit family members living in the UK." },
      business: { nameAr: "Standard Visitor visa (business)", descriptionAr: "For meetings, conferences and other permitted short business activities." },
      study: { nameAr: "Student visa", descriptionAr: "To study with a licensed student sponsor in the UK." },
      other: { nameAr: "Other visa types", descriptionAr: "Work, medical treatment and transit visas." },
    },
    requirements: [
      "A valid passport.",
      "An online application completed on the official GOV.UK (UKVI) website.",
      "The visa application fee paid online (by you directly, or with help from our support team).",
      "Evidence of your finances (bank statements for the last 6 months).",
      "Evidence of your residence and employment in Saudi Arabia.",
      "A letter of invitation (for family visits).",
      "A Confirmation of Acceptance for Studies (CAS) from a licensed sponsor (Student visa only).",
    ],
    documents: BASE_DOCUMENTS,
    processingTime: "15–20 working days (estimate); an official priority service may be available",
    applicationSteps: [
      "Complete the official online application on GOV.UK (UKVI).",
      "Pay the visa application fee online through the official website.",
      "Prepare your file and documents on Munfadh Alsaada.",
      "Book an appointment at the TLScontact visa application centre.",
      "Attend in person to provide your biometrics and documents.",
      "Track your application until a decision is made.",
    ],
    applicationCentre: "TLScontact visa application centres for the UK in Riyadh and Jeddah",
    officialSourceLabel: "UK Visas and Immigration (UKVI)",
    faqs: [
      {
        question: "Do you book my UK visa appointment for me?",
        answer:
          "We do not book appointments automatically. We help you prepare your application and then direct you to the official TLScontact booking page.",
      },
      {
        question: "Is the UKVI fee included in your service fee?",
        answer:
          "No. Government fees are paid by you directly to the official authority and are shown separately from our service fee.",
      },
    ],
    importantNotes: [
      "Munfadh Alsaada never submits information to UKVI on your behalf without your knowledge and explicit consent.",
      "The decision to grant a visa rests solely with UK Visas and Immigration.",
    ],
  },

  usa: {
    name: "United States",
    shortDescription:
      "We help you prepare your DS-160 form and supporting documents and manage your U.S. visa appointment profile — without booking appointments automatically.",
    visaTypes: {
      "b1-b2": { nameAr: "B1/B2 (business/tourism)", descriptionAr: "For tourism, visits and short business trips." },
      study: { nameAr: "F-1 Student", descriptionAr: "To study at an accredited U.S. educational institution." },
      business: { nameAr: "Business", descriptionAr: "For business activities and conferences." },
      other: { nameAr: "Other visa types", descriptionAr: "Transit, medical treatment and other visas." },
    },
    requirements: [
      "A passport valid for at least 6 months beyond your intended stay.",
      "A completed online DS-160 form.",
      "Payment of the non-refundable MRV (visa application) fee.",
      "A photograph meeting U.S. visa photo requirements.",
      "Evidence of your ties to Saudi Arabia (employment, family, property).",
      "Bank statements and evidence of sufficient funds.",
    ],
    documents: [...BASE_DOCUMENTS, "DS-160 confirmation page"],
    processingTime: "Depends on interview availability at the U.S. Embassy or Consulate (varies)",
    applicationSteps: [
      "Complete the DS-160 form with our team's help (we prepare the information — nothing is submitted without your knowledge).",
      "Pay the MRV fee through the authorised official channels.",
      "Create or update your appointment profile on the official U.S. visa website.",
      "Book your interview yourself on the official website (we give you the direct link).",
      "Prepare all the documents required for your interview day.",
      "Attend your interview at the U.S. Embassy or Consulate.",
    ],
    applicationCentre: "U.S. Embassy in Riyadh or U.S. Consulate General in Jeddah (depending on your location)",
    officialSourceLabel: "U.S. Embassy & Consulates in Saudi Arabia",
    faqs: [
      {
        question: "Do you book the U.S. embassy appointment automatically?",
        answer:
          "No official API is available for this, so we never claim to book appointments automatically. We help you prepare your file and complete the DS-160, then direct you to book officially yourself.",
      },
      {
        question: "Is the MRV fee included in your service fee?",
        answer:
          "No. The MRV fee is a non-refundable government fee paid directly to the official authority, entirely separate from our service fee.",
      },
    ],
    importantNotes: [
      "Munfadh Alsaada does not guarantee an appointment or approval; applying and attending the interview in person before the official authority are mandatory.",
      "We keep each step clearly separate: completing the DS-160, paying the fee, setting up your appointment profile, booking the appointment and preparing your documents.",
    ],
  },

  australia: {
    name: "Australia",
    shortDescription:
      "A guide to applying for Australian visitor, student and business visas through the official ImmiAccount online system.",
    visaTypes: {
      visitor: { nameAr: "Visitor (subclass 600)", descriptionAr: "For tourism and visiting relatives." },
      student: { nameAr: "Student (subclass 500)", descriptionAr: "To study at a registered Australian education provider." },
      business: { nameAr: "Business", descriptionAr: "For short-term business activities." },
    },
    requirements: [
      "A valid passport.",
      "An online application through the official ImmiAccount system.",
      "Evidence of sufficient funds and bank statements.",
      "Travel health insurance.",
      "Evidence of the purpose of your visit (bookings, an invitation letter or a Confirmation of Enrolment).",
    ],
    documents: BASE_DOCUMENTS,
    processingTime: "20–30 working days (estimate)",
    applicationSteps: [
      "Create an ImmiAccount and prepare the required information.",
      "Upload your documents and have them reviewed on our platform.",
      "Complete the official application form with our help.",
      "Pay the government fee through the official system.",
      "Track your application until a decision is made (an interview is usually not required).",
    ],
    applicationCentre: "Applications are made entirely online through ImmiAccount — there is no walk-in application centre in Riyadh",
    officialSourceLabel: "Department of Home Affairs — Australia",
    faqs: [
      {
        question: "Does an Australian visa application require an interview?",
        answer:
          "Visitor visas usually do not require an interview, and the application is made entirely online through ImmiAccount.",
      },
    ],
    importantNotes: [
      "The final visa decision rests solely with the Australian Department of Home Affairs.",
    ],
  },

  canada: {
    name: "Canada",
    shortDescription:
      "We guide you through preparing your Canadian visitor, study or work application through the official IRCC online system.",
    visaTypes: {
      visitor: { nameAr: "Visitor visa", descriptionAr: "For tourism and visiting relatives for up to 6 months." },
      study: { nameAr: "Study permit", descriptionAr: "To study at a Designated Learning Institution (DLI)." },
      work: { nameAr: "Work permit", descriptionAr: "To work for an eligible Canadian employer." },
    },
    requirements: [
      "A valid passport.",
      "An online application through the official IRCC portal.",
      "Biometrics (photo and fingerprints), taken at an authorised VFS Global centre.",
      "Evidence of sufficient funds.",
      "An invitation letter, letter of acceptance or job offer, depending on the visa type.",
    ],
    documents: [...BASE_DOCUMENTS, "Biometrics instruction letter"],
    processingTime: "20–45 working days (estimate)",
    applicationSteps: [
      "Create an account on the IRCC portal and prepare your information.",
      "Upload your documents and have them reviewed on our platform.",
      "Complete the official application form with our help.",
      "Pay the government application and biometrics fees.",
      "Book your biometrics appointment at the authorised VFS Global centre.",
      "Track your application until a decision is made.",
    ],
    applicationCentre: "VFS Global visa application centres for Canada in Riyadh and Jeddah",
    officialSourceLabel: "Immigration, Refugees and Citizenship Canada (IRCC)",
    faqs: [
      {
        question: "Can I include family members in the same Canada application?",
        answer:
          "Yes. With our family application feature you can add your spouse and children; each person has their own file, documents and form within the same family application.",
      },
    ],
    importantNotes: ["The final visa decision rests solely with Immigration, Refugees and Citizenship Canada (IRCC)."],
  },
};

/** Returns a copy of the country with its visible text in English. */
export function toEnglishCountry(country: CountryVisaInfo): CountryVisaInfo {
  const text = COUNTRY_TEXT_EN[country.slug];
  if (!text) return country;
  return {
    ...country,
    // The `…Ar` display fields carry the text for the active language.
    nameAr: text.name,
    shortDescriptionAr: text.shortDescription,
    visaTypes: country.visaTypes.map((v) => ({ ...v, ...(text.visaTypes[v.slug] ?? {}) })),
    requirements: text.requirements,
    documents: text.documents,
    processingTimeAr: text.processingTime,
    applicationSteps: text.applicationSteps,
    applicationCenterAr: text.applicationCentre,
    officialSource: { ...country.officialSource, labelAr: text.officialSourceLabel },
    faqs: text.faqs,
    importantNotesAr: text.importantNotes,
  };
}
