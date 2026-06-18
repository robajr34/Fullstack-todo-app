'use client'
import { popupContext } from "@/context/PopupsContext"
import { useContext } from "react"

const usePopups = (params) => {
  return useContext(popupContext)
}
export default usePopups
