import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './style.less'

export default function CollectContainer () {
  // __STATE <Initial.State>
  const [ data, setData ] = useState(null)
  let store = useSelector(state => state['APP.DATA']['collect'])

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    console.log(store)
  }, [])

  // __UNMOUNTE <React.Hooks>
  useEffect(() => {
    return () => console.log('Component Will Unmount.')
  }, [])

  // __RENDER
  return (
    <div className="ui--collect">
      .ui--collect
    </div>
  )
}