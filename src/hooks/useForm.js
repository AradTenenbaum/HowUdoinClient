import {useState} from 'react';

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      const onSubmit = event => {
          event.preventDefault();
          callback();
      };

      const Clear = () => {
        setValues(initialState);
      };

      return {
          onChange,
          onSubmit,
          Clear,
          values
      };
};