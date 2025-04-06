import React, { useCallback, useMemo, useState } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'DocuDiff' }],
  },
];

function App() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialValue);

  const handleKeyDown = useCallback((event) => {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      // backend
      console.log('שמור גרסה:', value);
    }
  }, [value]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>DocuDiff</h1>
      <Slate editor={editor} value={value} onChange={setValue}>
        <Editable
          onKeyDown={handleKeyDown}
          placeholder=""
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            minHeight: '300px',
          }}
        />
      </Slate>
    </div>
  );
}

export default App;
