export const step1 = 'step1'
export const step2 = 'step2'
export const step3 = 'step3'

export function step1Complete(registration) {
  return {
    type: step1,
    registration
  }
}

export function step2Complete(registration) {
  return {
    type: step2,
    registration
  }
}

export function step3Complete(registration) {
  return {
    type: step3,
    registration
  }
}
