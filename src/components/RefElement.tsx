import { PropsWithChildren, RefObject } from "react"

interface Props extends PropsWithChildren {
  ref: RefObject<HTMLDivElement | null>
}

const RefElement = ({ ref, children }: Props) => {
  return <div ref={ref}>{children}</div>
}

export default RefElement
