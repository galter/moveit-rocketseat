import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges() {
  const { challengeCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.CompleteChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  )
}