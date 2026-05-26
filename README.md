# Interactive Training Modules

NWE Brands SBT Team training application. Electron desktop app, packaged as a Windows installer + portable .exe.

## Building locally

```bash
npm install
npm start         # run in dev
npm run build     # produce Windows installer + portable in dist/
```

## Auto-build via GitHub Actions

On every push to `main`, `.github/workflows/build.yml` runs `electron-builder` and uploads:
- `Training-Modules-Setup-1.1.0.exe` (NSIS installer)
- `Training-Modules-Portable-1.1.0.exe` (portable)

Download them from the run's **Artifacts** section.

## Project layout

```
main.js                       Electron entry — loads index.html
package.json                  Build config (electron-builder)
index.html                    Self-contained app (1.89 MB bundled)
build/widget.ico              App icon
build/icon.png                256×256 fallback icon
.github/workflows/build.yml   GitHub Actions build workflow
```
