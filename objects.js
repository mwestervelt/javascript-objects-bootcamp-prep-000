var playlist = {
  artistName: "prince",
  songTitle: "purple rain"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  if (delete playlist.artistName)
  {return delete playlist.artistName}
  else {
    return playlist
  }
}
