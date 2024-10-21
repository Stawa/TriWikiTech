import admin from "firebase-admin";
import { cert, getApps as getAdminApps } from "firebase-admin/app";
import {
  DocumentData,
  Firestore,
  getFirestore,
  WhereFilterOp,
} from "firebase-admin/firestore";
import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

function initializeAdminApp() {
  if (getAdminApps().length === 0) {
    return admin.initializeApp({
      credential: cert({
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        clientEmail: import.meta.env.VITE_FIREBASE_CLIENT_EMAIL,
        privateKey: import.meta.env.VITE_FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      }),
    });
  }
  return admin.app();
}

const adminApp = initializeAdminApp();
const firestore: Firestore = getFirestore(adminApp);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

function initializeClientApp() {
  return getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
}

const app = initializeClientApp();
const auth = getAuth(app);

interface FirestoreService {
  addDocument: (
    collection: string,
    id: string,
    data: DocumentData
  ) => Promise<string>;
  getDocument: (collection: string, id: string) => Promise<DocumentData | null>;
  updateDocument: (
    collection: string,
    id: string,
    data: DocumentData
  ) => Promise<void>;
  setDocument: (
    collection: string,
    id: string,
    data: DocumentData
  ) => Promise<void>;
  deleteDocument: (collection: string, id: string) => Promise<void>;
  queryCollection: (
    collection: string,
    field: string,
    operator: WhereFilterOp,
    value: unknown
  ) => Promise<DocumentData[]>;
}

function createFirestoreService(db: Firestore): FirestoreService {
  return {
    async addDocument(collection, id, data) {
      await db.collection(collection).doc(id).set(data);
      return id;
    },

    async getDocument(collection, id) {
      const docRef = await db.collection(collection).doc(id).get();
      return docRef.exists ? (docRef.data() as DocumentData) : null;
    },

    async updateDocument(collection, id, data) {
      await db.collection(collection).doc(id).update(data);
    },

    async setDocument(collection, id, data) {
      await db.collection(collection).doc(id).set(data, { merge: true });
    },

    async deleteDocument(collection, id) {
      await db.collection(collection).doc(id).delete();
    },

    async queryCollection(collection, field, operator, value) {
      const querySnapshot = await db
        .collection(collection)
        .where(field, operator, value)
        .get();
      return querySnapshot.docs.map((doc) => doc.data());
    },
  };
}

export const firestoreService = createFirestoreService(firestore);
export { auth, adminApp, app };
