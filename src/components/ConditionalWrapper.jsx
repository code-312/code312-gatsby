import React from 'react'

// This component allows devs conditionally wrap a component in a link component to allow for certain cards to be clickable and others not depending on design needs.
const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children
}
export default ConditionalWrapper
