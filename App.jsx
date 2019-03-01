import React from 'react';
import Login from './components/Login.jsx';

class App extends React.Component{
    render(){
        const greeting = {
            subject: 'React',
            description: 'Your component library for ...'
          };
          
    return (
        <div>
          <Greeting greeting={greeting} />
        </div>
      );
    }
}

export default App;
