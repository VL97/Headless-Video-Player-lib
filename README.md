# 🎥 headless-video-player-lib

A **headless React hook** to build custom video players with full control over playback, volume, seek, fullscreen, and loading state — without relying on native `<video>` controls.

> 🧠 Focus on the UI. We handle the video logic.

---

## ✨ Features

- 🔁 Play/Pause toggle  
- 🔇 Mute/Unmute toggle  
- 📊 Seek control and progress tracking  
- ⏱ Duration and current time exposure  
- 🧭 Loading state tracking  
- 🔲 Fullscreen toggle  
- 🔌 Headless: Bring your own UI  

---

## 📦 Installation

```bash
npm install headless-video-player-lib
# or
yarn add headless-video-player-lib
```
---

## 📘 API Reference

### `usePlayer(): PlayerControls`

Returns an object containing refs, state, and control methods for interacting with the `<video>` element and its container.

---

### 🪝 Returned Values

#### 📍 Refs

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>videoRef</code></td>
      <td><code>RefObject&lt;HTMLVideoElement&gt;</code></td>
      <td>Attach to your <code>&lt;video&gt;</code> element.</td>
    </tr>
    <tr>
      <td><code>containerRef</code></td>
      <td><code>RefObject&lt;HTMLElement&gt;</code></td>
      <td>Attach to a container <code>&lt;div&gt;</code> for fullscreen toggle.</td>
    </tr>
  </tbody>
</table>

---

#### 🧠 State

<table>
  <thead>
    <tr>
      <th>State</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>isPlaying</code></td>
      <td><code>boolean</code></td>
      <td>Whether the video is currently playing.</td>
    </tr>
    <tr>
      <td><code>isMuted</code></td>
      <td><code>boolean</code></td>
      <td>Whether the video is muted.</td>
    </tr>
    <tr>
      <td><code>progress</code></td>
      <td><code>number</code></td>
      <td>Current playback time (in seconds).</td>
    </tr>
    <tr>
      <td><code>duration</code></td>
      <td><code>number</code></td>
      <td>Total video duration (in seconds).</td>
    </tr>
    <tr>
      <td><code>isFullscreen</code></td>
      <td><code>boolean</code></td>
      <td>Whether the video is in fullscreen mode.</td>
    </tr>
    <tr>
      <td><code>isLoading</code></td>
      <td><code>boolean</code></td>
      <td>Whether the video is buffering or loading.</td>
    </tr>
  </tbody>
</table>

---

#### ⚙️ Control Methods

<table>
  <thead>
    <tr>
      <th>Function</th>
      <th>Arguments</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>togglePlay()</code></td>
      <td>None</td>
      <td>Toggles between play and pause.</td>
    </tr>
    <tr>
      <td><code>toggleMute()</code></td>
      <td>None</td>
      <td>Toggles mute/unmute.</td>
    </tr>
    <tr>
      <td><code>handleSeek(seconds)</code></td>
      <td><code>number</code></td>
      <td>Seeks to a specific time (in seconds).</td>
    </tr>
    <tr>
      <td><code>toggleFullscreen()</code></td>
      <td>None</td>
      <td>Enters or exits fullscreen mode for the container.</td>
    </tr>
  </tbody>
</table>

---

### 📌 Usage Notes

- Be sure to attach `videoRef` to a native `<video>` element.
- For fullscreen support, attach `containerRef` to the element that should enter fullscreen.
- Event listeners (play, pause, timeupdate, etc.) are automatically managed internally.

---


