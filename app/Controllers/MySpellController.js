import { ProxyState } from "../AppState.js"
import { mySpellService } from "../Services/MySpellService.js"

function _drawSpells() {
  let template = ''
  ProxyState.mySpells.forEach(spell => {
    template += `<li class="action" onclick="app.mySpellController.getSpell('${spell.id}')">${spell.name}</li>`
  })
  document.getElementById('my-spells').innerHTML = template
}

export default class MySpellController {
  constructor() {
    ProxyState.on('mySpells', _drawSpells)

    this.getAllSpells()
  }

  getAllSpells() {
    try {
      mySpellService.getAllSpells()
    } catch (error) {
      console.error(error)
    }
  }


  getSpell(id) {
    mySpellService.getSpell(id)
  }

  addSpell() {
    try {
      mySpellService.addSpell()
    } catch (error) {
      console.error(error)
    }
  }

  removeSpell() {
    try {
      mySpellService.removeSpell()
    } catch (error) {
      console.error(error)
    }
  }
}