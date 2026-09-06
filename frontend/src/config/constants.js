/**
 * Application constants and configuration
 */

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_BASE_URL = `${BACKEND_URL}/api`;

export const CATEGORIES = [
  "Electronics & Gadgets",
  "Books & Notes",
  "Clothing & Accessories",
  "Stationery & Study Supplies",
  "Hostel & Room Essentials",
  "Cycles & Mobility",
  "Sports & Fitness Gear",
  "Art/DIY & Miscellaneous",
  "Food & Homemade Items",
  "Student Services",
  "Event ads"
];

export const RAZORPAY_KEY_ID = process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_xxx';

export const EMERGENT_AUTH_CONFIG = {
  envId: process.env.REACT_APP_EMERGENT_ENV_ID || 'your-env-id',
  domain: 'https://demobackend.emergentagent.com'
};