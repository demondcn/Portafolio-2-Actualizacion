import type React from "react"
import "./bacanodnos3d.css"

export default function Bacanodnos3dLayout({ children }: { children: React.ReactNode }) {
  return <div className="bacanodnos3d-theme overflow-x-hidden">{children}</div>
}
