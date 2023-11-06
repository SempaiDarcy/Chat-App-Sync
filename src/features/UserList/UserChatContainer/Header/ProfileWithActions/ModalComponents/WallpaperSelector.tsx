import React, { ChangeEvent, FC, useState } from "react"
import { useDispatch } from "react-redux"
import { Box, Button } from "@mui/material"
import { changeWallpaperAC, UserType } from "../../../../users-reducer"

type WallpaperSelectorType = {
  user: UserType
  closeWallDialog: () => void
}
export const WallpaperSelector: FC<WallpaperSelectorType> = (props) => {
  const { user, closeWallDialog } = props
  const dispatch = useDispatch()

  const handleWallpaperChange = (wallpaper: string) => {
    dispatch(changeWallpaperAC(user.userId, wallpaper))
    closeWallDialog()
  }
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const applyUploadedWallpaper = () => {
    if (uploadedImage) {
      dispatch(changeWallpaperAC(user.userId, uploadedImage))
      closeWallDialog()
    }
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button variant="outlined" component="label">
        Выбрать файл
        <input type="file" hidden onChange={handleImageUpload} />
      </Button>
      {uploadedImage && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <img src={uploadedImage} alt="Uploaded wallpaper" style={{ maxWidth: "50%", marginTop: "10px" }} />
          <Button onClick={applyUploadedWallpaper} variant="outlined" size="medium">
            Применить обои
          </Button>
        </div>
      )}
      <Box mt={2} display="flex" gap={6} flexWrap="wrap">
        {user.availableWallpapers.map((wallpaper, index) => (
          <img
            style={{ cursor: "pointer" }}
            src={wallpaper}
            alt={`Обои ${index + 1}`}
            width={150}
            key={index}
            onClick={() => handleWallpaperChange(wallpaper)}
          />
        ))}
      </Box>
    </Box>
  )
}
