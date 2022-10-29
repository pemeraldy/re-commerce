import { useState } from "react";


export const useNav = () => {
  const [showNav, setShowNav] = useState(false)
  return [
    showNav,
    setShowNav
  ]
}