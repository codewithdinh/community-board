import React from 'react';
import CardList from './components/CardList';

const App = () => {
  return (
    <div className="App">
      {/* Main title of the application */}
      <h1>Tennis Resource Board</h1>
      {/* Subtitle of the application */}
      <h2>Your Gateway to Tennis Knowledge</h2>
      {/* Render the CardList component */}
      <CardList />
    </div>
  );
}

export default App;