import { 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot,
  collection,
  query,
  orderBy,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocFromServer
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { SiteContent, PricingPlan, Testimonial, Trainer, Lead } from "../types";

// Error handling helper
enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// --- Site Content ---
const SITE_CONTENT_PATH = "siteContent/main";

export const defaultSiteContent: SiteContent = {
  heroTitle: "TRANSFORM YOUR BODY AT AIMFIT GYM",
  heroSubtitle: "Build strength, lose fat, and gain confidence with expert guidance. Affordable, professional, and results-driven training for everyone.",
  aboutTitle: "BUILT FOR RESULTS, NOT EXCUSES",
  aboutContent: "AimFit Gym is dedicated to helping you achieve real fitness results through discipline, consistency, and expert support. We don't just provide equipment; we provide a roadmap to a better you.",
  whatsappNumber: "919876543210",
  whatsappMessage: "Hi AimFit Gym! I'm interested in joining. Can you help me?",
  address: "123 Fitness Street, Sector 45, Gurgaon, Haryana, India",
  phone: "+91 98765 43210",
  openingHours: "Mon - Sat: 5:00 AM - 10:00 PM | Sun: 7:00 AM - 12:00 PM",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913120413!2d77.0330710761314!3d28.50290038933066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5e48537121542!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1711530000000!5m2!1sen!2sin"
};

export function subscribeToSiteContent(callback: (content: SiteContent) => void) {
  return onSnapshot(doc(db, SITE_CONTENT_PATH), (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.data() as SiteContent);
    } else {
      callback(defaultSiteContent);
    }
  }, (error) => handleFirestoreError(error, OperationType.GET, SITE_CONTENT_PATH));
}

export async function updateSiteContent(content: SiteContent) {
  try {
    await setDoc(doc(db, SITE_CONTENT_PATH), content);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, SITE_CONTENT_PATH);
  }
}

// --- Leads ---
const LEADS_COLLECTION = "leads";

export function subscribeToLeads(callback: (leads: Lead[]) => void) {
  const q = query(collection(db, LEADS_COLLECTION), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const leads = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Lead));
    callback(leads);
  }, (error) => handleFirestoreError(error, OperationType.LIST, LEADS_COLLECTION));
}

export async function addLead(lead: Omit<Lead, "id" | "createdAt" | "status">) {
  try {
    await addDoc(collection(db, LEADS_COLLECTION), {
      ...lead,
      createdAt: new Date().toISOString(),
      status: "new"
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, LEADS_COLLECTION);
  }
}

export async function updateLeadStatus(id: string, status: Lead["status"]) {
  try {
    await updateDoc(doc(db, LEADS_COLLECTION, id), { status });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${LEADS_COLLECTION}/${id}`);
  }
}

// Connection Test
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. ");
    }
  }
}
testConnection();
