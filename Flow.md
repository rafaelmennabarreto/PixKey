" telas

- home
  [-] if not have pix registered show an image displaying is not registered
  [-] when have pix registered show an flatlist
  [-] on press in pix open te pix detail
  [-] on long press in pix, copy the principal key
  [-] rounded float button
  [-] on click in float button the system navigate to Cadastrar screen

- Register pix
  [-] input to set name for the pixkey
  [-] select type of pixKey(enum)
  [-] enter the pixKey(this key was seted how the principal key)

- Detail pix
  [-] list all pix key registered for this name in an flatlist
  [-] here has an float button to add new key
  [-] in the tabBar have a trash icon to delete the pixKey
  [-] on click in the trash icon display an modal to confirm delete
  [-] if click in ok on modal delete all keys for this name and delete name also
  [-] on longPress in key open an bottom panel with the options edit and delete key.
  [-] on click in edit the system navigate to cadastrar screen passing the key data.
  [-] on click in delete key te system remove the key.

" tecnologies

- react native
- react navigation
- styled components
- react hooks
- watermelonDb(for local persist data)
- typescript
