// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAeOCNUQavq9VvABuifFax0XV4vSrcV7nc",
  authDomain: "fir-book-app-ad6e0.firebaseapp.com",
  projectId: "fir-book-app-ad6e0",
  storageBucket: "fir-book-app-ad6e0.appspot.com",
  messagingSenderId: "1033619878272",
  appId: "1:1033619878272:web:25006ee1eaf47d73a99165"
};

// Initialize Firebase + Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ADD BOOK
const form = document.getElementById("bookForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newBook = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    price: Number(document.getElementById("price").value),
    imageURL: document.getElementById("imageURL").value
  };

  await addDoc(collection(db, "books"), newBook);

  form.reset();
});

// FETCH + DISPLAY BOOKS (REALTIME)
const bookList = document.getElementById("bookList");

function renderBooks(snapshot) {
  bookList.innerHTML = "";

  snapshot.forEach(docData => {
    const book = docData.data();
    const id = docData.id;

    bookList.innerHTML += `
      <div class="book-card">
        <img src="${book.imageURL}" alt="cover">
        <h3>${book.title}</h3>
        <p><b>Author:</b> ${book.author}</p>
        <p><b>Price:</b> ₹${book.price}</p>

        <button onclick="updateAuthor('${id}', '${book.author}')">Update Author</button>
        <button onclick="deleteBook('${id}')">Delete</button>
      </div>
    `;
  });
}

// Realtime listener
onSnapshot(collection(db, "books"), renderBooks);

// DELETE BOOK
window.deleteBook = async function(id) {
  await deleteDoc(doc(db, "books", id));
};

// UPDATE AUTHOR
window.updateAuthor = async function(id, oldAuthor) {
  const newAuthor = prompt("Enter new author name:", oldAuthor);

  if (newAuthor) {
    await updateDoc(doc(db, "books", id), { author: newAuthor });
  }
};
