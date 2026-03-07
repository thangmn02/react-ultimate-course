import { useState, useMemo } from 'react';
import styles from './UserRegistration.module.css';
import type { User, FormErrors } from './types';
import RegistrationForm from './UserForm';
import RegisteredUsersTable from './UserTable';

const COUNTRIES = ['Canada', 'USA', 'UK', 'Australia', 'Germany', 'France', 'Japan', 'Vietnam'];
const generateId = () => Math.random().toString(36).substring(2, 11);
const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const UserRegistration = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState({
    fullName: '', email: '', address: '', city: '', country: 'Canada'
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const showAlert = (type: 'success' | 'error', message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 3000);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country) newErrors.country = 'Country is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const saveUser = (e: React.FormEvent) => {
    console.log('abc')
    e.preventDefault();
    if (!validateForm()) {
      showAlert('error', 'Please fix the errors in the form');
      return;
    }
    
    if (editingId) {
      setUsers(prev => prev.map(user => user.id === editingId ? { ...formData, id: editingId } : user));
      showAlert('success', `Updated user: ${formData.fullName}`);
    } else {
      setUsers(prev => [...prev, { ...formData, id: generateId() }]);
      showAlert('success', `Created user: ${formData.fullName}`);
    }
    clearFormSelection();
  };

  const selectUserForEditing = (user: User) => {
    setFormData({ fullName: user.fullName, email: user.email, address: user.address, city: user.city, country: user.country });
    setEditingId(user.id);
    setErrors({});
  };

  const deleteUser = (id: string) => {
    const userToDelete = users.find(u => u.id === id);
    setUsers(prev => prev.filter(user => user.id !== id));
    showAlert('success', `Deleted user: ${userToDelete?.fullName}`);
    if (editingId === id) clearFormSelection();
  };

  const clearFormSelection = () => {
    setEditingId(null);
    setFormData({ fullName: '', email: '', address: '', city: '', country: 'Canada' });
    setErrors({});
  };

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  }, [users, currentPage]); // 10

  return (
    <div className={styles.container}>
      {alert && (
        <div className={`${styles.alert} ${styles[alert.type]}`}>
          {alert.message}
        </div>
      )}
      
      <RegistrationForm 
        formData={formData} 
        errors={errors} 
        isEditing={!!editingId}
        countries={COUNTRIES}
        onInputChange={handleInputChange}
        onSave={saveUser}
        onCancel={clearFormSelection}
      />

      <RegisteredUsersTable 
        users={users}
        paginatedUsers={paginatedUsers}
        currentPage={currentPage}
        totalPages={totalPages}
        onSelectEdit={selectUserForEditing}
        onDelete={deleteUser}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UserRegistration;