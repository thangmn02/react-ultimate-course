import React from 'react';
import styles from './UserRegistration.module.css';
import type { User, FormErrors } from './types'; // Đã thêm 'type'

interface RegistrationFormProps {
  formData: Omit<User, 'id'>;
  errors: FormErrors;
  isEditing: boolean;
  countries: string[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSave: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ 
  formData, errors, isEditing, countries, onInputChange, onSave, onCancel 
}) => {
  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Responsive Form</h2>
      <p className={styles.formSubtitle}>Form is mobile responsive. Give it a try.</p>
      
      <div className={styles.formSection}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Personal Details</h3>
          <p className={styles.sectionSubtitle}>Please fill out all the fields.</p>
        </div>
        
        <form onSubmit={onSave} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.label}>Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={onInputChange}
                className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
              />
              {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="address" className={styles.label}>Address / Street</label>
              <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={onInputChange}
                className={`${styles.input} ${errors.address ? styles.inputError : ''}`}
              />
              {errors.address && <span className={styles.errorText}>{errors.address}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="city" className={styles.label}>City</label>
              <input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={onInputChange}
                className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
              />
              {errors.city && <span className={styles.errorText}>{errors.city}</span>}
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="country" className={styles.label}>Country / region</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={onInputChange}
                className={`${styles.select} ${errors.country ? styles.inputError : ''}`}
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {errors.country && <span className={styles.errorText}>{errors.country}</span>}
            </div>
          </div>
          
          <div className={styles.formActions}>
            {isEditing && (
              <button type="button" onClick={onCancel} className={`${styles.btn} ${styles.btnSecondary}`}>
                Cancel
              </button>
            )}
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
              {isEditing ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;