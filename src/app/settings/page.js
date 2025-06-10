'use client';

import React, { useState } from 'react';
import styles from './Settings.module.css';
import { FaVolumeUp, FaRegLightbulb, FaMoon, FaSun } from 'react-icons/fa';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(70);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSave = () => {
    alert("Settings Saved!");
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <h1 className={styles.title}>Settings</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>General</h2>
        <div className={styles.settingItem}>
          <span className={styles.switchLabel}>
            {isDarkMode ? <FaMoon className={styles.icon} /> : <FaSun className={styles.icon} />}
            Dark Mode
          </span>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className={styles.switchInput}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Audio</h2>
        <div className={styles.settingItem}>
          <label className={styles.sliderLabel}>
            <FaVolumeUp className={styles.icon} />
            Volume
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className={styles.sliderInput}
          />
          <span className={styles.valueLabel}>{volume}%</span>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Display</h2>
        <div className={styles.settingItem}>
          <label className={styles.sliderLabel}>
            <FaRegLightbulb className={styles.icon} />
            Brightness
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
            className={styles.sliderInput}
          />
          <span className={styles.valueLabel}>{brightness}%</span>
        </div>
      </section>
      <button className={styles.saveButton} onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
}
