import { useState,useEffect } from 'react'
import useLocalStorage from './customHooks/useLocalStorage'

import Editor from './Editor'

function App() {
  const [html, setHtml] = useLocalStorage('html','')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
 
  useEffect(() => {
     const timeout = setTimeout(() => {
      setSrcDoc(`
           <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script> 
            </html>
        `
         
        )
    }, 300)

    return () => clearTimeout(timeout)
  },[html, css, js])



  return (
    <div className="min-h-lvh m-2 overflow-visible">
      <div className='h-1/2 flex space-x-1 w-full bg-gray-500 text-white p-4 '>
        <Editor title='HTML' lang='xml' value={html} onChange={setHtml} />
        <Editor title='CSS' lang='css' value={css} onChange={setCss} />
        <Editor title='JS' lang='js' value={js} onChange={setJs} />
      </div>
      <div className='min-h-60 w-full border-2 border-black flex flex-col'>
         <div className="flex-grow relative">
           <iframe 
           srcDoc={srcDoc}
           title='output'
           className='w-full h-full absolute' 
            sandbox='allow-scripts'
             border="0"></iframe>
       </div>
       
      </div>
    </div>
  )
}

export default App
