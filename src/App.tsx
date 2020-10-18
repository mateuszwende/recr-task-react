import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider, Container, Header } from './components';
import { HomeView, PersonView } from './views';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>
            <Route path="/people/:name">
              <PersonView />
            </Route>
          </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
