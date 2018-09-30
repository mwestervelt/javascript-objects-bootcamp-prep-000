var playlist = {
  artistName: "prince",
  songTitle: "purple rain"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playist, artistName) {
  return delete paylist.artistName
}
