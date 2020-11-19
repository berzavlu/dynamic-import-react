import React, { useState, lazy, useEffect } from 'react'
// a_hombre_15Dcto
// a_hombre_13Dcto
// a_hombre_15Dcto

const importView = (componentName) =>
  lazy(() =>
    import(`./components/${componentName}`)
      .catch(() => <div>error al importar el component</div>)
  )

function App() {
  // Condiciono la variable
  const [showExperiment, setShowExperiment] = useState([])

  async function loadComponentDynamic() {
    const ExperimentView = await importView(window.experimentName)
    return <ExperimentView />
  }

  useEffect(() => {
    window.experimentName = 'a_hombre_13Dcto'
    loadComponentDynamic()
      .then((res) => setShowExperiment(res))
  }, [])

  console.log(showExperiment)
  return (
    <div className="App">
      <React.Suspense fallback='Loading views...'>
        {showExperiment}
      </React.Suspense>
    </div>
  );
}

export default App;
