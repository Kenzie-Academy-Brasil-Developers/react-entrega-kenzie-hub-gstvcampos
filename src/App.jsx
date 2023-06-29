import { GlobalStyle } from "./styles/global"
import { ResetStyle } from "./styles/reset"
import RoutesMain from "./routes/RoutesMain"
import { UserContext } from "./providers/UserContext"
import { useContext } from "react"
import LoadingSpinner from "./components/LoadingSpinner"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const { loading } = useContext(UserContext)

  return (


    <div className='App'>
      { loading ?
      <>
      <ResetStyle/>
      <GlobalStyle/>
      <LoadingSpinner/> 
      </> :
      <>
        <ResetStyle/>
        <GlobalStyle/>
        <RoutesMain/>
        <ToastContainer/>
      </>
      }
    </div>
  )
}

export default App
