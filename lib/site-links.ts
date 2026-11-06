// Official Android APK published by https://www.fxpayout.com ("Download for Android").
// Verified: serves application/vnd.android.package-archive (FXPayout-1.0.0.apk) from the official app subdomain.
export const APP_DOWNLOAD_URL: string | null = 'https://app.fxpayout.com/download/android';

// Support contacts. Set a value to null to hide that item until a valid URL is available.
export const SUPPORT_LINKS: {
  cs1: string | null;
  cs2: string | null;
  ba: string | null;
  channel: string | null;
} = {
  cs1: 'https://wa.me/628212888890',
  // Customer Support 2 as published in the footer of https://www.fxpayout.com
  cs2: 'https://wa.me/6283147458687',
  // WhatsApp link of the BA contact. Not found in the repository, git history, or fxpayout.com.
  ba: null,
  channel: 'https://whatsapp.com/channel/0029VbBwSxf8fewzsFqX8B2f',
};
