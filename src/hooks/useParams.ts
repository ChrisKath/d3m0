import { useRouter } from 'next/router'
import { useMemo } from 'react'

export function useGetParam(name: string) {
  // __STATE <React.Hooks>
  const router = useRouter()

  // __RETURN
  return useMemo(() => {
    const param = router.query[name]

    if (!router.isReady || !param?.length) return null
    else return typeof param === 'object' ? param[0] : param
  }, [router])
}
