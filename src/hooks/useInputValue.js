import { useState } from 'react';

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler, setValue];
}

export default useInputValue;
