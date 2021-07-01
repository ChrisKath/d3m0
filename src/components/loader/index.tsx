import { useState, useEffect } from 'react'
import { useSelector, coreSelector } from '@/store'
import cls from 'classnames'

export function LoaderComponent() {
  // __STATE <React.Hooks>
  const [state, setState] = useState(false)
  const { visible } = useSelector(coreSelector.getLoader)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    if (visible) {
      handleFocus()
      setState(visible)
    } else {
      setTimeout(() => {
        setState(false)
      }, 512)
    }
  }, [visible])

  // __FUNCTIONS
  const handleFocus = (): void => {
    const button: any = document.querySelector('.ui--loader-progress')
    if (button) button.focus()
  }

  // __RENDER
  if (!state) return null
  return (
    <div className='ui--loader'>
      <div className={cls('ui--loader-progress', { done: !visible })}>&nbsp;</div>
    </div>
  )
}
