import React from 'react';
import PropTypes from 'prop-types';
import useInputValue from '../hooks/useInputValue';

function ThreadSearchInput({ onSearch }) {
  const [keyword, onKeywordChangeHandler] = useInputValue();
  const onChangeHandler = (e) => {
    onKeywordChangeHandler(e);
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => { onSearch(e.target.value); }, 500);
  };
  return (
    <input className="thread-search-input" type="text" placeholder="Search by category..." value={keyword} onChange={onChangeHandler} />
  );
}
ThreadSearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default ThreadSearchInput;
