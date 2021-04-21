import dayjs, { Dayjs } from "dayjs"
import { useEffect, useState } from "react"

const today = dayjs()

export default function useCountdown(dueDate: Dayjs) {
  const [countdown, setCountdown] = useState({
    days: dueDate.diff(today, "days"),
    hours: dueDate.diff(today, "hours") % 24,
    minutes: dueDate.diff(today, "minutes") % 60,
    seconds: dueDate.diff(today, "seconds") % 60,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs()
      setCountdown({
        days: dueDate.diff(now, "days"),
        hours: dueDate.diff(now, "hours") % 24,
        minutes: dueDate.diff(now, "minutes") % 60,
        seconds: dueDate.diff(now, "seconds") % 60,
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return countdown
}
