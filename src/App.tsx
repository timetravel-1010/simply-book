import React, { useState } from 'react';
import ServicePanel from './components/ServicePanel';
import Button from './components/Button';
import LoadingBar from './components/LoadingBar';
import NavigationPane from './components/NavigationPane';

const App: React.FC = (): React.JSX.Element => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <>
      <div className="m-8 flex flex-col">
        <div className={selectedService ? 'border border-blue-400' : ''}>
          <LoadingBar />
          <div className="mt-4"></div>
          <main className='w-full'>
            <ServicePanel />
          </main >
        </div>
      </div >

      <Button
        text='Siguiente'
        bgColor='bg-gray-600'
        onClick={() => { console.log('next!') }}
      />
      <NavigationPane />
    </>
  );
}

export default App;
