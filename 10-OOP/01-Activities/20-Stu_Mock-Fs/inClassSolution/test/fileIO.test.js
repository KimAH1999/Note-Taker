const FileIO = require('../fileIO');
const fs = require("fs")

jest.mock("fs")

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here

      const fileClass = new FileIO()
      const fileName = "messages.txt"


      fs.readFileSync.mockReturnValue("Hello World! one more")
      const data = fileClass.read(fileName)

      expect(data).toEqual("Hello World! one more")
      expect(fs.readFileSync).lastCalledWith(fileName, "utf8")
    });

  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here

      const fileClass = new FileIO()
      const path = "message.txt"
      const data  = "Hello World"

      fileClass.write(path, data)

      expect(fs.writeFileSync).lastCalledWith(path, data)
    });
  });
});
