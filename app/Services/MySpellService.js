import { ProxyState } from "../AppState.js";
import Spell from "../Models/Spell.js";
import { sandboxApi } from "./AxiosService.js";

class MySpellService {
  async getAllSpells() {
    let res = await sandboxApi.get('')
    ProxyState.mySpells = res.data.map(s => new Spell(s))
  }
  getSpell(id) {
    let spell = ProxyState.mySpells.find(s => s.id === id)
    ProxyState.activeSpell = spell
  }

  async addSpell() {
    let res = await sandboxApi.post('', ProxyState.activeSpell)

    ProxyState.mySpells = [...ProxyState.mySpells, new Spell(res.data)]

    // this.getAllSpells()
  }

  async removeSpell() {
    let res = await sandboxApi.delete(ProxyState.activeSpell.id)
    ProxyState.mySpells = ProxyState.mySpells.filter(s => s.id !== ProxyState.activeSpell.id)
    ProxyState.activeSpell = null

    // this.getAllSpells()
  }
}

export const mySpellService = new MySpellService();