import React from 'react';
import styles from './UserRegistration.module.css';
import type { User, FormErrors } from './types';
import InputField from '../../../../components/ui/InputField';
import SelectField from '../../../../components/ui/SelectField';
import Button from '../../../../components/ui/Button';

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
              <InputField 
                htmlFor="fullName"
                name="fullName"
                type="text"
                labelText="Full Name"
                value={formData.fullName}
                onChange={onInputChange}
                className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                labelClass={styles.label}
                error={errors.fullName}
                errorsClass={styles.errorText}
              />
            </div>
            
            <div className={styles.formGroup}>
              <InputField 
                htmlFor="email"
                name="email"
                type="email"
                labelText="Email Address"
                value={formData.email}
                onChange={onInputChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                labelClass={styles.label}
                error={errors.email}
                errorsClass={styles.errorText}
              />
            </div>
            
            <div className={styles.formGroup}>
              <InputField 
                htmlFor="address"
                name="address"
                type="text"
                labelText="Address / Street"
                value={formData.address}
                onChange={onInputChange}
                className={`${styles.input} ${errors.address ? styles.inputError : ''}`}
                labelClass={styles.label}
                error={errors.address}
                errorsClass={styles.errorText}
              />
            </div>
            
            <div className={styles.formGroup}>
              <InputField 
                htmlFor="city"
                name="city"
                type="text"
                labelText="City"
                value={formData.city}
                onChange={onInputChange}
                className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
                labelClass={styles.label}
                error={errors.city}
                errorsClass={styles.errorText}
              />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <SelectField 
                htmlFor="country"
                name="country"
                labelText="Country / region"
                value={formData.country}
                onChange={onInputChange}
                options={countries}
                className={`${styles.select} ${errors.country ? styles.inputError : ''}`}
                labelClass={styles.label}
                error={errors.country}
                errorsClass={styles.errorText}
              />
            </div>
          </div>
          
          <div className={styles.formActions}>
            {isEditing && (
              <Button type="button" onClick={onCancel} className={`${styles.btn} ${styles.btnSecondary}`}>
                Cancel
              </Button>
            )}
            <Button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
              {isEditing ? 'Update' : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;