export default class Contacts {
  constructor(private contacts: { name: string }[]) { }
  private isBefore(reference: string, compare: string) {
    return reference.localeCompare(compare) > 0
  }
  findByName(name: string) {
    let lower = 0
    let higher = this.contacts.length - 1
    while (lower <= higher) {
      const half = Math.floor((lower + higher) / 2)
      const guess = this.contacts[half]
      if (guess.name === name) return guess
      if (this.isBefore(guess.name, name)) {
        higher = half - 1
        continue
      }
      lower = half + 1
    }
    throw new Error()
  }
}
