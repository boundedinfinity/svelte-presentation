
import { assert, expect, test } from 'vitest'
import funcs from '$lib/svg/funcs'
import fs from 'fs'
import nodepath from 'path'

function file2string(name: string): string {
    const path = nodepath.join(__dirname, name)
    return fs.readFileSync(path).toString()
}

test('yaml input', () => {
    const input = file2string('diagram1.yaml')
    const actual = funcs.parseYaml(input)

    expect(actual.layout.length).toBe(0)
})

test('diagram input', () => {
    const input = file2string('diagram1.model')
})