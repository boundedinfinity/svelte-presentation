import { assert, expect, test } from 'vitest'
import {parseId} from '$lib/svg/utils'

test('parse ID', () => {
    const actual0 = parseId('')
    expect(actual0).toBeUndefined()
    
    const actual1 = parseId('app1')
    expect(actual1.id).toBe('app1')
    expect(actual1.group).toBeUndefined()
    expect(actual1.connections).toBeUndefined()

    const actual2 = parseId('g1:app1')
    expect(actual2.id).toBe('app1')
    expect(actual2.group).toBe('g1')
    expect(actual2.connections).toBeUndefined()

    const actual3 = parseId('g1:app1->c1')
    expect(actual3.id).toBe('app1')
    expect(actual3.group).toBe('g1')
    expect(actual3.connections).toBe('c1')

    const actual4 = parseId('app1->c1')
    expect(actual4.id).toBe('app1')
    expect(actual4.group).toBeUndefined()
    expect(actual4.connections).toBe('c1')
})