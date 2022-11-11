const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();
const { PlaylistManager } = require("../managers/playlist_manager");

const playlistManager = new PlaylistManager();

/**
 * Retourne la liste de toutes les chansons
 * @memberof module:routes/playlists
 * @name GET /playlists
 */
router.get("/", async (request, response) => {
  try {
    const playlists = await playlistManager.getAllPlaylists();
    response.status(HTTP_STATUS.SUCCESS).json(playlists);
  } catch (error) {
    response.status(HTTP_STATUS.SERVER_ERROR).json(error);
  }
});

/**
 * TODO : retourne un playlist en fonction de son id
 * Retourne playlist en fonction de son id
 * @memberof module:routes/playlists
 * @name GET /playlists/:id
 */
router.use("/:id", async (request, response) => {
  response.status(HTTP_STATUS.SERVER_ERROR).json({});
});

/**
 * Ajoute une playlist
 * @memberof module:routes/playlists
 * @name POST /playlists
 */
router.post("/", async (request, response) => {
  try {
    if (!Object.keys(request.body).length) {
      response.status(HTTP_STATUS.BAD_REQUEST).send();
      return;
    }
    const playlist = await playlistManager.addPlaylist(request.body);
    response.status(HTTP_STATUS.CREATED).json(playlist);
  } catch (error) {
    response.status(HTTP_STATUS.SERVER_ERROR).json(error);
  }
});

/**
 * TODO : implémenter la modification d'une playlist
 * Mets à jour l'information d'une playlist en fonction de son id
 * @memberof module:routes/playlists
 * @name PUT /playlists/:id
 */
router.use("/:id", async (request, response) => {
  response.status(HTTP_STATUS.SERVER_ERROR).json({});
});

/**
 * TODO : implémenter la suppression de la requête
 * Supprime une playlist en fonction de son id
 * @memberof module:routes/playlists
 * @name DELETE /playlists/:id
 */
router.use("/:id", async (request, response) => {
  response.status(HTTP_STATUS.SERVER_ERROR).json({});
});

module.exports = { router, playlistManager };
