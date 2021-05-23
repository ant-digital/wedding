import useSWR from 'swr'

export default function useInboxes(eventName = '') {
  eventName = eventName.replaceAll('/','')
  const fetcher = (url) => fetch(url).then(res => res.json())
  const { data, error } = useSWR(`${process.env.BACKEND_URL}/inbox?eventName=${eventName.replaceAll('/','')}`, fetcher)

  return {
    inboxes: data || [],
    isLoading: !error && !data,
    isError: error
  }
}
