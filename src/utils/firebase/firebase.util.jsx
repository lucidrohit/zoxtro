import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCkpKkyBbIx2hq51pXiOJr8WaMD1S7l3R8",
  authDomain: "zoxtro-mail-list.firebaseapp.com",
  projectId: "zoxtro-mail-list",
  storageBucket: "zoxtro-mail-list.appspot.com",
  messagingSenderId: "255894575260",
  appId: "1:255894575260:web:9e67012c55828cc2a57559",
  measurementId: "G-M73Y2F8KZT"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)