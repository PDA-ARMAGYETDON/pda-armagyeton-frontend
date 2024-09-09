import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseApp } from "./firebaseConfig";
import axios from "axios";
import { SendFcmToken } from "../apis/apis";

export const requestFcmToken = async (userId) => {
  try {
    const messaging = getMessaging(firebaseApp);

    // 브라우저에서 푸시 알림 권한 요청
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Permission not granted for Notification");
    }

    // FCM 토큰 받기
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    });

    // 백엔드에 토큰 전송
    await SendFcmToken({ userId, fcmToken: token });
  } catch (error) {
    console.error("An error occurred while retrieving token:", error);
    return null;
  }
};
