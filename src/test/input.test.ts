
import { assert, expect, test } from 'vitest'
import funcs from '$lib/svg/funcs'

test('yaml input', () => {
    const input = `
-   []
-   -   ~
    -   ~
    -   text: t1
        group: g1
    -   test: t2
        group: g1
-   []
-   -   text: t3
        group: g2
    -   ~
    -   ~
    -   ~
    -   ~
    -   text: t5
        group: g3
-   -   text: t4:
        group: g2
    -   ~
    -   ~
    -   ~
    -   ~
    -   text: t6
        group: g3
-   []
-   -   ~
    -   ~
    -   text: t7
        group: g4
    -   text: t7
        group: g4
    `
    const actual = funcs.parseYaml(input)

    expect(actual.layout.length).toBe(0)
})

test('diagram input', () => {
    const input = `
        |       |
        |       |       | t1:g1 | t2:g1 |
        |       |       |       |       |
        | t3:g2 |       |       |       |       | t5:g3 |
        | t4:g2 |       |       |       |       | t6:g3 |
        |       |       |       |       |       |       |
        |       |       | t7:g4 | t8:g4 |       |       |
        |       |
    `
})