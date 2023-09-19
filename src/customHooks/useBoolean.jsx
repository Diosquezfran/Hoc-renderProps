import React, { useState } from 'react'

const useBoolean = () => {
  const [value, setValue] = useState(false);
  const handleChange = () => setValue(!value)

  return [value, handleChange]
}

export default useBoolean