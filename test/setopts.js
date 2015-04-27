var test = require("tap").test
var setopts = require("../common").setopts;

function stubPlatform(platform, fn) {
  var descriptor = Object.getOwnPropertyDescriptor(process, 'platform');

  try {
    Object.defineProperty(process, 'platform', { 
      value: platform,
      writable: false
    });

    fn();
  } finally {
    Object.defineProperty(process, 'platform', descriptor);
  }

}

test("unit test – setopts – ensure UNC paths are handled correctly", function (t) {
  var sentinel = { };

  stubPlatform("win32", function() {
    setopts(sentinel, "\\\\vmware-host\\Shared Folders\\-folder\\*")
    t.same(sentinel.minimatch.pattern, "\\-folder\\\*")
  })

  stubPlatform("darwin", function() {
    setopts(sentinel, "\\\\vmware-host\\Shared Folders\\-folder\\*")
    t.same(sentinel.minimatch.pattern, "\\\\vmware-host\\Shared Folders\\-folder\\*")
  })

  t.end()
})
