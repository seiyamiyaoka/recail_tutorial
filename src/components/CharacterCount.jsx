import React from 'react'
import {
  selector,
  useRecoilValue
} from 'recoil'
import {
  textState
} from './TextInput'

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  }
})
const CharacterCount = () => {
  // computedみたいなものだとおもう。textStateの変更を検知して再レンダリングするぽい
  const count = useRecoilValue(charCountState)
  return (
    <>
      Charactor Count: {count}
    </>
  )
}

export default CharacterCount