// firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyC39CEdeLYLp_i5IDflUqAmiGqxffBQ9a8",
  authDomain: "armagyetdon-5d046.firebaseapp.com",
  projectId: "armagyetdon-5d046",
  storageBucket: "armagyetdon-5d046.appspot.com",
  messagingSenderId: "477469889082",
  appId: "1:477469889082:web:20f92db595cf57bf8bdb03",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
