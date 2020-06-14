import React from 'react';
import styles from './ExampleComponent.module.scss';
import { ExampleComponentProps } from './ExampleComponent.types';

const ExampleComponent: React.FC<ExampleComponentProps> = ({ name }) => (
  <div className={styles.container}>
    Hello {name}!
  </div>
);

export default ExampleComponent;
