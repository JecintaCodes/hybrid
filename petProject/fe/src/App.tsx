import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./router/mainRouter"


 const App = ()=>{
  return (
    <div>
      <RouterProvider router={mainRoute}/>
    </div>
  )
}
export default App