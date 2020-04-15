import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status="put your message here"/>)
    const instance = component.getInstance()
    expect(instance.state.status).toBe("put your message here")
  })

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="put your message here"/>)
    const root = component.root
    let span = root.findByType("span")
    expect(span).not.toBeNull()
  })

  test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="put your message here"/>)
    const root = component.root
    let span = root.findByType("span")
    expect(span.children[0]).toBe('put your message here')
  })

  test("input should be displayer in edit mode instead of span", () => {
    const component = create(<ProfileStatus status="put your message here"/>)
    const root = component.root
    let span = root.findByType("span")
    span.props.onDoubleClick()
    let input = root.findByType("span")
    expect(input.children[0]).toBe('put your message here')
  })
})