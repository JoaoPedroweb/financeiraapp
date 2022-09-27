import { useState } from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './assets/styles/global';
import { Dashboard } from './components/Deshboard';
import { TransactionProvider } from './hooks/useTransactions';
import { NewTransactionModal } from './components/NewTransactionModal';



export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal }/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen }
        onRequestClose = { handleCloseNewTransactionModal }
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}


export default App;
