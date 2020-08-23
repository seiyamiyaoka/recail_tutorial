import React from 'react'

import {
  atom,
  useRecoilValue
} from 'recoil'

const todoListState = atom({
  key: 'todoListState',
  default: []
})

const TodoList = () => {
  const todoLists = useRecoilValue(todoListState)

  return (
    <>
    {
      todoLists.map((todo) => (
        <TodoItem key={todo.key} item={todo} />
      ))
    }
    </>
  )
}