export function creatorControl(config, validation){
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: ''
  }
}