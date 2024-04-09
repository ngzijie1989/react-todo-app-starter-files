import React from 'react';
import PageTitle from './component/PageTitle';
import styles from './styles/modules/app.module.scss';
import AppHeader from './component/AppHeader';
import AppContent from './component/AppContent';

function App() {
  return (
    <div className="container">
      <PageTitle>TO DO LIST</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
