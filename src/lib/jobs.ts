import cleanerImg from "@/assets/role-cleaner.jpg";
import cashierImg from "@/assets/role-cashier.jpg";
import storekeeperImg from "@/assets/role-storekeeper.jpg";
import driverImg from "@/assets/role-driver.jpg";
import loaderImg from "@/assets/role-loader.jpg";
import marketerImg from "@/assets/role-marketer.jpg";
import salesImg from "@/assets/role-sales.jpg";
import chefImg from "@/assets/role-chef.jpg";
import supervisorImg from "@/assets/role-supervisor.jpg";
import guardImg from "@/assets/role-guard.jpg";

export const APPLY_URL = "https://www.careersapplicationskenya.site/apply/quickmart";

export type Job = {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  pay: string;
  allowanceLabel: string;
  allowanceValue: string;
  image: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "cleaners",
    title: "Cleaners",
    department: "Facilities",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 25,000 / month",
    allowanceLabel: "Transport Allowance",
    allowanceValue: "Ksh. 3,000",
    image: cleanerImg,
    summary: "Keep our stores spotless, safe, and welcoming for every customer.",
    responsibilities: [
      "Clean aisles, washrooms, and back-of-house areas on schedule",
      "Restock cleaning supplies and report any shortages",
      "Promptly respond to spills and safety hazards",
      "Maintain hygiene standards across the store",
    ],
    requirements: [
      "KCSE certificate or equivalent",
      "Hardworking, reliable, and detail-oriented",
      "Able to stand and walk for extended periods",
      "Prior cleaning experience is a plus",
    ],
  },
  {
    slug: "cashiers",
    title: "Cashiers",
    department: "Customer Service",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 34,000 / month",
    allowanceLabel: "Medical Allowance",
    allowanceValue: "Ksh. 3,000",
    image: cashierImg,
    summary: "Welcome customers, process payments accurately, and create great checkout experiences.",
    responsibilities: [
      "Operate POS systems and handle cash, M-Pesa and card payments",
      "Issue receipts and balance the till at end of shift",
      "Assist customers with enquiries at the front-end",
      "Keep the checkout area tidy and well-stocked",
    ],
    requirements: [
      "KCSE C- or higher",
      "Basic numeracy and computer skills",
      "Friendly, honest, and customer-focused",
      "Prior cashiering experience preferred",
    ],
  },
  {
    slug: "store-keepers",
    title: "Store Keepers",
    department: "Inventory",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 38,000 / month",
    allowanceLabel: "Housing Allowance",
    allowanceValue: "Ksh. 5,000",
    image: storekeeperImg,
    summary: "Keep stock organised, accurately recorded, and always ready for the shop floor.",
    responsibilities: [
      "Receive, inspect and record incoming deliveries",
      "Maintain accurate stock records and bin cards",
      "Issue stock to departments and conduct regular stock-takes",
      "Report damages, expiries and shortages",
    ],
    requirements: [
      "Diploma or certificate in Stores/Supply Chain",
      "Strong record-keeping and ERP/POS experience",
      "Detail-oriented with good integrity",
      "1+ year experience in retail stores preferred",
    ],
  },
  {
    slug: "drivers",
    title: "Drivers",
    department: "Logistics",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 45,000 / month",
    allowanceLabel: "Fuel Allowance",
    allowanceValue: "Ksh. 8,000",
    image: driverImg,
    summary: "Move goods safely and on time between depots, branches and customers.",
    responsibilities: [
      "Drive company vehicles and deliver goods on schedule",
      "Conduct daily vehicle inspections and basic maintenance checks",
      "Maintain accurate trip records and delivery notes",
      "Observe traffic and company safety regulations",
    ],
    requirements: [
      "Valid Kenyan driving licence (BCE)",
      "Clean driving record, 2+ years experience",
      "Certificate of good conduct",
      "Familiarity with Nairobi and major routes",
    ],
  },
  {
    slug: "loaders-offloaders",
    title: "Loaders & Off-loaders",
    department: "Warehouse",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 28,000 / month",
    allowanceLabel: "Transport Allowance",
    allowanceValue: "Ksh. 3,000",
    image: loaderImg,
    summary: "Load and off-load goods quickly and safely to keep the supply chain moving.",
    responsibilities: [
      "Load and off-load trucks and containers",
      "Stack goods correctly on pallets and shelves",
      "Handle goods carefully to avoid breakages",
      "Support warehouse cleanliness and safety",
    ],
    requirements: [
      "KCSE certificate",
      "Physically fit, able to lift up to 50kg",
      "Team player with a strong work ethic",
      "Prior warehouse experience is a plus",
    ],
  },
  {
    slug: "marketers",
    title: "Marketers",
    department: "Sales",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 35,000 / month",
    allowanceLabel: "Commission",
    allowanceValue: "5% on sales",
    image: marketerImg,
    summary: "Drive footfall, promote offers, and grow the QuickMart brand in your region.",
    responsibilities: [
      "Plan and execute in-store and field promotions",
      "Engage customers and share product information",
      "Track campaign performance and submit reports",
      "Build relationships with suppliers and partners",
    ],
    requirements: [
      "Diploma/Degree in Sales, Marketing or related field",
      "Excellent communication and interpersonal skills",
      "Confident, target-driven and self-motivated",
      "1+ year marketing experience preferred",
    ],
  },
  {
    slug: "sales-attendants",
    title: "Sales Attendants",
    department: "Retail",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 30,000 / month",
    allowanceLabel: "Sales Bonus",
    allowanceValue: "Ksh. 2,000",
    image: salesImg,
    summary: "Help customers find what they need and keep the shop floor inviting.",
    responsibilities: [
      "Welcome and assist customers on the shop floor",
      "Restock shelves and ensure correct pricing and labelling",
      "Handle customer enquiries and complaints courteously",
      "Maintain product knowledge across categories",
    ],
    requirements: [
      "KCSE C- or higher",
      "Friendly, energetic and customer-focused",
      "Comfortable working shifts including weekends",
      "Prior retail experience is a plus",
    ],
  },
  {
    slug: "chefs",
    title: "Chefs",
    department: "Kitchen",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 50,000 / month",
    allowanceLabel: "Meal Allowance",
    allowanceValue: "Ksh. 4,000",
    image: chefImg,
    summary: "Prepare fresh, tasty meals and deli items for our in-store customers.",
    responsibilities: [
      "Prepare meals according to QuickMart recipes and standards",
      "Maintain kitchen hygiene and food safety standards",
      "Manage kitchen stock and minimise wastage",
      "Plan daily menus with the supervisor",
    ],
    requirements: [
      "Diploma/Certificate in Food Production or Culinary Arts",
      "Valid food handler's certificate",
      "2+ years' experience in a busy kitchen",
      "Knowledge of local and continental cuisine",
    ],
  },
  {
    slug: "warehouse-supervisor",
    title: "Warehouse Supervisor",
    department: "Management",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 55,000 / month",
    allowanceLabel: "Leadership Bonus",
    allowanceValue: "Ksh. 8,000",
    image: supervisorImg,
    summary: "Lead the warehouse team and make sure stock is received, stored and dispatched on time.",
    responsibilities: [
      "Supervise loaders, store keepers and warehouse staff",
      "Plan daily operations, shifts and stock movement",
      "Ensure compliance with safety and quality standards",
      "Track KPIs and report to branch management",
    ],
    requirements: [
      "Degree/Diploma in Supply Chain or related field",
      "3+ years' supervisory experience in retail/warehousing",
      "Strong leadership and reporting skills",
      "Proficient in ERP/inventory systems",
    ],
  },
  {
    slug: "guards",
    title: "Guards",
    department: "Security",
    type: "Full-time",
    location: "QuickMart branches – Kenya",
    pay: "Ksh. 32,000 / month",
    allowanceLabel: "Night Allowance",
    allowanceValue: "Ksh. 3,500",
    image: guardImg,
    summary: "Protect customers, staff and property at all QuickMart locations.",
    responsibilities: [
      "Monitor entrances, exits and CCTV feeds",
      "Conduct routine patrols and bag checks",
      "Respond to incidents and write accurate reports",
      "Support emergency drills and evacuations",
    ],
    requirements: [
      "KCSE certificate and certificate of good conduct",
      "Trained in basic security or PSRA registration",
      "Physically fit, alert and disciplined",
      "Available for day and night shifts",
    ],
  },
];

export function getJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}
