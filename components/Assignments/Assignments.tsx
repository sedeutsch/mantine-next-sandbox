import React from 'react';
import styles from './Assignments.module.css';

interface AssignmentsProps {
  children: string;
}

export const Assignments: React.FC<AssignmentsProps> = ({ children }) => (
  <div className={styles.assignment}>
    <div className={styles.icon}>
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="solar:box-minimalistic-bold-duotone">
          <g id="Group">
            <path
              id="Vector"
              d="M5.74228 13.4923C7.0227 14.1646 7.6629 14.5 8.35124 14.5V7.20833L1.52478 3.61572C1.51486 3.63189 1.50514 3.64817 1.49561 3.66458C1.05957 4.40395 1.05957 5.32489 1.05957 7.16603V7.25135C1.05957 9.09176 1.05957 10.0127 1.49488 10.7521C1.93092 11.4922 2.71551 11.9042 4.28395 12.7274L5.74228 13.4923Z"
              fill="#D2D2D2"
            />
            <path
              id="Vector_2"
              opacity="0.45"
              d="M12.4179 1.69008L10.9596 0.924456C9.6799 0.252894 9.03969 -0.083252 8.35136 -0.083252C7.6623 -0.083252 7.02282 0.252165 5.7424 0.924456L4.28407 1.69008C2.7499 2.49508 1.96532 2.90633 1.5249 3.61508L8.35136 7.20842L15.1778 3.61581C14.7359 2.90633 13.9528 2.49508 12.4179 1.69008Z"
              fill="#E3E3E3"
            />
            <path
              id="Vector_3"
              opacity="0.85"
              d="M15.2077 3.66458C15.1979 3.64817 15.1879 3.63188 15.1778 3.61572L8.35132 7.20833V14.5C9.03965 14.5 9.67986 14.1646 10.9603 13.4923L12.4186 12.7267C13.987 11.9034 14.7716 11.4922 15.2077 10.7521C15.643 10.0127 15.643 9.09176 15.643 7.25208V7.16676C15.643 5.32562 15.643 4.40395 15.2077 3.66458Z"
              fill="#483E86"
            />
          </g>
        </g>
      </svg>
    </div>
    <div className={styles.assignmentTitle}>{children}</div>
  </div>
);
