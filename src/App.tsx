import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Deshboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
 
  function handleOpenNewTransactionModal() {
     setIsNewTransactionModalOpen(true);

  }
  function handleCloseNewTransacitonModal() {
     setIsNewTransactionModalOpen(false);

  }
  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

     <Dashboard />

     <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransacitonModal}

      />

      <GlobalStyle />
    </>
  );
}

export default App;
