import React from 'react';

const Content = ({ data }) => (
  <main className="app__content">
    <pre className="app__content__data">
      { data ?
        JSON.stringify(data, null, 2) :
        "Look up a symbol from the header"
      }
    </pre>
  </main>
);

export default Content;
