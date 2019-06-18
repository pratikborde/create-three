create-three
============

A cli tool to create base template for threejs projects.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/create-three.svg)](https://npmjs.org/package/create-three)
[![Downloads/week](https://img.shields.io/npm/dw/create-three.svg)](https://npmjs.org/package/create-three)
[![License](https://img.shields.io/npm/l/create-three.svg)](https://github.com/pratikborde/create-three/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-three
$ create-three COMMAND
running command...
$ create-three (-v|--version|version)
create-three/0.0.0 darwin-x64 node-v10.15.1
$ create-three --help [COMMAND]
USAGE
  $ create-three COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-three create [FILE]`](#create-three-create-file)
* [`create-three hello [FILE]`](#create-three-hello-file)
* [`create-three help [COMMAND]`](#create-three-help-command)

## `create-three create [FILE]`

describe the command here

```
USAGE
  $ create-three create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/create.ts](https://github.com/pratikborde/create-three/blob/v0.0.0/src/commands/create.ts)_

## `create-three hello [FILE]`

describe the command here

```
USAGE
  $ create-three hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ create-three hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/pratikborde/create-three/blob/v0.0.0/src/commands/hello.ts)_

## `create-three help [COMMAND]`

display help for create-three

```
USAGE
  $ create-three help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
