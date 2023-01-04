import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useGetParam } from '@/hooks'
import { Collects } from '@/constants'
import { DummyComponent } from '@/features/dummy'
import { ArrayService, modal } from '@/utils'

export function DummyListener() {
  // __STATE <React.Hooks>
  const router = useRouter()
  const dummyId = useGetParam('cid')

  // __FUNCTIONS's
  const handleAction = useCallback((id: string) => {
    const collect = ArrayService.findOne(Collects, 'id', id)

    if (collect) {
      const vid = 'mid-dummy'
      const onClose = () => {
        modal.off(vid)
        router.replace({ query: null }, router.pathname, {
          scroll: false
        })
      }

      modal.on(<DummyComponent data={collect} onClose={onClose} />, {
        className: vid
      })
    }
  }, [])

  // __EFFECT's
  useEffect(() => {
    if (dummyId) handleAction(dummyId)
  }, [dummyId])

  // __RENDER
  return null
}
