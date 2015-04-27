var test = require("tap").test
var handleUNCPath = require("../common").handleUNCPath;

test("unit test – handleUNCPath", function (t) {
  t.same(handleUNCPath("path") , "path")
  t.same(handleUNCPath("\\vmware-host\\Shared Folders\\-folder\\*"), "\\vmware-host\\Shared Folders\\-folder\\*")
  t.same(handleUNCPath("\\\\vmware-host\\Shared Folders\\-folder"), "\\-folder")
  t.same(handleUNCPath("\\\\vmware-host\\Shared Folders\\-folder\\*"), "\\-folder\\*")

  t.end()
})
