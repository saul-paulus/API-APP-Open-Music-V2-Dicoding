/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('playlistsongs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true
    },
    song_id: {
      type: 'VARCHAR(50)',
      notNull: true
    },
    playlist_id: {
      type: 'VARCHAR(50)',
      notNull: true
    }
  })

  pgm.addConstraint('playlistsongs', 'unique_song_id_and_playlist_id', 'UNIQUE(song_id, playlist_id)')

  pgm.addConstraint('playlistsongs', 'fk_playlistsongs.song_id_songs.id', 'FOREIGN KEY(song_id) REFERENCES songs(id) ON DELETE CASCADE')
  pgm.addConstraint('playlistsongs', 'fk_playlistsongs.playlist_id_playlists.id', 'FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE')
}

exports.down = pgm => {
  pgm.dropTable('playlistsongs')
}