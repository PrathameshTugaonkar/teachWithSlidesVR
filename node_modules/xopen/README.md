# xopen - Open a file with the default application

`xopen` provides a dead-simple Promise API for opening files from Node on Windows, macOS, and Linux:

### `xopen(filepath)`

`filepath` is a path to the file you wish to open. When you call `xopen()`, it returns a `Promise` that is resolved with the contents of `stdout` if the application successfully opens, and is rejected with an error if the application fails to open.

It's that easy.
