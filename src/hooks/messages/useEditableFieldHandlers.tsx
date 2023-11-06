import { ChangeEvent, KeyboardEvent, ReactNode } from "react"

type UseEditableFieldHandlersReturn = {
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  linkify: (text: string) => ReactNode[]
}
export const useEditableFieldHandlers = (
  onSave: () => void,
  onMessageChange: (text: string) => void,
): UseEditableFieldHandlersReturn => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onSave()
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onMessageChange(e.target.value)
  }

  const linkify = (text: string) => {
    const urlRegex = /(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])(\s|$)/gi
    return text.split(urlRegex).map((part, index) =>
      part.match(urlRegex) ? (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      ) : (
        part
      ),
    )
  }

  return {
    handleKeyDown,
    onChangeHandler,
    linkify,
  }
}
