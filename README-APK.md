# Pixel RPG — HP (APK) + Komputer/Laptop

Satu kode game (`www/index.html`) dipakai untuk semua perangkat:
- **HP / tablet**: kontrol sentuh (joystick & tombol) muncul otomatis.
- **Komputer / laptop**: keyboard + mouse (F11 = layar penuh).

> Catatan penting: file **APK hanya bisa dipasang di Android**. Untuk komputer pakai salah satu: **.exe (Electron)**, **PWA (install dari Chrome/Edge)**, atau jalankan APK lewat emulator Android (BlueStacks/Android Studio).

## 1) Buat APK Android (Capacitor)
Butuh: Node.js 18+, Android Studio (sudah termasuk JDK & SDK).
```bash
npm install
npx cap add android
npx cap sync android
npx cap open android      # di Android Studio: Build > Build Bundle(s)/APK(s) > Build APK(s)
```
Atau lewat terminal: `npm run android:apk` → hasil di `android/app/build/outputs/apk/debug/app-debug.apk`.
Untuk rilis Play Store: Build > Generate Signed Bundle / APK.
Izin INTERNET sudah otomatis (dibutuhkan untuk fitur online/multiplayer).

### Cara tanpa Android Studio (PWABuilder)
1. Upload isi folder `www/` ke hosting HTTPS gratis (GitHub Pages / Netlify / Vercel).
2. Buka https://www.pwabuilder.com → masukkan URL → pilih **Android** (APK/AAB) atau **Windows**.

## 2) Aplikasi Windows / Mac / Linux (Electron)
```bash
npm install
npm run electron        # coba langsung
npm run dist:win        # hasil .exe di folder dist/   (dist:mac / dist:linux untuk OS lain)
```

## 3) Tanpa install: PWA
Hosting `www/` di HTTPS, buka di Chrome/Edge (komputer) atau Chrome (HP) → menu **Install app / Tambahkan ke layar utama**. Bisa dimainkan offline setelah dibuka sekali.

## Tes cepat di komputer
`npm run serve` lalu buka http://localhost:8080
