import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [Password, setpassword] = useState("")
  const Passwordref =  useRef(null)

  const Passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*-+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numberallowed, charallowed, setpassword])
   const copypasswordtoclipboard = useCallback(() => {
    Passwordref.current?.select()
    Passwordref.current?.setSelectionRange(0,22)
    window.navigator.clipboard.writeText(Password)
   },[Password])
 

  useEffect(() => {
    Passwordgenerator()
  }, [length, numberallowed, charallowed, Passwordgenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-900 content-center ml-[500px]">
      <h2 className="text-center text-white text-lg font-medium py-3">
        Password generator
      </h2>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-2 px-3 bg-white text-gray-800"
          placeholder="Password"
          readOnly
          ref={Passwordref}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copypasswordtoclipboard}
        >copy</button>
      </div>

      <div className='flex flex-col gap-3 text-sm text-white'>
        <div>
          <input type="range" min={6} max={100} value={length}
            className='cursor-pointer'
            onChange={(e) => setlength(e.target.value)} />
          <label className='ml-2'>Length : {length}</label>
        

        <div className='flex items-center gap-x-2'>
          <input type="checkbox" checked={numberallowed} id="numberinput"
            onChange={() => setnumberallowed(prev => !prev)} />
          <label htmlFor="numberinput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input type="checkbox" checked={charallowed} id="charinput"
            onChange={() => setcharallowed(prev => !prev)} />
          <label htmlFor="charinput">Characters</label>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
