import DnDSpellController from "./Controllers/DnDSpellController.js";
import MySpellController from "./Controllers/MySpellController.js";


class App {
  mySpellController = new MySpellController()
  dndSpellController = new DnDSpellController()
}

window["app"] = new App();
