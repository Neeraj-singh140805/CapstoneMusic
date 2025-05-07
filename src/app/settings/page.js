// src/app/settings/page.js

'use client'; // Make sure to mark as a client component to use React hooks

import React, { useState } from 'react';
import styles from './Settings.module.css';
import { FaVolumeUp, FaRegLightbulb, FaMusic } from 'react-icons/fa';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode toggle
  const [volume, setVolume] = useState(50); // Volume slider state
  const [brightness, setBrightness] = useState(70); // Brightness slider state

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSave = () => {
    // Logic to save the settings
    console.log("Settings Saved");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>

      {/* General Settings Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>General</h2>
        <div className={styles.settingsList}>
          <div className={styles.settingItem}>
            <div className={styles.toggleSwitch}>
              <span className={styles.switchLabel}>Dark Mode</span>
              <input
                type="checkbox"
                className={styles.switchInput}
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Audio Settings Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Audio</h2>
        <div className={styles.settingsList}>
          <div className={styles.settingItem}>
            <div className={styles.sliderWrapper}>
              <span className={styles.sliderLabel}><FaVolumeUp /> Volume</span>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                className={styles.sliderInput}
                onChange={(e) => setVolume(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Display Settings Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Display</h2>
        <div className={styles.settingsList}>
          <div className={styles.settingItem}>
            <div className={styles.sliderWrapper}>
              <span className={styles.sliderLabel}><FaRegLightbulb /> Brightness</span>
              <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                className={styles.sliderInput}
                onChange={(e) => setBrightness(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button className={styles.saveButton} onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
}
