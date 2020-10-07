// Listen for the auth status change
auth.onAuthStateChanged((user) => {
  console.log(user); // onLogin user is present as object
  // onLogout user is null
  if (user) {
    console.log("User is Logged In");
  } else {
    console.log("User is logged Out");
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

// singout

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
