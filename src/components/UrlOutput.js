import React, { useState } from 'react';
import { Input, Button } from 'rsuite';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function UserOutput(props) {
  console.log(props.link);

  const [value, setValue] = useState(props.link);
  const [copied, setCopied] = useState(false);

  const styles = {
    marginTop: 50,
    width: 300,
    marginBottom: 10,
  };

  const onChange = (value) => {
    setValue(value);
  };

  const onCopy = () => {
    setCopied(true);
  };

  const onClick = () => {
    console.log('I clicked it!');
  };
  return (
    <div>
      <Input style={styles} onChange={onChange} value={props.link} />
      <CopyToClipboard onCopy={onCopy} text={props.link}>
        <Button onClick={onClick}>Click to Copy</Button>
      </CopyToClipboard>

      <section className='section'>
        {copied ? <span style={{ color: 'red' }}>Copied!</span> : null}
      </section>
    </div>
  );
}
