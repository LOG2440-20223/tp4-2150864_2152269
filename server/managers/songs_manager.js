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
   * TODO : Implémenter la récupération d'une chanson en fonction de son id
   * Retourne une chanson en fonction de son id
   * @param {number} id identifiant de la chanson
   * @returns chanson correspondant à l'id
   */
  async getSongById (id) {
    return { id: -1 };
  }

  /**
   * TODO : Implémenter l'inversement de l'état aimé d'une chanson
   * Modifie l'état aimé d'une chanson par l'état inverse
   * @param {number} id identifiant de la chanson
   * @returns {boolean} le nouveau état aimé de la chanson
   */
  async updateSongLike (id) {
    return false;
  }
}

module.exports = { SongsManager };
