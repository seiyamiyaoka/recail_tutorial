import React from 'react'

import {
  atom,
  useRecoilState
} from 'recoil'

export const textState = atom({
  key: 'textState',
  default: ''
})

const TextInput = () => {
  const  [text, setState] = useRecoilState(textState)

  const onChange = (event) => {
    setState(event.target.value)
  }
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      Echo: {text}
    </div>
  )
}

export default TextInput