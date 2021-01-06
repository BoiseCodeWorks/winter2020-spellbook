export default class Spell {
  constructor({ id, name, description, range, duration, desc, index, components }) {
    this.id = id
    this.index = index
    this.name = name
    this.range = range
    this.duration = duration
    this.components = components
    this.description = description || desc.join('\n')
  }

  get Template() {
    return `
    <h2>${this.name}</h2>
    <p>Range: ${this.range} | Duration: ${this.duration}</p>
    <p>Components: ${this.components.join(", ")}</p>
    <p ${this.id ? 'contenteditable="true"' : ''}>${this.description}</p>
    ${this.Button}
    `
  }

  get Button() {
    if (this.index) {
      return `<button class="btn btn-outline-success" onclick="app.mySpellController.addSpell()">Add Spell</button>`
    }
    return `<button class="btn btn-outline-danger" onclick="app.mySpellController.removeSpell()">Remove Spell</button>`
  }

}
