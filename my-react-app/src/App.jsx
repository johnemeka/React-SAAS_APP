import { Banner } from "./components/Banner/Banner"
import Community from "./components/Community/Community"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import { Introduction } from "./components/Introduction/Introduction"
import Navbar from "./components/Navbar/Navbar"
import { Tools } from "./components/Tools/Tools"
import Workflow from "./components/Workflow/Workflow"


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Introduction/>
      <Tools/>
      <Banner/>
      <Workflow/>
      <Community/>
      <Footer/>
    </>
  )
}

export default App
