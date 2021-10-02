import React from 'react'
import styles from './Input.module.css'

export function Input({ label, type, name, value, error, onChange, onBlur }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
