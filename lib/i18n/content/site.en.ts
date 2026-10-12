// English content for the site-wide data lists in lib/data/*.
// Each list mirrors its Arabic source by key/position; prices and codes stay in lib/data.

import type { FaqItem } from "@/types";

export const SITE_FAQS_EN: FaqItem[] = [
  {
    question: "Is Munfadh Alsaada a government authority?",
    answer:
      "No. Munfadh Alsaada is an independent Saudi platform providing visa assistance services. It is not an embassy or a government authority and does not officially represent any country.",
  },
  {
    question: "Do you guarantee that my visa will be approved?",
    answer:
      "No. The decision to grant or refuse a visa rests solely with the embassy, consulate or competent authority of the destination country.",
  },
  {
    question: "How long does a visa take?",
    answer:
      "It depends on the country and the type of visa. You can see the estimated processing time on each country's page; please note that it is an estimate and not binding.",
  },
  {
    question: "Can I upload my documents from my phone?",
    answer: "Yes. The platform is designed mobile-first, so you can upload all your documents directly from your phone with ease.",
  },
  {
    question: "Can I apply for more than one person?",
    answer:
      "Yes. With the family application feature you can manage several people under one account, each with their own details, documents and form.",
  },
  {
    question: "Can I add family members?",
    answer:
      "Yes. You can create a main application and then add your spouse and children; it appears to you as a single family file that is easy to track.",
  },
  {
    question: "Do you book the appointment?",
    answer:
      "We help you prepare your information and direct you to the official booking link, but we do not book appointments automatically unless an official authorisation or technical integration is available from the competent authority.",
  },
  {
    question: "What happens if no appointments are available?",
    answer:
      "We show you the earliest known appointment from an official source where one exists. If no appointments are available, we tell you so openly and follow up with you as soon as there is an update.",
  },
  {
    question: "Are government fees included?",
    answer:
      "No. Government fees are completely separate from our service fees, and we show you both amounts clearly before any payment.",
  },
  {
    question: "Can service fees be refunded?",
    answer:
      "Service fees are subject to a specific refund policy, which is explained to you when you place your request. Government fees are generally non-refundable by the official authority.",
  },
  {
    question: "How do I delete my data and documents?",
    answer:
      "You can request deletion of your data at any time through your account or by contacting our support team, and it will be carried out in line with our published data retention policy.",
  },
];

export const PRICING_PLANS_EN: Record<string, { title: string; description: string; features: string[] }> = {
  "form-filling": {
    title: "Visa form completion",
    description: "Help preparing and completing the official visa application form accurately and easily.",
    features: ["Review of your details before submission", "Form prepared in the official authority's format", "Support via WhatsApp/email"],
  },
  "document-review": {
    title: "Document review",
    description: "An initial check of your documents to make sure they are complete and legible before you apply.",
    features: ["File type, size and legibility check", "Instant alert for missing documents", "Comments from a dedicated specialist"],
  },
  "full-preparation": {
    title: "Full application preparation",
    description: "A complete service, from uploading your documents to preparing your file for official submission.",
    features: ["Full management of your file", "Step-by-step application tracking", "Priority support"],
  },
  "appointment-service": {
    title: "Appointment booking assistance",
    description: "Help preparing your appointment booking details and directing you to the official platform.",
    features: ["Booking details prepared", "Direct link to the official platform", "Appointment reminders"],
  },
  "family-request": {
    title: "Family application",
    description: "A special price for several family applications (spouse and children) in a single file.",
    features: ["One combined family file", "Discount for each additional person", "Separate documents and forms for each person"],
  },
};

export const DOCUMENT_REQUIREMENTS_EN: Record<string, { label: string; description: string }> = {
  passport: { label: "Passport", description: "Personal details page, valid for at least 6 months." },
  photo: { label: "Passport photograph", description: "Recent (no older than 6 months), white background." },
  national_id: { label: "National ID", description: "A clear copy of both sides." },
  salary_certificate: { label: "Salary certificate", description: "An official, signed letter from your employer." },
  bank_statement: { label: "Bank statement", description: "Covering at least the last 3 months." },
  employer_letter: { label: "Employer letter", description: "Stating your job title and approved leave." },
  travel_bookings: { label: "Flight reservations", description: "Return flight tickets or booking confirmation." },
  accommodation_bookings: { label: "Accommodation bookings", description: "Hotel booking or proof of accommodation for the whole trip." },
  medical_insurance: { label: "Travel medical insurance", description: "Minimum cover of €30,000 for Schengen countries." },
  additional_docs: { label: "Additional documents", description: "Any additional documents requested by our specialist." },
};

export const NATIONALITIES_EN: Record<string, string> = {
  SA: "Saudi Arabia",
  AE: "United Arab Emirates",
  KW: "Kuwait",
  QA: "Qatar",
  BH: "Bahrain",
  OM: "Oman",
  EG: "Egypt",
  JO: "Jordan",
};

export const PROGRESS_STEPS_EN: Record<string, string> = {
  personal_data: "Personal details",
  documents: "Documents",
  review: "Application review",
  visa_form: "Visa form completion",
  payment: "Fee payment",
  appointment: "Appointment booking",
  interview: "Biometrics / interview",
  decision: "Awaiting decision",
};

export const MOCK_APPLICATION_EN = {
  countryNameAr: "France",
  visaTypeAr: "Tourist",
  assignedEmployeeAr: "Support team",
};

/** Sample admin rows (demo data) — names transliterated, values translated. */
export const MOCK_ADMIN_EN = {
  applications: {
    "1": { name: "Abdullah Alghunaymi", country: "France 🇫🇷", visaType: "Tourist", employee: "Sarah Ahmed" },
    "2": { name: "Noura Alqahtani", country: "United Kingdom 🇬🇧", visaType: "Family visit", employee: "Sarah Ahmed" },
    "3": { name: "Fahad Alotaibi", country: "United States 🇺🇸", visaType: "B1/B2", employee: "Khalid Almutairi" },
    "4": { name: "Munira Aldossari", country: "Canada 🇨🇦", visaType: "Visitor Visa", employee: "—" },
    "5": { name: "Sultan Alharbi", country: "Italy 🇮🇹", visaType: "Tourist", employee: "Khalid Almutairi" },
    "6": { name: "Lamya Alshammari", country: "Australia 🇦🇺", visaType: "Visitor", employee: "Sarah Ahmed" },
    "7": { name: "Turki Al Saud", country: "Spain 🇪🇸", visaType: "Business", employee: "Khalid Almutairi" },
  } as Record<string, { name: string; country: string; visaType: string; employee: string }>,
  documents: {
    d1: { applicant: "Abdullah Alghunaymi", document: "Bank statement" },
    d2: { applicant: "Noura Alqahtani", document: "Employer letter" },
    d3: { applicant: "Fahad Alotaibi", document: "Passport" },
  } as Record<string, { applicant: string; document: string }>,
};
