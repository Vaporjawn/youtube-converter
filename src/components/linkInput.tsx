/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
import { useState } from 'react';

const LinkInput = () => {
  const [link, setLink] = useState('');

  const linkValidator = (inputLink: string) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const isMatch: RegExpMatchArray | null = inputLink.match(regExp);
    if (inputLink.length > 0 && isMatch) {
      console.log('link is valid');
    } else {
      console.log('link is invalid');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
    linkValidator(link);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    setLink(e.clipboardData.getData('text'));
    linkValidator(link);
  };

  return (
    <form>
      <input
        type="text"
        value={link}
        onChange={handleChange}
        onPaste={handlePaste}
      />
      <button type="submit" onClick={() => linkValidator(link)}>
        Submit
      </button>
    </form>
  );
};

export default LinkInput;
