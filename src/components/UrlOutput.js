import React, { useState } from 'react';
import { Input, Button } from 'rsuite';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function UserOutput(props) {
  console.log(props.link);

  const [value, setValue] = useState(props.link);
  const [copied, setCopied] = useState(false);

  const onChange = (value) => {
    setValue(value);
    //event.target.value;
    //this.setState({ value, copied: false });
  };

  const onCopy = () => {
    //this.setState({ copied: true });
    setCopied(true);
  };

  const onClick = () => {
    console.log('I clicked it!');
  };
  return (
    <div>
      <Input onChange={onChange} value={props.link} />
      <CopyToClipboard onCopy={onCopy} text={props.link}>
        <Button onClick={onClick}>Click to Copy</Button>
      </CopyToClipboard>

      <section className='section'>
        {copied ? <span style={{ color: 'red' }}>Copied!</span> : null}
      </section>
    </div>
  );
}

// return (
//   <div>
//     <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
//       <Input onChange={this.onChange} value={this.state.value} />
//       <button onClick={this.onClick}>Click to Copy</button>
//     </CopyToClipboard>

//     <section className='section'>
//       {this.state.copied ? (
//         <span style={{ color: 'red' }}>Copied!</span>
//       ) : null}
//     </section>
//   </div>
// );
