import ka from '../src'

test('sayHello can greet a user', (): void => {
  const user = { name: 'Typescript' }
  expect(sayHello(user)).toBe('Hello Typescript!')
})
