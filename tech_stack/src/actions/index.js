// If we want to export MANY things, we do not use 'export default'
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  }
}