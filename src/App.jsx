import Layout from "./components/Layout"
import Navigation from "./components/Navigation"
import Filters from "./components/Filters"
import ProductCard from "./components/ProductCard"
import ProductGridLayout from "./components/ProductGridLayout"
function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <div className="mt-10">
          <Filters/>
        </div>
        <div className="mt-8">
          <ProductGridLayout>           
            <ProductCard />
            <ProductCard />
          </ProductGridLayout>
          
        </div>
      </Layout>
    </div>
  )
}

export default App
