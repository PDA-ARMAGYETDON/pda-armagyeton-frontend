// firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Firebase 초기화
firebase.initializeApp({
  apiKey: "AIzaSyC39CEdeLYLp_i5IDflUqAmiGqxffBQ9a8",
  authDomain: "armagyetdon-5d046.firebaseapp.com",
  projectId: "armagyetdon-5d046",
  storageBucket: "armagyetdon-5d046.appspot.com",
  messagingSenderId: "477469889082",
  appId: "1:477469889082:web:20f92db595cf57bf8bdb03",
});

const messaging = firebase.messaging();

// 백그라운드 메시지 수신 처리
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon:
      payload.notification.icon ||
      " ttps://www.armagyetdon.site/images/logo.png", // 아이콘 설정
    data: {
      url: "https://www.armagyetdon.site", // 알림 클릭 시 이동할 URL 설정
    },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 알림 클릭 이벤트 핸들러 추가
self.addEventListener("notificationclick", function (event) {
  console.log("[firebase-messaging-sw.js] Notification click Received.");

  event.notification.close(); // 알림을 닫기

  // 클릭 시 www.armagyetdon.site로 이동
  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        const urlToOpen = event.notification.data.url;

        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.url === urlToOpen && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});
