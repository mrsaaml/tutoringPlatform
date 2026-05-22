import { useEffect, useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import styles from './LMS.module.css';
import { API_URL, authFetch } from '../../api';

export const LMS = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  
    useEffect(() => {
  fetch(`${API_URL}/api/lms`)
    .then(res => res.json())
    .then(data => {
      setMaterials(Array.isArray(data) ? data : []);
      setLoading(false);
    });
}, []);


  return (
    <div className={styles.lmsPage}>
      <Navigation />
      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {materials.map(item => (
            <div key={item.id} className={styles.card}>
              <h2 className="title">{item.name}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                View <span>⭢</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};