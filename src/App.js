import Auth from './views/Auth/Auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getUser } from './services/users';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h1>Signed In</h1>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
