const { FileSystemManager } = require("./file_system_manager");
const path = require("path");

class SongsManager {
  constructor () {
    this.JSON_PATH = path.join(__dirname + "../../data/songs.json");
    this.fileSystemManager = new FileSystemManager();
  }

  /**
   * Retourne la liste de toutes les chansons
   * @returns {Promise<Array>}
   */
  async getAllSongs () {
    const fileBuffer = await this.fileSystemManager.readFile(this.JSON_PATH);
    return JSON.parse(fileBuffer).songs;
  }

  /**
   * TODO DONE: Implémenter la récupération d'une chanson en fonction de son id
   * Retourne une chanson en fonction de son id
   * @param {number} id identifiant de la chanson
   * @returns chanson correspondant à l'id
   */
  async getSongById (id) {
    const songs = await this.getAllSongs();
    return songs.find((song) => song.id === id);
  }

  /**
   * TODO DONE: Implémenter l'inversement de l'état aimé d'une chanson
   * Modifie l'état aimé d'une chanson par l'état inverse
   * @param {number} id identifiant de la chanson
   * @returns {boolean} le nouveau état aimé de la chanson
   */
  async updateSongLike (id) {
    const songs = await this.getAllSongs();
    const songToUpdate = await this.getSongById(id);
    const index = songs.findIndex((song) => song.id === songToUpdate.id);
    songs[index].liked = !songs[index].liked;
    await this.fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify({ songs }));

    return songs[index].liked;
  }
}

module.exports = { SongsManager };
