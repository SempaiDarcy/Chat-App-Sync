import { ChangeEvent, useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { changeUserNameAC, uploadUserAvatarAC, UserType } from "features/UserList/users-reducer"

type UseProfileSelectorReturn = {
  isEditing: boolean
  editedName: string
  selectedFile: string | null
  handleNameClick: () => void
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleNameBlur: () => void
  handleFileSelect: (e: ChangeEvent<HTMLInputElement>) => void
  handleUploadClick: () => void
}
export const useProfileSelector = (user: UserType): UseProfileSelectorReturn => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editedName, setEditedName] = useState<string>(user.userName)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const dispatch = useDispatch()

  const handleNameClick = () => {
    setIsEditing(true)
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    if (newName.length <= 10) {
      setEditedName(newName)
    }
  }

  const handleNameBlur = () => {
    if (editedName.trim()) {
      dispatch(changeUserNameAC(user.userId, editedName))
    }
    setIsEditing(false)
  }

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedFile(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUploadClick = useCallback(() => {
    if (selectedFile) {
      dispatch(uploadUserAvatarAC(user.userId, selectedFile))
      setSelectedFile(null)
    }
  }, [dispatch, user.userId, selectedFile])

  return {
    isEditing,
    editedName,
    selectedFile,
    handleNameClick,
    handleNameChange,
    handleNameBlur,
    handleFileSelect,
    handleUploadClick,
  }
}
