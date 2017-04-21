import React from 'react';

import HistoryEntry from './HistoryEntry';

const Sidebar = ({ history, onClickItem }) => (
  <aside className="app__sidebar">
    <h2>History</h2>
    <ul className="app__sidebar__history">
      {
        history.length > 0 ?
          history.map((item, i) => (
            <li
              key={i}
              className="app__sidebar__history__item">
              <HistoryEntry data={item} onClickItem={onClickItem} />
            </li>
          )) :
          <li className="app__sidebar__history__item">Nothing searched yet</li>
      }
    </ul>
  </aside>
);

export default Sidebar;
