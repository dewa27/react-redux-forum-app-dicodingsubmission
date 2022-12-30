import React from 'react';
import PropTypes from 'prop-types';
import useInputHtml from '../hooks/useInputHtml';
import useInputValue from '../hooks/useInputValue';
import threadCategories from '../utils/threadCategoriesData';

function ThreadFormInput({ addThread }) {
  const [title, onTitleChangeHandler] = useInputValue();
  const [selectCategory, onSelectCategoryHandler] = useInputValue(0);
  const [body, onBodyChangeHandler] = useInputHtml();

  const onSend = () => {
    addThread({ title, body, category: selectCategory });
    // eslint-disable-next-line no-console
    console.log('sent!');
  };
  return (
    <div className="thread-input">
      <div className="thread-input-header">
        <input className="thread-title" type="text" placeholder="Insert title..." value={title} onChange={onTitleChangeHandler} />
        <select className="thread-category" name="" id="" value={selectCategory} onChange={onSelectCategoryHandler}>
          <option value="0" disabled>Select category...</option>
          {threadCategories.map(
            (category) => <option value={category.name}>{category.name}</option>,
          )}
        </select>
      </div>
      <textarea type="text" placeholder="What are you thinking?" onChange={onBodyChangeHandler}>
        {body}
      </textarea>
      <p className="thread-input__char-right">
        <strong>0</strong>
        /320
      </p>
      <button type="submit" onClick={onSend}>Send</button>
    </div>
  );
}
ThreadFormInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
export default ThreadFormInput;
