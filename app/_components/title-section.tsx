import { ReactNode } from "react"

interface TitleSectionProps {
  children: ReactNode
}

const TitleSection = ({ children }: TitleSectionProps) => {
  return (
    <h2 className="text-xs font-bold uppercase text-gray-400">{children}</h2>
  )
}

export default TitleSection
