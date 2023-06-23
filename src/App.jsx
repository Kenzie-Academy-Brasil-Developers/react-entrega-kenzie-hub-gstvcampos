import { GlobalStyle } from './styles/global'
import { ResetStyle } from './styles/reset'

import RountesMain from './routes/RountesMain'

function App() {
  return (
    <div className=''>
      <ResetStyle/>
      <GlobalStyle/>
      <RountesMain/>
    </div>
  )
}

export default App
