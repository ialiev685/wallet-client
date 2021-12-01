import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "./redux/auth";

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className="App">
        <h1>Ну что, поехали?</h1>
      </div>
    )
  );
}

export default App;
