import { ProxyState } from "../AppState.js";
import Spell from "../Models/Spell.js";
import { dndApi } from "./AxiosService.js";

class DnDSpellService {
  async getAllSpells() {
    let res = await dndApi.get('')
    ProxyState.dndSpells = res.data.results
  }
  async getSpell(index) {
    let res = await dndApi.get(index)
    // NOTE when the api returns a single item simply cast it
    ProxyState.activeSpell = new Spell(res.data)
  }
}

export const dnDSpellService = new DnDSpellService();