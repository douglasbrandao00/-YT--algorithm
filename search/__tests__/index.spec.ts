import Contacts from '../index'

const contactsList = [
  { name: "alice" },
  { name: "helena" },
  { name: 'heloisa' },
  { name: "laura" },
  { name: "sophia" }
]

describe("Contacts > Search", () => {
  test("Should return an error if contact dosent exists in contacts list", () => {
    const contactsList = [{ name: "terere" }]
    const contact = new Contacts(contactsList)

    expect(() => contact.findByName("não existe")).toThrow()
  })
  test.each(contactsList)
    ("Should find each contacts in list", (contactInList) => {
      const contact = new Contacts(contactsList)
      const finded = contact.findByName(contactInList.name)
      expect(finded).toEqual(contactInList)
    })

})
