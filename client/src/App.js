import React, { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'Type here...' }],
  },
];

function App() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialValue);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Simple Slate Editor</h1>
      {/* <Slate editor={editor} value={value} onChange={setValue}>
        <Editable
          placeholder="Write something..."
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            minHeight: '200px',
          }}
        />
      </Slate> */}
    </div>
  );
}

export default App;
