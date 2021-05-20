import React, { useState } from 'react';
import { Input } from 'rsuite';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function UserOutput(props) {
  console.log(props.link);

  const [value, setValue] = useState(props.link);
  const [copied, setCopied] = useState(false);

  const onChange = (event) => {
    console.log(event);
    setValue(event);
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
      <Input onChange={onChange} value={value} />
      <CopyToClipboard onCopy={onCopy} text={value}>
        <button onClick={onClick}>Click to Copy</button>
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
