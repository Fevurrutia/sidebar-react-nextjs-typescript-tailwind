import React from 'react'

interface Props {
    mensaje: string
}

// const TestMessage: React.FC<Props> = ({mensaje}) => {
//   return (
//     <div>
//       {mensaje}
//     </div>
//   )
// }

const TestMessage = ({mensaje}: Props) => {
  return (
    <div>
      {mensaje}
    </div>
  )
}

export default TestMessage
