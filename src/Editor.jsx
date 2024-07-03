import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor({title, lang, value, onChange}) {
  const [isOpen, setIsOpen] = useState(true)
    function handleChange(editor, data, value){
        onChange(value)
    }
  return (
    <div className= {`flex-grow rounded-lg overflow-hidden ${isOpen ? '' : 'flex-grow-0 basis-24  overflow-hidden'} `}>
        <div className='flex  bg-gray-900 text-white p-2 '>
           <p className='flex-grow'>{title}</p>
            <button className='p-0.5 hover:bg-slate-200 hover:text-black text-white font-semibold' 
                    onClick={() => setIsOpen((prev) => !prev)}>O/C</button>
        </div>
        <div>
            <ControlledEditor 
             onBeforeChange={handleChange}
             value={value}
             options={{
                linewrapping: true,
                lint: true,
                mode: lang,
                theme: 'material',
                lineNumbers: true
             }}
              />
        </div>
    </div>
  )
}
