# Pixel Open World RPG — jadi APK

## Cara A: build otomatis di GitHub (tanpa install apa pun)
1. Buat repository baru di github.com (boleh private).
2. Upload SEMUA isi folder ini (termasuk folder `.github` dan `www`).
3. Buka tab **Actions** → **Build APK** → **Run workflow**.
4. Tunggu ±5–10 menit sampai hijau, buka run-nya, bagian **Artifacts** → unduh `pixel-rpg-apk`.
5. Ekstrak zip-nya → `app-debug.apk` → kirim ke HP dan pasang
   (izinkan "Install dari sumber tidak dikenal").

## Cara B: build di komputer
Butuh Node.js 18+ dan Android Studio (atau JDK 17 + Android SDK).
```
npm install
npx cap add android
```
Tambahkan `android:screenOrientation="sensorLandscape"` di tag `<activity` pada
`android/app/src/main/AndroidManifest.xml`, lalu:
```
npx cap sync android
npx cap open android      # Build > Build APK(s)
```

## Update game
Ganti `www/index.html` dengan versi terbaru, lalu jalankan ulang workflow (Cara A)
atau `npx cap sync android` + build ulang (Cara B).

## Catatan
- Nama paket: `com.pixelrpg.game` (ubah di `capacitor.config.json` sebelum build pertama).
- APK ini berjenis *debug* — cukup untuk dipasang sendiri/dibagikan ke teman.
  Untuk Play Store perlu APK/AAB bertanda tangan (signed).
- Mode online butuh internet (Supabase / pustaka dari CDN). Mode solo tetap jalan offline.
