import React, { FC } from "react"
import { Avatar, Box, Divider, FormControlLabel, IconButton, Switch, TextField, Typography } from "@mui/material"
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import Button from "@mui/material/Button"
import { UserType } from "../../../../users-reducer"
import { useProfileSelector } from "hooks/ui/useProfileSelector"

type ProfileSelectorProps = {
  user: UserType
}
export const ProfileSelector: FC<ProfileSelectorProps> = (props) => {
  const { user } = props

  const profileSelector = useProfileSelector(user)
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width={"300px"}>
      <Avatar src={user.avatar} sx={{ width: 100, height: 100 }} />
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="upload-photo"
        type="file"
        onChange={profileSelector.handleFileSelect}
      />
      <label htmlFor="upload-photo">
        <IconButton component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      {profileSelector.selectedFile && (
        <>
          <Divider sx={{ width: "100%", marginBottom: 2 }} />
          <Avatar src={profileSelector.selectedFile} sx={{ width: 100, height: 100 }} />
          <Button variant="contained" onClick={profileSelector.handleUploadClick}>
            Загрузить выбранное изображение
          </Button>
        </>
      )}
      <Typography variant="h5" component="div" marginTop={2}>
        {profileSelector.isEditing ? (
          <TextField
            value={profileSelector.editedName}
            onChange={profileSelector.handleNameChange}
            onBlur={profileSelector.handleNameBlur}
            autoFocus
            fullWidth
          />
        ) : (
          <span onClick={profileSelector.handleNameClick}>
            {user.userName}
            <DriveFileRenameOutlineIcon style={{ cursor: "pointer" }} />
          </span>
        )}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" marginBottom={2}>
        Был(а) сейчас
      </Typography>

      <Divider sx={{ width: "100%", marginBottom: 2 }} />

      <Typography variant="body1">+{user.phone}</Typography>
      <Typography variant="body2" color="textSecondary" marginBottom={2}>
        Телефон
      </Typography>

      <Typography variant="body1">Обо мне:</Typography>
      <Typography variant="body2" color="textSecondary" marginBottom={2}>
        Мой статус
      </Typography>

      <Typography variant="body1">@{user.userName}</Typography>
      <Typography variant="body2" color="textSecondary" marginBottom={2}>
        Имя пользователя
      </Typography>

      <Divider sx={{ width: "100%", marginBottom: 2 }} />

      <FormControlLabel control={<Switch />} label="Уведомления" sx={{ width: "100%", justifyContent: "center" }} />
    </Box>
  )
}
