
# Rugby & Track Workout (PWA)

Mobile-friendly, offline-capable workout tracker for a 13-year-old rugby + track athlete. Machine-only plan with no overhead press/vertical spine loading.

## 🚀 Quick Start (GitHub Pages)

1. **Create a new GitHub repository** (e.g., `rugby-track-workout`).
2. **Upload** the contents of this folder (keep files at the **repo root**).
3. Go to **Settings ➜ Pages**:
   - **Build and deployment ➜ Source**: *Deploy from a branch*
   - **Branch**: `main` (root `/`)
4. Click **Save** and wait 1–3 minutes. Your site will appear at:
   - `https://<your-username>.github.io/<your-repo>/`
5. Open the site on your phone and choose **Install App** (or *Add to Home Screen*).

> Tip: If you change any file later, commit & push—GitHub Pages redeploys automatically.

## 🧭 App Structure
```
index.html            # UI: Workout / Checklist / Notes
styles.css            # Mobile-first styles
app.js                # Logic, localStorage saving, export, install
workout_data.json     # All exercises, machines, targets, instructions
manifest.webmanifest  # PWA metadata (name, icons)
service-worker.js     # Offline caching
icons/icon-192.png
icons/icon-512.png
```

## ✏️ Editing the Plan
- Update **workout_data.json** to change exercises, targets, or instructions.
- Keep paths as-is. The service worker caches files for offline use.

## 📱 iOS & Android Notes
- **Android (Chrome/Edge)**: You’ll see an **Install** prompt; or use ⋮ menu ➜ *Add to Home screen*.
- **iOS (Safari)**: Tap **Share** ➜ *Add to Home Screen*. Offline works after the first load.

## 🔒 Privacy
No accounts or servers. All logs are saved **locally** in the device’s browser storage. Use **Export Progress** to download your data.

## 🛠 Troubleshooting
- If updates don’t appear, refresh twice or go to **Site Settings ➜ Clear storage** (service worker cache).
- GitHub Pages must serve from `https://`; the PWA install button appears only when served over HTTPS.

---

**Safety**: This is general fitness guidance. For sharp/pinching pain, stop and consult a coach/parent.
