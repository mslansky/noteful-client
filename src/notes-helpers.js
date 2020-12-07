
export const findFolder = (folders=[], folderid) =>
  folders.find(folder => folder.id === parseInt(folderid))

export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id === parseInt(noteId))

export const getNotesForFolder = (notes=[], folderid) => (
  (!folderid)
    ? notes
    : notes.filter(note => note.folderid === parseInt(folderid))
)

export const countNotesForFolder = (notes=[], folderid) =>
  notes.filter(note => note.folderid === parseInt(folderid)).length
