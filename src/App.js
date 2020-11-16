import './App.css';
import { Warehouse } from './Warehouse';
import { WarehouseProvider } from './WarehouseContext';
import { Dummy } from './Dummy';
import { DummyError } from './DummyError';
import { LazyResponsiveImg } from './LazyResponsiveImg';
import { ErrorBoundary } from './ErrorBoundary';
import { Modal } from './Modal';
import React, { useState } from 'react';
import { MouseTrackerCloneElement } from './CloneElement';
import { MouseTrackerRenderProps } from './RenderProps';
import { UnControlledSearch } from './UnControlledSearch';

function App(props) {
  const [visibleModal, setVisibleModal] = useState(false);
  function handleToogleModal() {
    setVisibleModal(!visibleModal);
  }

  return (
    <>
      <div className="App">
        <WarehouseProvider>
          <Warehouse/>
        </WarehouseProvider>
        <Dummy/>
        <LazyResponsiveImg/>
        <ErrorBoundary>
          <DummyError/>
        </ErrorBoundary>
        <button onClick={handleToogleModal}>Toggle Modal through Portal!</button>
        <UnControlledSearch/>
        <Modal visible={visibleModal}>
          <div style={{position: 'absolute', top: 0}}>
            Children of Modal!
          </div>
        </Modal>
        {/* <MouseTrackerCloneElement/> */}
        <MouseTrackerRenderProps/>
      </div>
    </>
  );
}

export default App;
