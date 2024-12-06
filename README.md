
# Auto Web Refresher  

Auto Web Refresher is a Chrome extension designed to automatically refresh web pages at user-defined intervals. It offers a clean and intuitive interface to manage refresh cycles, making it ideal for tasks like monitoring live updates or refreshing dashboards.

---

## Features  

- Customizable refresh intervals in seconds.  
- Start and stop refresh functionality with the click of a button.  
- User-friendly interface with a minimalist design.  
- Works seamlessly across any active tab.  
- Lightweight and efficient.

---

## Installation  

1. Clone or download the repository:
    ```bash
    git clone https://github.com/princekpankaj/auto-web-refresher.git
    ```
2. Open Chrome and navigate to `chrome://extensions/`.  
3. Enable **Developer Mode** (top-right corner).  
4. Click **Load unpacked** and select the project folder.  
5. The extension will now appear in the Chrome toolbar.

---

## How to Use  

1. Click the Auto Web Refresher icon in the Chrome toolbar.  
2. Enter the desired refresh interval in seconds.  
3. Click **Start** to begin refreshing the current page.  
4. To stop refreshing, click **Stop**.  

---

## Project Files  

- **`manifest.json`**: Configures the extension's permissions and behavior.  
- **`popup.html`**: Provides the extension's interface with a sleek design.  
- **`popup.js`**: Handles the logic for managing refresh intervals.  
- **`background.js`**: Runs background scripts for the extension.  
- **`icons/`**: Contains extension icons in various sizes (16x16, 48x48, 128x128).

---

## Technologies Used  

- **HTML, CSS**: For the user interface design.  
- **JavaScript**: For functionality and Chrome Extension API integration.  
- **Chrome Extensions API**: To interact with browser tabs and manage background tasks.

---

## Code Snippet  

**Popup Interface Example (`popup.html`)**:  
```html
<h2>Auto Refresh</h2>
<label for="timeInput">Refresh Interval (sec):</label>
<input type="number" id="timeInput" min="1" placeholder="Enter time in seconds">
<div>
    <button id="startButton">Start</button>
    <button id="stopButton">Stop</button>
</div>
```

---

## Future Enhancements  

- Add support for specific tab selection.  
- Option to save refresh intervals for multiple websites.  
- Notifications after every refresh cycle.  
- Dark mode for the interface.  

---

## Contribution  

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.  

---

## License  

This project is licensed under the MIT License.  
