var test = require("tap").test
var handleUNCPath = require("../common").handleUNCPath;
var isAbsolute = require("path-is-absolute")

test("unit test – handleUNCPath", function (t) {
  t.same(handleUNCPath(isAbsolute.win32, "path") , "path")
  t.same(handleUNCPath(isAbsolute.win32, "\\vmware-host\\Shared Folders\\-folder\\*"), "\\vmware-host\\Shared Folders\\-folder\\*")
  t.same(handleUNCPath(isAbsolute.win32, "\\\\vmware-host\\Shared Folders\\-folder"), "\\-folder")
  t.same(handleUNCPath(isAbsolute.win32, "\\\\vmware-host\\Shared Folders\\-folder\\*"), "\\-folder\\*")

  t.end()
})
