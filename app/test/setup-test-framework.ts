// set test timeout to 10s
jest.setTimeout(10000)

import 'jest-extended'
import 'jest-localstorage-mock'

delete process.env['LOCAL_GIT_DIRECTORY']
delete process.env['GIT_EXEC_PATH']

// structuredClone doesn't exist in JSDOM, see:
// https://github.com/jsdom/jsdom/issues/3363
global.structuredClone ??= (x: any) => JSON.parse(JSON.stringify(x))
