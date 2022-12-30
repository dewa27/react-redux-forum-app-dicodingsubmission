import { useState } from 'react';

function useInputHtml(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.innerHTML);
  };

  return [value, onValueChangeHandler];
}

export default useInputHtml;
