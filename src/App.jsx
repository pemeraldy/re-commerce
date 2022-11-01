import Layout from "./components/Layout"
import Navigation from "./components/Navigation"
import Filters from "./components/Filters"
import ProductCard from "./components/ProductCard"
import ProductGridLayout from "./components/ProductGridLayout"
import Pagination from "./components/Pagination"
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
            {
              Array.from(Array(5)).map((item, index) =>{
                  return <ProductCard key={index} />    
              })
            }
          </ProductGridLayout>
          <div className="mt-10 mx-auto w-full">
            <Pagination />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default App
