export class OnceUponActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["onceupon", "sheet", "actor"],
      template: "templates/sheets/onceupon-character-sheet.html",
      width: 600,
      height: "auto",
      tabs: []
    });
  }

  getData() {
    const data = super.getData();
    return data;
  }
}
