import { initFirestore } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { Firestore, DocumentData } from "firebase-admin/firestore";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import admin from "firebase-admin";

const firestore: Firestore = initFirestore({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  }),
});

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const adminApp =
  admin.apps.length === 0 ? admin.initializeApp(firebaseConfig) : admin.app();
const firestoreAuth = getAuth(app);

class FirestoreService {
  private db: Firestore;

  constructor() {
    this.db = firestore;
  }

  async addDocument(
    collection: string,
    id: string,
    data: DocumentData
  ): Promise<string> {
    await this.db.collection(collection).doc(id).set(data);
    return id;
  }

  async getDocument(
    collection: string,
    id: string
  ): Promise<DocumentData | null> {
    const docRef = await this.db.collection(collection).doc(id).get();
    return docRef.exists ? (docRef.data() as DocumentData) : null;
  }

  async updateDocument(
    collection: string,
    id: string,
    data: DocumentData
  ): Promise<void> {
    await this.db.collection(collection).doc(id).update(data);
  }

  async setDocument(
    collection: string,
    id: string,
    data: DocumentData
  ): Promise<void> {
    await this.db.collection(collection).doc(id).set(data, { merge: true });
  }

  async deleteDocument(collection: string, id: string): Promise<void> {
    await this.db.collection(collection).doc(id).delete();
  }

  async queryCollection(
    collection: string,
    field: string,
    operator: FirebaseFirestore.WhereFilterOp,
    value: any
  ): Promise<DocumentData[]> {
    const querySnapshot = await this.db
      .collection(collection)
      .where(field, operator, value)
      .get();
    return querySnapshot.docs.map((doc) => doc.data());
  }
}

export const firestoreService = new FirestoreService();
export const firestoreAdapter = FirestoreAdapter(firestore);
export { firestoreAuth, adminApp, app };
