const signedOutLinks = document.querySelectorAll(".signed-out");
const signedInLinks = document.querySelectorAll(".signed-in");

// Listen for the auth status change
auth.onAuthStateChanged((user) => {
  if (user) {
    // if user is logged in
    db.collection("guides")
      .orderBy("title")
      .get()
      .then((snapshot) => {
        setupGuides(snapshot.docs);

        // After guides are shown we'll hide and show the required links
        signedInLinks.forEach((link) => {
          link.style.display = "block";
        });

        signedOutLinks.forEach((link) => {
          link.style.display = "none";
        });
      });
  } else {
    setupGuides([]);
    signedInLinks.forEach((link) => {
      link.style.display = "none";
    });

    signedOutLinks.forEach((link) => {
      link.style.display = "block";
    });
  }
});

// signup

const signupForm = document.querySelector(".signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm["email"].value;
  const password = signupForm["password"].value;
  console.log(email, password);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      signupForm.reset();
      const SignupModal = document.querySelector("#SignupModal");
      $("#SignupModal").modal("hide");
    })
    .catch((err) => {
      console.log("Error: Couldn't signup the User");
    });
});

// signout

const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});

// login

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      loginForm.reset();
      const LoginModal = document.querySelector("#LoginModal");
      $("#LoginModal").modal("hide");
    })
    .catch((err) => {
      console.log("ERROR: Could not login the user");
    });
});
