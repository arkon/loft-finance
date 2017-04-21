import React from 'react';

const changeClass = function(change) {
  return `app__sidebar__history__item__symbol--${(change[0] === '+') ? 'pos' : 'neg'}`;
};

const HistoryEntry = ({ data, onClickItem }) => (
  <div>
    {
      data.map((item, i) => (
        <div
          key={i}
          onClick={() => onClickItem(item.t)}>
          <p className="app__sidebar__history__item__symbol">{item.t}</p>
          <p>{item.l} (<span className={changeClass(item.c)}>{item.c}</span>)</p>
          <p>{item.lt}</p>
        </div>
      ))
    }
  </div>
);

export default HistoryEntry;
