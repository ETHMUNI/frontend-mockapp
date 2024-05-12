import { useNavigate } from "react-router-dom";

function PageNotFound() {

    const navigate = useNavigate()
    return (
      <>
      <h1>Page Not Found</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      </>  
    )
  }

  export default PageNotFound;