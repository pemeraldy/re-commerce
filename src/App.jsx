import Layout from "./components/Layout"
import Navigation from "./components/Navigation"
import Filters from "./components/Filters"


function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <div className="mt-10">
          <Filters/>
        </div>
      </Layout>
    </div>
  )
}

export default App
