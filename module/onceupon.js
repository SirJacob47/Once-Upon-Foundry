import { OnceUponActorSheet } from "./sheets/onceupon-character-sheet.js";

Hooks.once("init", async function () {
  console.log("Once Upon | Initializing custom system");

  CONFIG.Actor.documentClass = Actor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("onceupon", OnceUponActorSheet, { makeDefault: true });
});
