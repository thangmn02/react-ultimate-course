import React from 'react';
import styles from './UserRegistration.module.css';
import type { User } from './types';
import Button from '../../../../components/ui/Button';

interface RegisteredUsersTableProps {
  users: User[];
  paginatedUsers: User[];
  currentPage: number;
  totalPages: number;
  onSelectEdit: (user: User) => void;
  onDelete: (id: string) => void;
  onPageChange: (page: number) => void;
}

const RegisteredUsersTable: React.FC<RegisteredUsersTableProps> = ({ 
  users, paginatedUsers, currentPage, totalPages, onSelectEdit, onDelete, onPageChange 
}) => {
  return (
    <div className={styles.tableCard}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableHeaderCell}>FULL NAME</th>
            <th className={styles.tableHeaderCell}>EMAIL ADDRESS</th>
            <th className={styles.tableHeaderCell}>ADDRESS</th>
            <th className={styles.tableHeaderCell}>CITY</th>
            <th className={styles.tableHeaderCell}>COUNTRY</th>
            <th className={styles.tableHeaderCell}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.length > 0 ? paginatedUsers.map(user => (
            <tr key={user.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{user.fullName}</td>
              <td className={styles.tableCell}>{user.email}</td>
              <td className={styles.tableCell}>{user.address}</td>
              <td className={styles.tableCell}>{user.city}</td>
              <td className={styles.tableCell}>{user.country}</td>
              <td className={styles.tableCell}>
                <Button 
                  onClick={() => onSelectEdit(user)} 
                  className={`${styles.actionBtn} ${styles.editBtn}`}
                >
                  Edit
                </Button>
                <Button 
                  onClick={() => onDelete(user.id)} 
                  className={`${styles.actionBtn} ${styles.deleteBtn}`}
                >
                  Delete
                </Button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={6} className={styles.emptyState}>
                No users found. Create one above!
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
      {users.length > 0 && (
        <div className={styles.pagination}>
          <span className={styles.paginationInfo}>Showing {paginatedUsers.length} entries</span>
          <div className={styles.paginationControls}>
            <Button 
              onClick={() => onPageChange(Math.max(1, currentPage - 1))} 
              disabled={currentPage === 1}
              className={`${styles.pageBtn} ${currentPage === 1 ? styles.disabled : ''}`}
            >
              ← Prev
            </Button>
            <Button 
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} 
              disabled={currentPage === totalPages}
              className={`${styles.pageBtn} ${currentPage === totalPages ? styles.disabled : ''}`}
            >
              Next →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisteredUsersTable;