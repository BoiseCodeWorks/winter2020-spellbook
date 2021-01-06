import { ProxyState } from "../AppState.js";
import { dnDSpellService } from "../Services/DnDSpellService.js";

function _drawSpells() {
  let template = ''
  ProxyState.dndSpells.forEach(s => {
    template += `<li class="action" onclick="app.dndSpellController.getSpell('${s.index}')">${s.name}</li>`
  })
  document.getElementById("api-spells").innerHTML = template
}

function _drawActiveSpell() {
  let template = ''
  if (ProxyState.activeSpell) {
    template = ProxyState.activeSpell.Template
  }
  document.getElementById("active-spell").innerHTML = template
}

export default class DnDSpellController {
  constructor() {
    ProxyState.on('dndSpells', _drawSpells)
    ProxyState.on('activeSpell', _drawActiveSpell)

    this.getAllSpells()
  }

  getAllSpells() {
    try {
      dnDSpellService.getAllSpells()
    } catch (error) {
      console.error(error)
    }
  }

  getSpell(index) {
    try {
      dnDSpellService.getSpell(index)
    } catch (error) {
      console.error(error)
    }
  }
}