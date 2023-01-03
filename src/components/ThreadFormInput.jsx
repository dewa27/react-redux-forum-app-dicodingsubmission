/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import useInputValue from '../hooks/useInputValue';
import threadCategories from '../utils/threadCategoriesData';
import TextareaInput from './TextareaInput';

function ThreadFormInput({ addThread }) {
  const [title, onTitleChangeHandler] = useInputValue();
  const [selectCategory, onSelectCategoryHandler] = useInputValue(0);
  const [body, onBodyChangeHandler] = useInputValue();

  const onSend = () => {
    addThread({ title, body, category: selectCategory });
  };
  return (
    <div className="thread-input">
      <div className="thread-input-header">
        <input className="thread-input__thread-title" type="text" placeholder="Insert title..." value={title} onChange={onTitleChangeHandler} />
        <select className="thread-input__thread-category" name="" id="" value={selectCategory} onChange={onSelectCategoryHandler}>
          <option value="0" disabled>Select category...</option>
          {threadCategories.map(
            (category) => (
              <option
                key={category.name}
                value={category.name}
              >
                {category.name}
              </option>
            ),
          )}
        </select>
      </div>
      <TextareaInput body={body} onBodyChangeHandler={onBodyChangeHandler} placeholder="Insert thread body..." />
      <button type="submit" onClick={onSend}>Send</button>
    </div>
  );
}
ThreadFormInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
export default ThreadFormInput;
