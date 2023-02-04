import useSWR from "swr"

export default function useInboxes(eventName = "") {
  eventName = eventName.replace(/[/]/gi, "")
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR(
    `https://us-central1-bidding-mobil.cloudfunctions.net/function-1/wishes`,
    fetcher
  )

  return {
    inboxes: data || [],
    isLoading: !error && !data,
    isError: error,
  }
}
